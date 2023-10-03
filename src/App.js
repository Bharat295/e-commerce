import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Loader from './components/Loader';
import CarouselDemo from './components/CarouselDemo';

function App() {
  const [type, setType] = useState('all');
  console.log(type);
  return (
    <div className="App">
      <Navbar setType = {setType} />
       
      <Router>
        <Routes>
         <Route exact path = '/' element = {<Home type={type}/>} />
         {/* <Route path = '/loader' element = {<Loader/>} /> */}
         <Route path = '/category/:category/:id' element = {<ProductDetails/>} />
         <Route path = '/category/:category' element = {<Home/>} />
        </Routes>
      </Router>
      
       

    </div>
  );
}

export default App;
