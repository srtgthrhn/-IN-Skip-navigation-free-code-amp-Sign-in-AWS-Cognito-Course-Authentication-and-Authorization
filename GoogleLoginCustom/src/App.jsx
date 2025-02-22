import { useContext, useState } from 'react'
import gLogo from './assets/gLogo.png'
import './App.css'
import { authContext } from './GlobalContext'

function App() {
  const { auth } = useContext(authContext)

  const cognitoUserPoolDomain = import.meta.env.VITE_COGNITO_USER_POOL_DOMAIN;
  const cognitoClientId = import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;

  const handleLogin = () => {
    window.location.href = `${cognitoUserPoolDomain}/oauth2/authorize?identity_provider=Google&client_id=${cognitoClientId}&response_type=code&redirect_uri=${redirectUri}&scope=email%20openid%20phone`;
  }


  const handleLogout = () => {
    window.location.href = `${cognitoUserPoolDomain}/logout?client_id=${cognitoClientId}&logout_uri=http://localhost:5173/`;
  }

  const isTokenActive = () => {
    const accessToken = auth?.access_token;
    const exp = accessToken ? JSON.parse(atob(accessToken?.split('.')?.[1] || '')).exp : 0;
    console.log(exp);
    return (exp * 1000) > Date.now();
  }

  return (
    <>
      {console.log("auth", auth, auth?.access_token, isTokenActive())}

      {auth?.access_token && isTokenActive() ? (
        <>
          Logged in - token found in context <br />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <button style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8f4f4",
          }} onClick={handleLogin}>
            Sign in with <img src={gLogo} width={"90vw"} />
          </button>
        </ >
      )
      }
    </>
  )
}

export default App
