import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage'
import Footer from './Components/Footer/Footer'
import Coins from './Components/Coins/Coins';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import CoinDetails from './Components/CoinDetails/CoinDetails';
import BdAddress from './Components/Contact/BdAddress';
import UsaAddress from './Components/Contact/UsaAddress';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/coins' element={<Coins></Coins>}></Route>
          <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
          <Route path='/contact' element={<Contact></Contact>}>
            <Route path='bd-address' element={<BdAddress></BdAddress>}></Route>
            <Route path='us-address' element={<UsaAddress></UsaAddress>}></Route>
          </Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
