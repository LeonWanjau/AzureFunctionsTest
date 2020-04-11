from .settings import *

DEFAULT_FILE_STORAGE = 'django_test2.backend.AzureMediaStorage'
STATICFILES_STORAGE = 'django_test2.backend.AzureStaticStorage'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME':'test2',
        'USER':'myadmin@lwtestfuncdb',
        'PASSWORD':'#Mon@Tue5',
        'HOST':'lwtestfuncdb.mysql.database.azure.com',
        'PORT': '3306',
        'OPTIONS': {
            'ssl': {'ssl-ca': 'c:/certificates/BaltimoreCyberTrustRoot2.crt.pem'}
        }
    }
}

STATIC_URL='https://noeltestfuncstorage.blob.core.windows.net/static'
MEDIA_URL='https://noeltestfuncstorage.blob.core.windows.net/media'