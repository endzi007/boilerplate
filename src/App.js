import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";

function App() {
  const { t, i18n } = useTranslation();
  const handleClick = (lang)=>{
    console.log(lang);
    i18n.changeLanguage(lang);
  }
  return (
    <ThemeProvider>
      <Provider>
      <div className="App">
        <nav>
          <button onClick = {()=>{handleClick("en")}}>English</button>
          <button onClick = {()=>{handleClick("sr")}}>Serbian</button>
        </nav>
        <Typography variant="h3">{t('learn.1')}</Typography>
          </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
