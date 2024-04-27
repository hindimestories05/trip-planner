import React from 'react'

import Header from './../header/header';
import Footer from './../Footer/footer';
import Routes from './../../router/Routers';

const layout = () => {
  return (
    <>
    <Header/>
    <Routes/>
    <Footer/>
    </>
  )
}

export default layout