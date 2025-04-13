# How To Setup Authenticator App Based MFA With AWS Cognito

* Create and confirm user
```bash
curl --location --request POST 'https://cognito-idp.ap-south-1.amazonaws.com/' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.SignUp' \
--header 'Content-Type: application/x-amz-json-1.1' \
--data-raw '{
    "ClientId": "...",
    "Username": "...",
    "Password": "..."
}'
```


```bash
curl --location --request POST 'https://cognito-idp.ap-south-1.amazonaws.com/' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.ConfirmSignUp' \
--header 'Content-Type: application/x-amz-json-1.1' \
--data-raw '{
    "ClientId": "...",
    "Username": "...",
    "ConfirmationCode": "..."
}'
```

![AWS Cognito Authenticator App MFA Setup](https://github.com/user-attachments/assets/e62eb73c-3868-43c3-ac4c-6d643a7fe090)



* Initiate Auth
```bash
curl --location --request POST 'https://cognito-idp.ap-south-1.amazonaws.com/' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.InitiateAuth' \
--header 'Content-Type: application/x-amz-json-1.1' \
--data-raw '{
    "AuthParameters": {
       "USERNAME": "...",
       "PASSWORD": "Secure2025#"
           },
    "AuthFlow": "USER_PASSWORD_AUTH",
    "ClientId": "..."
}'
```


* AssociateSoftwareToken
```bash
curl --location --request POST 'https://cognito-idp.ap-south-1.amazonaws.com/' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.AssociateSoftwareToken' \
--header 'Content-Type: application/x-amz-json-1.1' \
--data-raw '{
     "Session":"..."
}'
```

* VerifySoftwareToken
```bash
curl --location --request POST 'https://cognito-idp.ap-south-1.amazonaws.com/' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.VerifySoftwareToken' \
--header 'Content-Type: application/x-amz-json-1.1' \
--data-raw '{
     "Session":"...",
   "FriendlyDeviceName": "MyAuthenticatorApp",
   "UserCode": "535789"
}'
```

* RespondToAuthChallenge
```bash
curl --location --request POST 'https://cognito-idp.ap-south-1.amazonaws.com/' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.RespondToAuthChallenge' \
--header 'Content-Type: application/x-amz-json-1.1' \
--data-raw '{
    "ChallengeName": "MFA_SETUP", 
    "ClientId": "...",
    "Session": "...",
    "ChallengeResponses": {
        "USERNAME": "..."
    }
}'

```
