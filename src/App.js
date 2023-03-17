import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "styled-components"
import GlobalStyles from './components/styled/Global';

import Router from './pages/Router'

function App() {

  const theme = useSelector((state) => state.theme);


  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Router />} />
          </Routes>
        </BrowserRouter>

      </>
    </ThemeProvider>
  );
}

export default App;
