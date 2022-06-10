import { createSelector } from 'reselect';
import { WhitelistItem } from 'types';
import { RootState } from '../..';

export const whitelistItemsSelector = (state: RootState) => state.whitelist.items;
export const whitelistFilteredItemIdsSelector = (state: RootState) => state.whitelist.filtered;

export const filteredWhitelistItemsSelector = createSelector(
  [whitelistItemsSelector, whitelistFilteredItemIdsSelector],
  (items, ids) => {
    if (ids.length) {
      return items.reduce((acc: WhitelistItem[], item) => {
        if (ids.includes(item.id)) {
          acc.push(item);
        }
        return acc;
      }, []);
    }
    return items;
  }
);
