import React from 'react';
import List from '@mui/material/List';
import { useAppSelector } from 'hooks/useAppSelector';
import { useStyles } from 'hooks/useStyles';
import { WhitelistItem } from 'components/common/WhitelistItem';
import { filteredWhitelistItemsSelector } from '../../../store/selectors';
import styles from './styles';

export const Whitelist: React.FC = () => {
  const whitelistItems = useAppSelector(filteredWhitelistItemsSelector);
  const css = useStyles(styles, 'Whitelist');

  return (
    <List css={css.root}>
      {whitelistItems.map((props) => (
        <WhitelistItem key={props!.id} {...props} />
      ))}
    </List>
  );
};
