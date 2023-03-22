import React from 'react';
import { Navbar, Footer, Header, Products } from '../components';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <h1>PRODUCT OVERVIEW</h1>
      <Products />
      <Footer />
    </div>
  )
}

export default Home