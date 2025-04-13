import {QRCodeSVG} from 'qrcode.react';

function MFA() {

  const secrectCode = "OJSMXJPMMG5TXN7MBTOE6SVQWXKK3VZA2H6LASSB2BU6ZL5BPU5Q";
  const issuer = "TrickSumo";
  const username = "testUser";
  const otpauth = `otpauth://totp/${issuer}:${username}?secret=${secrectCode}&issuer=${issuer}`;

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <QRCodeSVG value={otpauth} />
    </div>
  )
}

export default MFA
