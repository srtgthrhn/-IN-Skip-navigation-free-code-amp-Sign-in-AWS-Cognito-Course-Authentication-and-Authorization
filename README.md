# CognitoCourse

# USER POOL APIs

# 1. To get OAuth Tokens using token endpoint

```
curl -X POST \
  https://<USERPOOL_DOMAIN_HERE>/oauth2/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=authorization_code&client_id=<CLIENT_ID_HERE>&code=<AUTHORIZATION_CODE_HERE>&redirect_uri=<REDIRECT_URI_HERE>'

  ```



# 2. API to Initiate Auth "USER_PASSWORD_AUTH"


```
curl --location --request POST 'https://cognito-idp.ap-south-1.amazonaws.com/' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.InitiateAuth' \
--header 'Content-Type: application/x-amz-json-1.1' \
--data-raw '{
    "AuthParameters": {
        "USERNAME": ".....",
        "PASSWORD": "...."
           },
    "AuthFlow": "USER_PASSWORD_AUTH",
    "ClientId": "......"
}'
```

To change password  if user is logging in first time:-
```
curl --location --request POST 'https://cognito-idp.ap-south-1.amazonaws.com/' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.RespondToAuthChallenge' \
--header 'Content-Type: application/x-amz-json-1.1' \
--data-raw '{
    "ChallengeName": "NEW_PASSWORD_REQUIRED",
    "ClientId": ".....",
    "ChallengeResponses": {"NEW_PASSWORD": ".....", "USERNAME": "...."},
      "Session": "..."

}'
```


# 3. API to Initiate Auth "USER_AUTH"
```
curl --location --request POST 'https://cognito-idp.ap-south-1.amazonaws.com/' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.InitiateAuth' \
--header 'Content-Type: application/x-amz-json-1.1' \
--data-raw '{
    "AuthParameters": {
        "USERNAME": ".....",
       "PREFERRED_CHALLENGE": "EMAIL_OTP"
    },
    "AuthFlow": "USER_AUTH",
    "ClientId": "......."
}'

```

To verify OTP---->

```
curl --location --request POST 'https://cognito-idp.ap-south-1.amazonaws.com/' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.RespondToAuthChallenge' \
--header 'Content-Type: application/x-amz-json-1.1' \
--data-raw '{
     "ChallengeName": "EMAIL_OTP", 
    "Session": "...",
    "ClientId": "....",
    "ChallengeResponses": {
        "USERNAME": "....",
        "EMAIL_OTP_CODE": "123456789"
    }
}'

```


# ID  POOL APIs
