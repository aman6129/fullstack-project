import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Button } from '@material-ui/core';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <Button variant='contained' onClick={() => logout()} color='secondary'>Logout</Button>
  );
};

export default LogoutButton;