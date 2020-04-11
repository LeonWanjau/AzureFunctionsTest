from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
import logging

class EmailBackend(ModelBackend):
    def authenticate(self,request, username=None, password=None, **kwargs):
        UserModel = get_user_model()
        try:
            user = UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            logging.debug('User model not exist')
            return None
        else:
            if user.check_password(password):
                return user
        logging.debug('User password wrong')
        return None
