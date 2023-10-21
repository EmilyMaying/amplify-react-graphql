// components/Login.js
import { useEffect } from "react";

import { Authenticator, Image, useAuthenticator, useTheme, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate, useLocation } from 'react-router';

export function Login() {

    const components = {
        Header() {
          const { tokens } = useTheme();
      
          return (
            <View textAlign="center" padding={tokens.space.large}>
              <Image
                alt="Amplify logo"
                src="https://docs.amplify.aws/assets/logo-dark.svg"
              />
            </View>
          );
        },
    }


  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  
  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  
  return (
    <View className="auth-wrapper">
        <Authenticator components={components}>
            {({ signOut }) => <button onClick={signOut}>Sign out</button>}
        </Authenticator>
    </View>
  );
}