import React from 'react'
import './navbar.css'
import LOGO from './maaz-logo.png'

function Navbar() {
  return (
    <>
      <header>
            <div class="container">
                <div class="logo-box">
                        <img src={LOGO} />
                </div>
                <nav>
                    <ul>
                        <li><a href="/">home</a></li>
                        <li><a href="/">who we are</a></li>
                        <li><a href="/">services</a></li>
                        <li><a href="/">career</a></li>
                        <li><a href="/">contact us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Navbar
