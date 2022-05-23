import type { Styles } from 'types';

const styles: Styles = {
  root: (theme) => ({
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.getContrastText(theme.palette.primary.light),
    fontSize: 30
  })
};

export default styles;
