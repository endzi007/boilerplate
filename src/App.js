import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import theme from './components/theme'
import store from './state/store';
import Profile from "./components/routes/profile";
import Contact from "./components/routes/contact";
import Navigation from './components/navigation'
import AppBar from './components/appBar'
import BottomAppBar from './components/bottomAppBar'
import ToggleDrawer from "./components/toggleDrawer";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
        <Navigation />
        <AppBar />
        <ToggleDrawer />
          <Switch>
            <Route exact path = "/contact" component={Contact}/>
            <Route exact path = "/profile" component={Profile}/>
          </Switch>
        </Router>
        <BottomAppBar />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
