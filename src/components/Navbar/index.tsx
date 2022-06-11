import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { GradientButton } from '../../ui/GradientButton';
import { signOutAction } from '../../store/reducers/auth/authSlice';

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useAppSelector((state) => state.auth);

  const handleLogin = () => {
    if (token) {
      dispatch(signOutAction());
    } else {
      navigate('/login');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
            NorthShine
          </Typography>
          <GradientButton
            variant="contained"
            color="secondary"
            onClick={handleLogin}
          >
            {token ? 'Выйти' : 'Войти'}
          </GradientButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
