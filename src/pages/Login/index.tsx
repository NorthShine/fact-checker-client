import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useStyles } from 'hooks/useStyles';
import TextField from '@mui/material/TextField';
import React, { useCallback, useState } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import styles from './styles';
import { GradientButton } from '../../ui/GradientButton';
import { getAuthAction } from '../../store/reducers/auth/actionCreators';

interface AuthData {
  login: string;
  password: string;
}

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const css = useStyles(styles, 'Login');
  const [data, setData] = useState<AuthData>({
    login: '',
    password: ''
  });

  const handleInputChange = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((state: AuthData) => ({
      ...state,
      [name]: value
    }));
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(getAuthAction(data));
  };

  return (
    <Container css={css.root} maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography css={css.title} variant="h5">Товарищ-майор, залогиньтесь</Typography>
        <TextField
          css={css.input}
          value={data.login}
          onChange={handleInputChange}
          name="login"
          size="small"
          label="Введите логин"
          fullWidth
        />
        <TextField
          css={css.input}
          value={data.password}
          onChange={handleInputChange}
          name="password"
          type="password"
          size="small"
          label="Введите пароль"
          fullWidth
        />
        <GradientButton
          css={css.input}
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
        >
          Войти
        </GradientButton>
      </form>
    </Container>
  );
};
