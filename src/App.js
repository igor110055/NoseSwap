import './App.css';
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

function App() {
  return (
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
