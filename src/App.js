import React from 'react';
import GlobalStyle from './style/GlobalStyle';
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom';

import HomeScreen from './pages/Home/index';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Browser>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="*">
            <h1>Página não encontrada</h1>  
          </Route> 
        </Switch>
      </Browser>
    </ThemeProvider>
  );
}

export default App;
