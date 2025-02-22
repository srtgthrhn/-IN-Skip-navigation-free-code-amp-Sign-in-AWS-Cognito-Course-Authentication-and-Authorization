import React, { useContext, useEffect, useState } from 'react';
import { authContext } from './GlobalContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [message, setMessage] = useState("Authenticating...");
    const { setAuth } = useContext(authContext);
    const navigate = useNavigate();

    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');

    useEffect(() => {
        if (authorizationCode) {
            console.log("making API call to get access token", authorizationCode);
            setMessage("Getting access token...");
            fetch(import.meta.env.VITE_COGNITO_USER_POOL_DOMAIN + '/oauth2/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'authorization_code',
                    client_id: import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_ID,
                    code: authorizationCode,
                    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setMessage("Access token received. Storing in context...");
                    setAuth(data);
                    navigate('/');
                })
        } else {
            setMessage("Authorization code not found! Authentication failed.");
        }
    }, [authorizationCode]);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default Auth;