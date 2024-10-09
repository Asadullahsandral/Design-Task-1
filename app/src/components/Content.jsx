import React from 'react'
import './content.css'
import Image from './half-img.png'
import { RiCheckDoubleLine } from "react-icons/ri";

function Content() {
  return (
    <div className='content'>
        <div className='imgcontainer'>
            <img src={Image} alt="" className='img'/>
        </div>
      <div className='whatwedo'>
        <h3>What We Do</h3>
        <p>We are the world’s most cost effective Information Technology & Healthcare IT Services outsourcing company and specialize in customer care / support management, software & Web, Graphics Designing, Writing Based Work and Social Media Makrketing.
      </p>
        <p>Providing a services to corporate sector at Domestic and International level in the following areas</p>
      
        <RiCheckDoubleLine /><span>Healthcare Information Technology</span><br />
        <RiCheckDoubleLine /><span>Medical Billing & Coding</span><br />
        <RiCheckDoubleLine /><span>Call Center Services (International & Domestic)</span><br />
        <RiCheckDoubleLine /><span>Provider Enrollment & Credentialing</span><br />
        <RiCheckDoubleLine /><span>ePA - Electronic Prior Authorization</span><br />
        <RiCheckDoubleLine /><span>EMR Data Entry Coordination</span><br />
        <RiCheckDoubleLine /><span>Software & Web Development</span><br />
        <RiCheckDoubleLine /><span>Graphics Designing</span><br />
        <RiCheckDoubleLine /><span>Social Media Marketing</span><br />
        <RiCheckDoubleLine /><span>Article / Content Writing and etc</span>
      
      </div>
    </div>
  )
}

export default Content
