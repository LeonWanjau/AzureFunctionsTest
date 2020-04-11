import logging
import os
import sys
import pathlib

import azure.functions as func

#sys.path.append(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))
#from temp.temp1 import test_func

def main(req: func.HttpRequest) -> func.HttpResponse:
    #logging.info(sys.path)
    logging.info('Python HTTP trigger function processed a request.')

    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return func.HttpResponse(f"Hello {name}!")
    else:
        return func.HttpResponse(
             "Please pass a name on the query string or in the request body",
             status_code=400
        )
