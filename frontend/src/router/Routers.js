import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResult from './../pages/SearchResult';
import ThankYou from '../pages/ThankYou';
import ListAcc from '../pages/ListAcc';
import Hotels from '../pages/Hotels';
import About from '../pages/About';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/accomodation' element={<ListAcc />} />
      <Route path='/accomodations/:id' element={<ListAcc />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank-you' element={<ThankYou />} />
      <Route path='/hotel' element={<Hotels />} />
      <Route path="/hotels/:id" element={<Hotels />} />
      <Route path='/about' element={<About />} />
      <Route path='/accomodations/search' element={<SearchResult />} />
    </Routes>
  );
};

export default Routers;
