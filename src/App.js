//import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Layouts/Header';
import Footer from './Component/Layouts/Footer';
import About from './Component/About';
import Brands from './Component/Brands';
import Ourteam from './Component/Ourteam';
import Contactus from './Component/Contactus';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
   <>
    {/* <Home/> */}
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/brands" element={<Brands/>}/>
      <Route path="/ourteam" element={<Ourteam/>}/>
      <Route path="/contactus" element={<Contactus/>}/>

    </Routes>

    <Footer/>
    
   </>
  );
}

export default App;
