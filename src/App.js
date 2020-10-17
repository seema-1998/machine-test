import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage/HomaPage';
import { Route, Switch, useHistory } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/on-board/Login';
import { PrivateRoutes, PublicRoutes } from './components/routes/routes';


function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [loaded, setLoad] = useState("");

  useEffect(() => {
    console.log("useerba",localStorage.getItem("username"))
    {(localStorage.getItem("username") && localStorage.getItem("password")) ? setIsLogin(true) :setIsLogin(false) }
    setLoad("loaded");
  }, [isLogin]);
  return (
    <div>
          {loaded && (
        <Router history={useHistory}>
          {isLogin ? (
            <PrivateRoutes setIsLogin={setIsLogin} />
          ) : (
            <PublicRoutes setIsLogin={setIsLogin} />
          )}
        </Router>
      )}
    </div>
  );
}

export default App;
