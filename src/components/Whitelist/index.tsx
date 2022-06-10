import React, { useCallback } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useAppSelector } from 'hooks/useAppSelector';
import { Divider } from '@mui/material';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAlert } from 'hooks/useAlert';
import { deleteWhitelistItemAction } from '../../store/reducers/whitelist/actionCreators';
import { filteredWhitelistItemsSelector } from '../../store/reducers/selectors';

export const Whitelist: React.FC = () => {
  const whitelistItems = useAppSelector(filteredWhitelistItemsSelector);
  const dispatch = useAppDispatch();
  const alert = useAlert();

  const handleDeleteItem = useCallback((id: number) => {
    dispatch(deleteWhitelistItemAction(id))
      .unwrap()
      .catch((err) => alert.error(err.message));
  }, []);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {whitelistItems.map(({ url, id }) => (
        <React.Fragment key={id}>
          <ListItem
            disableGutters
            secondaryAction={(
              <IconButton aria-label="comment" onClick={() => handleDeleteItem(id)}>
                <DeleteIcon color="secondary" />
              </IconButton>
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
