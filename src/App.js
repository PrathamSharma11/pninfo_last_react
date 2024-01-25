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
import Updatevariable from './Component/Updatevariable';
import State from './Component/State';
import Countstate from './Component/Countstate';
import Props from './Component/Props';
import {useState} from 'react';
import Showhide from './Component/Showhide';
import Form1 from './Component/Form1';
import Registration from './Component/Registration';
import Userclass from './Component/Userclassprops';
import Userclassprops from './Component/Userclassprops';
import Classstate from './Component/Classstate';
import Constructor from './Component/LifeCycleMethod/Constructor';
import ComponentDidMount from './Component/LifeCycleMethod/ComponentDidMount';
import UseState from './Component/Hooks/UseState';
import UseState1 from './Component/Hooks/UseState1';
import UseEffect from './Component/Hooks/UseEffect';
import UseEffect1 from './Component/Hooks/UseEffect1';
function App() {
  const [title, settitle] = useState('ram')
  return (
   <>
    
    {/* <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/brands" element={<Brands/>}/>
      <Route path="/ourteam" element={<Ourteam/>}/>
      <Route path="/contactus" element={<Contactus/>}/>

    </Routes>

    <Footer/> */}


    {/* for state= */}
    {/* <Updatevariable/>
    <State/> */}
    {/* <Countstate/> */}





     {/* for props=  */}
    {/* <Props title={title} phone='12345'/>
    <button onClick={()=>{settitle('rohit')}}>click me</button>
    <Showhide/>
    <Form1/> */}




    {/* <Registration/> */}



    {/* for class with props and states= 
    <Userclassprops name="ram"/> 
    <Classstate/> */}



     {/* life cycle method= 
    <Constructor/>
    <ComponentDidMount/> */}






    {/* <UseState/> */}
    {/* <UseState1/> */}
    {/* <UseEffect/> */}
    <UseEffect1/>
    
   </>
  );
}

export default App;
