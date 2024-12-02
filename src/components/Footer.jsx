import React from 'react'
import { FaInstagram } from "react-icons/fa"
import { BiLogoFacebookCircle } from "react-icons/bi";

const Footer = () => {
  return (
   <>
   <div className='w-[100vw] bg-[white] container mx-auto mt-[100px]'>
    <div className='flex items-center justify-between'>
      <h1 className='text-1xl font-bold text-[#359740]'>ALL PRODUCTS</h1>
      <button className='w-[2px] h-[20px] bg-[#359740]'></button>
      <h1>ABOUT SEEDRA</h1>
      <button className='w-[2px] h-[20px] bg-[#359740]'></button>
      <h1>OUR BLOG</h1>
      <h1 className='text-5xl font-bold text-[#359740]'>SEEDRA</h1>
      <h1>Terms&Conditions</h1>
      <button className='w-[2px] h-[20px] bg-[#359740]'></button>
      <h1>Privacy Policy</h1>
    </div>


    <div> <button className='w-[1550px] h-[1px] bg-[#359740]'></button></div>


    <div className='flex items-center justify-between pb-[30px]'>
   <div className='flex items-center gap-5'>
   <FaInstagram className='text-2xl text-[#359740]' />
   <BiLogoFacebookCircle className='text-2xl text-[#359740]' />
    </div>
    <h1>All rights reserved</h1>
    </div>

   </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default Footer