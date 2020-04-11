from storages.backends.azure_storage import AzureStorage

accountName='noeltestfuncstorage'
accountKey="6ERnEWFj2wiHgypF3xY4erklW5XH2cN2Pw3gntL4ybUOAl6SFnMCIDjC1fTuTi7s2YcL6xgXNPu9Mg7kaJSS1w=="

class AzureMediaStorage(AzureStorage):
    account_name = accountName # Must be replaced by your <storage_account_name>
    account_key = accountKey # Must be replaced by your <storage_account_key>
    azure_container = 'media'
    expiration_secs = None

class AzureStaticStorage(AzureStorage):
    account_name = 'noeltestfuncstorage' # Must be replaced by your storage_account_name
    account_key = accountKey # Must be replaced by your <storage_account_key>
    azure_container = 'static'
    expiration_secs = None
