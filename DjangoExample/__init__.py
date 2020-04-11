from .WSGI_Handler import AzureFunctionsWsgi
import sys
import os
#sys.path.append(os.getcwd()+'\\DjangoExample\\django_test2')
sys.path.append(os.path.dirname(os.path.realpath(__file__))+'/django_test2')
import azure.functions as func
import logging
from .django_test2.django_test2.wsgi import application
#from azf_wsgi import AzureFunctionsWsgi


os.environ.setdefault('FUNCTIONS_MOUNT_POINT', 'api/serverless')


#azure_application = AzureWSGIHandler(application)

#main = func.WsgiMiddleware(application).main

def main(req: func.HttpRequest, context: func.Context) -> func.HttpResponse:
    logging.info(sys.path)
    logging.info('Python HTTP trigger function processed a request.')
    #response = azure_application(req)
    # return response
    return AzureFunctionsWsgi(application).main(req, context)
    #return func.HttpResponse('Hello')
