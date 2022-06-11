import React, { useCallback } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useAppSelector } from 'hooks/useAppSelector';
import { Divider } from '@mui/material';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useStyles } from 'hooks/useStyles';
import { deleteWhitelistItemAction } from '../../store/reducers/whitelist/actionCreators';
import { filteredWhitelistItemsSelector } from '../../store/selectors';
import styles from './styles';

export const Whitelist: React.FC = () => {
  const whitelistItems = useAppSelector(filteredWhitelistItemsSelector);
  const dispatch = useAppDispatch();
  const css = useStyles(styles, 'Whitelist');

  const handleDeleteItem = useCallback((id: number) => {
    dispatch(deleteWhitelistItemAction(id));
  }, []);

  // const handleEditItem = (id: number) => {

  // };

  return (
    <List css={css.root}>
      {whitelistItems.map(({ url, id }) => (
        <React.Fragment key={id}>
          <ListItem
            disableGutters
            secondaryAction={(
              // <>
              //   <IconButton aria-label="comment" onClick={() => handleEditItem(id)}>
              //     <EditIcon color="inherit" />
              //   </IconButton>
              <IconButton aria-label="comment" onClick={() => handleDeleteItem(id)}>
                <DeleteIcon color="secondary" />
              </IconButton>
              // </>
            )}
          >
            <ListItemText primary={url} />
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};
