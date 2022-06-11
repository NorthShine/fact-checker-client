import type { Styles } from 'types';

const styles: Styles = {
  root: {
    textAlign: 'center',
    display: 'flex',
    maxWidth: 1200,
    height: '93%',

    justifyContent: 'center'
  },
  header: (theme) => ({
    backgroundColor: theme.palette.primary.light,
    maxWidth: 1200,
    margin: 'auto',
    height: '100%',
    zIndex: -1
  }),
  headlineResult: {
    textAlign: 'left',
    padding: 15,
    fontWeight: 700,
    fontSize: 18
  },
  Tablecontainer: {
    width: 500,
    margin: 'auto',
    marginTop: 20
  }
};

export default styles;
