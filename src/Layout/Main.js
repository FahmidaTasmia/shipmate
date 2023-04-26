import React from 'react'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
