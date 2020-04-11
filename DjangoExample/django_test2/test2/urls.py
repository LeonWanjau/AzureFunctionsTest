from django.urls import path

from . import views

app_name='test2'
urlpatterns= [
    path('test_form',views.test_form,name='test_form'),
    path('test_form_validate',views.test_form_validate,name='test_form_validate'),
    path('create_new_user',views.create_new_user,name='create_user'),
    path('log_user_in',views.log_user_in,name='log_user_in'),
    path('log_user_out',views.log_user_out,name='log_user_out'),
    path('prompt_login',views.prompt_login,name='prompt_login'),
    path('protected_route',views.protected_route,name='protected_route'),
    path('test_view',views.test_view,name='test_view'),
    path('return_all_images',views.return_all_images,name='return_all_images')
]