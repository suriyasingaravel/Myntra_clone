import './App.css';
import Login from './Components/Login';
import ProductPage from './Components/ProductPage';
import Products from './Components/Products';
import Sidebar from './Components/Sidebar';
import Slider from './Components/Slider';
import Navbar from './Routes/Navbar';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <div >
     <Navbar/>
     {/* <Slider/> */}
     <Products/>
     <SinglePage/>

     
    </div>
  );
}

export default App;
