import React,{useState,useEffect} from 'react';
import Navbar from './components/header/navbar/Navbar';
import './App.css';
import NewNav from './components/newNvbar/NewNav';
import MainComponents from './components/home/mainComponent/MainComponents';
import Footer from './components/footer/Footer';
import {Routes,Route} from "react-router-dom"
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import CircularProgress from '@mui/material/CircularProgress';

function App() {

  const [data ,setData] =useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setData(true);

    },2000)
  },[])
  return (
    <>
    {
      data ? (
        <>
        <Navbar/>
      <NewNav/>
      <Routes>
      <Route path='/' element={<MainComponents/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/register'element={<Signup/>}/>
      <Route path ='/getproductsone/:id' element={<Cart/>}/>
      <Route path="/buynow" element={<Buynow/>}/>

      </Routes>
      <Footer/>
        </>
      ): (
          <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>
        )
    }
      
    </>
  );
}

export default App;
