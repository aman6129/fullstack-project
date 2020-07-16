import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button variant='contained' onClick={loginWithRedirect} color='primary'>Login</Button>
  );
};

export default LoginButton;
