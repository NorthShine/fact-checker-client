import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { Whitelist } from 'components/common/Whitelist';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useStyles } from 'hooks/useStyles';
import React, { useEffect, useState } from 'react';
import { addToWhitelistAction, getWhitelistItemsAction } from '../../store/reducers/whitelist/actionCreators';
import { filterWhitelistItemsAction } from '../../store/reducers/whitelist/whitelistSlice';
import styles from './styles';

export const Admin: React.FC = () => {
  const css = useStyles(styles, 'Admin');
  const [url, setUrl] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWhitelistItemsAction());
  }, []);

  const handleSearch = (event: React.SyntheticEvent) => {
    const { value } = (event.target as HTMLInputElement);
    setSearch(value);
    dispatch(filterWhitelistItemsAction(value));
  };

  const handleInputChange = (event: React.SyntheticEvent) => {
    const { value } = (event.target as HTMLInputElement);
    setUrl(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = { url };
    dispatch(addToWhitelistAction(data));
    setUrl('');
  };

  return (
    <Container css={css.root} maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Container css={css.form}>
          <TextField
            value={url}
            onChange={handleInputChange}
            label="Введите URL"
            fullWidth
            size="small"
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Добавить
          </Button>
        </Container>
      </form>
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
