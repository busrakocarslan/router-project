import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

function Footer() {
  return (
    <div className='display-5 text-warning d-flex flex-row-reverse justify-content-around align-items-end flex-wrap mt-5 pt-5'>
        <ImFacebook2 />
        <FaSquareXTwitter />
        <PiInstagramLogoFill />



    </div>
  )
}

export default Footer