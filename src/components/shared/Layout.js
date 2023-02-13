import React from 'react'

//component
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Layout = ({ children, id }) => {
  return (
    <div>
     <Navbar id={id} /> 
     {children}
      <Footer id={id} /> 
    </div>
  )
}

export default Layout
