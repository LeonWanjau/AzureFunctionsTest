"""django_test2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

import os

FUNCTIONS_MOUNT_POINT = os.getenv('FUNCTIONS_MOUNT_POINT', 'api/serverless')

# first = [path(FUNCTIONS_MOUNT_POINT + '/admin/', admin.site.urls),
#         path(FUNCTIONS_MOUNT_POINT + '/test2/', include('test2.urls')),
#         ]+static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# urlpatterns = first+static(settings.MEDIA_URL,
#                           document_root=settings.MEDIA_ROOT)

urlpatterns = [
    path(FUNCTIONS_MOUNT_POINT + '/admin/', admin.site.urls),
    path(FUNCTIONS_MOUNT_POINT + '/test2/', include('test2.urls')),
]
