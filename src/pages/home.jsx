import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default Home