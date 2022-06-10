import '@fontsource/outfit';
import { Provider as StateProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { store } from './store';
import { theme } from './theme';
import Routes from './routes';
import { AuthProvider } from './providers/AuthProvider';
import { AlertProvider } from './providers/AlertProvider';
import { LoaderProvider } from './providers/LoaderProvider';

const cache = createCache({
  key: 'css',
  prepend: true
});

const App = () => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <StateProvider store={store}>
        <AuthProvider>
          <AlertProvider>
            <LoaderProvider>
              <Router>
                <Routes />
              </Router>
            </LoaderProvider>
          </AlertProvider>
        </AuthProvider>
      </StateProvider>
    </ThemeProvider>
  </CacheProvider>
);

export default App;
