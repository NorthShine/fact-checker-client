import { Button, ButtonProps } from '@mui/material';
import { useStyles } from 'hooks/useStyles';
import styles from './styles';

export const GradientButton = (props: ButtonProps) => {
  const { children, color, ...rest } = props;
  const css = useStyles(styles, 'GradientButton');
  return (
    <Button
      css={css[color || 'inherit']}
      {...rest}
    >
      {children}
    </Button>
  );
};
