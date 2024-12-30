# CognitoCourse

# To get OAuth Tokens using token endpoint

curl -X POST \
  https://<USERPOOL_DOMAIN_HERE>/oauth2/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=authorization_code&client_id=<CLIENT_ID_HERE>&code=<AUTHORIZATION_CODE_HERE>&redirect_uri=<REDIRECT_URI_HERE>'
