import React from 'react'
import Login from './pages/Login.js';
import {BrowserRouter as Router,Routes,Switch,Route,Link} from "react-router-dom";
import Cars from './pages/Cars.js';
import DeCars from './pages/DeCars.js';
import Home from './pages/Home.js';
import Navbar from './pages/Navbar';
import i18n from "i18next";
import englishTranslation from './languages/en';
import germanTranslation from './languages/de';

import { useTranslation, initReactI18next } from "react-i18next";

function App() {
  const [currentLanguage, setCurrentLanguage] = React.useState('en')
  const [isAuthenticated,setisAuthenticated]=React.useState(false)
      
  React.useEffect(() => {
      i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
          resources: {
          en: { translation: englishTranslation },
          de: { translation: germanTranslation }
          },
          lng: "en",
          fallbackLng: "en",
          interpolation: { escapeValue: false },
      });
      selectLang('de')
  }, [])

  React.useEffect(() => {
    i18n.changeLanguage(currentLanguage)
  }, [currentLanguage])

  const selectLang = (ln) => {
    setCurrentLanguage(ln)
  }
  const setAuth = (val) => {
    console.log(val)
    setisAuthenticated(val)
  }
  return (
    <Router>
        <div className="App">
            <Navbar selectLanguage={selectLang} isAuthenticated={isAuthenticated}
            />
            <Routes>
              { isAuthenticated ?  <Route path="/cars/*"  element={<Cars />}/> : <Route path="/cars/*"  element={<DeCars />}/> } 

                <Route path="/" element={<Home />}/>
                <Route path="/login" exact element={<Login onLogin={setAuth} />} />
                              
            </Routes>
        </div>
    </Router>
  );
}

export default App;
