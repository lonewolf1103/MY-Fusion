import React from 'react'
import { useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/ProductPage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import CartPage from './Pages/CartPage'
import Navbar from './Components/Navbar'
import axios from 'axios'
import Footer from './Components/Footer'
import CheckoutPage from './Pages/CheckoutPage'
import ThankYou from './Pages/ThanksPage'

const App = () => {

  const [location, setLocation] = useState()
  const [openDropdown, setOpenDropdown] = useState(false)

  const getLocation = async()=>{
    navigator.geolocation.getCurrentPosition( async pos =>{
      const {latitude, longitude} = pos.coords
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    
      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        setLocation(exactLocation)
        setOpenDropdown(false)
        
      } catch (error) {
        console.log(error);
        
      }
    })

    
  };

  useEffect(() => {
    getLocation()
  
  }, [])
  

  return (
    <BrowserRouter>
    <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        {/* <Route path='/Contact' element={<Contact/>}></Route> */}
        <Route path='/cartpage' element={<CartPage/>}></Route>\
        <Route path='/checkout' element={<CheckoutPage/>}></Route>
        <Route path='/thank-you' element={<ThankYou/>}></Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
