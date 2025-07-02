import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

export const Login = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const UsernameField = styled(TextField)`
  height: 48px;
  width: 50%;
  margin: 16px 1px;
  color: '#C4C4C4';
`;

export const PasswordField = styled(TextField)`
  height: 48px;
  width: 50%;
  margin-bottom: 16px;
  color: '#C4C4C4';
`;

export const LoginButton = styled(Button)`
  width: 50%;
`;