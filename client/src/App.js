import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './configs/theme';
import history from './history';
import Login from './pages/login';
import Home from './pages/home';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Friends from './pages/friends';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={Friends} />
      </Switch>
    </Router>
    </ThemeProvider>
  )
}

export default App;

