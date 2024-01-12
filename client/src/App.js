import './App.css';
import Hero from './Components/Hero';
import Login from './Components/Login';
import ProductPage from './Components/ProductPage';
import Products from './Components/Products';
import Sidebar from './Components/Sidebar';
import Slider from './Components/Slider';
import Navbar from './Routes/Navbar';

function App() {
  return (
    <div >
     <Navbar/>

     <Slider/>
     <Hero p={"MEDAL WORTHY BRANDS TO BAG"}/>
     <Hero p={"GRAND GLOBAL BRANDS"}/>


    </div>
  );
}

export default App;
