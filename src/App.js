import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Cat from './components/CategoryData';
import ProductDetails from './components/ProductDetails';
function App() {
  const [type, setType] = useState('all');
  console.log(type);
  return (
    <div className="App">
      <Navbar setType = {setType} />
      
      <Router>
        <Routes>
         <Route path = '/' element = {<Home type={type}/>} />
         <Route path = '/category/:category/:id' element = {<ProductDetails/>} />
         {/* <Route path = '/category/:category/:id' element = {<Cat/>} /> */}
        </Routes>
      </Router>
     
       {/* <Router>
        <Routes>

        </Routes>

      </Router> */}

    </div>
  );
}

export default App;
