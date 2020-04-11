from django.contrib import admin

from .models import TestImage
# Register your models here.

class TestImageAdmin(admin.ModelAdmin):
    fields=['name','upload']

admin.site.register(TestImage,TestImageAdmin)