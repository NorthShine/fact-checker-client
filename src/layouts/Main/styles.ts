import type { Styles } from 'types';

const styles: Styles = {
  root: (theme) => ({
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.getContrastText(theme.palette.primary.light),
    fontSize: 30
  }),
  container: {
    padding: 20,
    backgroundColor: '#9fa7d6',
    borderRadius: '10px'
  }
};

export default styles;
