import React from 'react'
import './footer.css'
import Logo from './maaz-logo.png'
import Isologo from './iso-logo.png'
import { CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";

function Footer() {
  return (
    <div className='footer'>
      {/* <div className='icons'>
        <span>in</span>
        <span>G+</span>
        <span>in</span>
      </div> */}
        <div className='footerdiv'>
            <div className='logoimg'>
                <img src={Logo} alt="" />
                <p>Maaz Informatics was <br/>Incorporated in 2015. We<br/>
                 Provide Services in <br/>
                 Healthcare, Medical <br/>Billing, Call Center & Information Technology.</p>
            </div>
            <div className='office'>
                <h5>SARGHODHA OFFICE</h5>
                <span><CiLocationOn /></span>
                <span>269 Katchery Road, Sargodha 40100, Punjab, PK</span>
                <p>
                    <span><CgMail /></span>
                    <span>info@maazinformatics.com</span>
                </p>
                <p>
                    <span><CiClock2 /></span>
                    <span>08:00 AM To 08:00 PM Working Days: Mon To Sat</span>
                </p>
            </div>
            <div className='customer'>
                <h5>CUSTOMER SUPPORT</h5>
                <p>Our Virtual Support is<br/> Always Available to Answer Your Queries<br/> and Provide Solutions 24 Hours a Day.</p>
            </div>
            <div className='image'>
                <img src={Isologo} alt="" />
            </div>
        </div>
        <div className='copyright'><p>Copyright © 2015 - 2024. All Rights Reserved To Maaz Informatics</p></div>
    </div>
  )
}

export default Footer
