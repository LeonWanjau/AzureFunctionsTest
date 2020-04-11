from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .forms import TestForm
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
import logging
from .models import Customer,TestImage
from .backends import EmailBackend

import json

def test_view(request):
    return HttpResponse("Test View")

# Create your views here.
def test_form(request):
    return render(request,'test2/test_form.html')

def test_form_validate(request):
    if request.method == 'POST':
        form=TestForm(json.loads(request.body))

        if form.is_valid():
            return JsonResponse({'error_state':False})
        else:
            errors=form.errors
            for key,val in errors.items():
                errors[key]=val[0]
            return JsonResponse({'error_state':True,'errors':errors})
     

def create_new_user(request):
    data=json.loads(request.body)
    user=User.objects.create_user(username=data['email'],email=data['email'],password=data['password'])
    customer=Customer.objects.create(
        first_name=data['firstName'],
        last_name=data['lastName'],
        date_of_birth=data['dateOfBirth'],
        user=user
    )


    #json_data=json.loads(request.body)
    #logger = logging.getLogger(__name__)
    #logger.debug(json_data)
    return JsonResponse({'userCreated':'true'})

def log_user_in(request):
    data=json.loads(request.body)
    #logger = logging.getLogger(__name__)
    #logger.debug(data)
    user=authenticate(request,username=data['email'],password=data['password'])

    if user is not None:
        login(request,user)
        return JsonResponse({'userLoggedIn':'true'})
    else:
        return JsonResponse({'userLoggedIn':'false'})

def log_user_out(request):
    logout(request)
    return JsonResponse({'userLoggedOut':'true'})

@login_required(login_url='/api/serverless/test2/prompt_login')
def protected_route(request):
    return JsonResponse({'giveUserAccess':'true'})

def prompt_login(request):
    return JsonResponse({'promptUserLogin':'true'},status=401)

def return_all_images(request):
    all_images=TestImage.objects.all()
    image_dict={}
    for image in all_images:
        image_dict[image.name]=image.upload.url
    
    return JsonResponse({'images':image_dict})
