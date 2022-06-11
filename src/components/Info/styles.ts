import type { Styles } from 'types';

const styles: Styles = {
  root: {
    marginTop: 30,
    marginBottom: 30,
    padding: 20
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginBottom: 10,
    fontWeight: '600'
  },
  url: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginBottom: 10
  },
  link: (theme) => ({
    color: theme.palette.primary.main,
    textDecoration: 'none'
  }),
  text: {
    overflow: 'hidden',
    color: '#555a5f',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '3',
    '-webkit-box-orient': 'vertical'
  }
};

export default styles;
