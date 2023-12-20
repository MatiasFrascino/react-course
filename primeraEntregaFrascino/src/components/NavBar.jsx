import React from 'react'
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'


const Nav = () => {

  return (
    <>
      <img src={logo} alt="" />
      <ul>
        <li>Ropa</li>
        <li>Gorras</li>
        <li>Accesorios</li>
        <li>Pilotos</li>
      </ul>
      <CartWidget/>
    </>
  )
}

export default Nav