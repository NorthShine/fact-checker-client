import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { Whitelist } from 'components/Whitelist';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useStyles } from 'hooks/useStyles';
import React, { useState } from 'react';
import { addToWhitelistAction } from '../../store/reducers/whitelist/actionCreators';
import { filterWhitelistItemsAction } from '../../store/reducers/whitelist/whitelistSlice';
import styles from './styles';

export const Admin: React.FC = () => {
  const css = useStyles(styles, 'Admin');
  const [url, setUrl] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.SyntheticEvent) => {
    const { value } = (event.target as HTMLInputElement);
    setSearch(value);
    dispatch(filterWhitelistItemsAction(value));
  };

  const handleInputChange = (event: React.SyntheticEvent) => {
    const { value } = (event.target as HTMLInputElement);
    setUrl(value);
  };

  const handleClick = () => {
    const data = { url };
    dispatch(addToWhitelistAction(data));
  };

  return (
    <Container css={css.root} maxWidth="sm">
      <Container css={css.form}>
        <TextField
          value={url}
          onChange={handleInputChange}
          label="Введите URL"
          fullWidth
          size="small"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Добавить
        </Button>
      </Container>
      <TextField
        value={search}
        onChange={handleSearch}
        label="Поиск"
        fullWidth
        size="small"
      />
      <Whitelist />
    </Container>
  );
};
