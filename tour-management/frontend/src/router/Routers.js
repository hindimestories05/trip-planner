import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from './../Pages/Home';
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import SearchResultList from './../Pages/SearchResultList';
import TourDetails from './../Pages/TourDetails';
import Tours from './../Pages/Tours';
import Blog from './../Pages/Blog';
import About from './../Pages/About';

const Routers = () => {
    return (
        <Routes>
            <Route path='' element={ <Navigate to={'/home'}/>} />
            <Route path='/home' element={ <Home/>} />
            <Route path='/login' element={ <Login/>} />
            <Route path='/register' element={ <Register/>} />
            <Route path='/tours/search' element={ <SearchResultList/>} />
            <Route path='/tours/:id' element={ <TourDetails/>} />
            <Route path='/tours' element={ <Tours/>} />
            <Route path='/blog' element={ <Blog/>} />
            <Route path='/about' element={ <About/>} />
        </Routes>
    )
}

export default Routers