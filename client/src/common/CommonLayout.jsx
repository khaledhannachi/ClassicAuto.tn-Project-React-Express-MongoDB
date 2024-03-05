import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const CommonLayout = ({children,loggedUser}) => {
  return (
    <>
    <Nav loggedUser = {loggedUser}/>
    {children}
    <Footer/>
    </>
  )
}

export default CommonLayout