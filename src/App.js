import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './components/pages/Signup';
import List from './components/pages/List';
import Hotel from './components/pages/Hotel';
import AdminLogin from './components/pages/Adminportal/AdminLogin';
import AddHotel from './components/pages/Adminportal/AdminAddHotel';
import Guidelines from './components/pages/Guidelines/Guidelines';
import AdminOptions from './components/pages/Adminportal/AdminOptions';
import DeleteHotel from './components/pages/Adminportal/AdminDelete';
import AddRoom from './components/pages/Adminportal/AdminRoomAdd';
import PaymentPortal from './components/pages/PaymentPortal/Payment';
import Successful from './components/pages/PaymentPortal/Success';
import SearchItem from './components/pages/SearchItem';
import Hoteltype from './components/pages/Hoteltype';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/hotels'  element={<List/>} />
          <Route path='/hotels/:id' element={<Hotel/>} />
          <Route path='/sign-up' element={<LoginSignup/>} />
          <Route path='/admin' element={<AdminLogin/>} />
          <Route path='/add-hotel-ADMIN' element={<AddHotel/>} />
          <Route path='/guidelines' element={<Guidelines/>} />
          <Route path='/admin-options' element={<AdminOptions/>} />
          <Route path='/delete-hotel-ADMIN' element={<DeleteHotel/>} />
          <Route path='/add-room-ADMIN' element={<AddRoom/>} />
          <Route path='/payment-portal' element={<PaymentPortal/>}/>
          <Route path='/payment-success' element={<Successful/>}/>
          <Route path='/hotle-type' element={<Hoteltype/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;