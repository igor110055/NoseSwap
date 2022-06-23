import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import StakingReward from './views/StakingReward';
import CryptoAssets from './views/CryptoAssets';
import MyWallet from './views/MyWallet';
import Providers from './views/Providers';
import Calculator from './views/Calculator';
import Privacy from './views/Privacy';
import Staking from './views/Staking';
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

function App() {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/stakingReward" element={<StakingReward />} />
          <Route path="/cryptoassets" element={<CryptoAssets />} />
          <Route path="/mywallet" element={<MyWallet />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/staking/:symbol" element={<Staking />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
