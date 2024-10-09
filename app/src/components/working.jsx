import React from 'react'
import './working.css'
import { GoLightBulb } from "react-icons/go";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosAlbums } from "react-icons/io";
import { IoIosColorWand } from "react-icons/io";

function working() {
  return (
    <div className='working'>
      <h2>Our Working Strategy</h2>
      <div className='workingcontainer'>
        <div className='boxone'>
        <p className='bulb'><GoLightBulb /></p>
        <span>1</span>
        <p>Create A Plan</p>
        </div>
        <div className='boxone'>
        <p className='bulb'><IoReorderThreeOutline /></p>
        <span>2</span>
        <p>Develop A Strategy</p>
        </div>
        <div className='boxone'>
        <p className='bulb'><IoIosColorWand /></p>
        <span>3</span>
        <p>Testing</p>
        </div>
        <div className='boxone'>
        <p className='bulb'><IoIosAlbums /></p>
        <span>4</span>
        <p>Launching</p>
        </div>
      </div>

    </div>
  )
}

export default working
