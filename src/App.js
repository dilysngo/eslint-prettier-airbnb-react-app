import 'assets/css/global.scss';
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { HomePage } from 'modules/home';

import messagesEn from 'translations/en.json';
import messagesVi from 'translations/vi.json';

const messages = {
  en: messagesEn,
  vi: messagesVi,
};

const LANGUAGE = 'lang';
const languageLocal = localStorage.getItem(LANGUAGE);
const languageBrowser = navigator.language.split(/[-_]/)[0];

function App() {
  const dispatch = useDispatch();
  const language = languageLocal || languageBrowser;

  useEffect(() => {}, [dispatch]);

  return (
    <>
      <ToastContainer />
      <IntlProvider locale={language} messages={messages[language]}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </IntlProvider>
    </>
  );
}

export default App;
