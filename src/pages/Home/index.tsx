import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useStyles } from 'hooks/useStyles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import styles from './styles';
import { GradientButton } from '../../ui/GradientButton';

type TTab = 'url' | 'text';

export const Home: React.FC = () => {
  const [tab, setTab] = useState<TTab>('url');
  const css = useStyles(styles, 'Home');

  const handleChange = (event: React.SyntheticEvent, value: TTab) => {
    setTab(value);
  };

  return (
    <Container css={css.root} maxWidth="sm">
      <Typography css={css.title} variant="h4">Проверка на фейк</Typography>
      <Typography css={css.subtitle} variant="body1">
        Введите URL или текст, чтобы проверить новость на фейк.
      </Typography>
      <Container>
        <TabContext value={tab}>
          <Container css={css.tabs}>
            <TabList variant="fullWidth" onChange={handleChange} aria-label="tabs" centered>
              <Tab sx={styles.tab} label="Url" value="url" />
              <Tab sx={styles.tab} label="Текст" value="text" />
            </TabList>
          </Container>
          <TabPanel value="url">
            <TextField
              label="Введите URL"
              fullWidth
            />
          </TabPanel>
          <TabPanel value="text">
            <TextField
              label="Введите текст"
              rows={4}
              multiline
              fullWidth
            />
          </TabPanel>
        </TabContext>
        <Container>
          <GradientButton
            variant="contained"
            color="secondary"
            fullWidth
          >
            Проверить
          </GradientButton>
        </Container>
      </Container>
    </Container>
  );
};
