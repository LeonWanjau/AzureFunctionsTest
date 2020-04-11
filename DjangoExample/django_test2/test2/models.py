from django.db import models
from django.contrib.auth.models import User

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name=models.CharField(max_length=20)
    last_name=models.CharField(max_length=20)
    date_of_birth=models.DateField()

class TestImage(models.Model):
    name=models.CharField(max_length=20)
    upload=models.ImageField(upload_to='uploads')
