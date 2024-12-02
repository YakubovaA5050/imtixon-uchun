import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

const Contacts = () => {
  return (
    <>
    <div className='container mx-auto flex w-[1500px] h-[600px] bg-[#EAF1EB] rounded-3xl mt-[50px] '>

<div className='ml-[80px] mt-[50px]'>
<h1 className='text-5xl font-bold'>Contacts us</h1>
<p className='text-2xl w-[30%] pt-8 text-[23px] font-[300]'>Send for us your request and we will get in touch 
  with you as soon as possible</p>
<div className='flex items-center gap-4 pt-[200px]'> <FaPhoneVolume className='text-3xl text-[#359740] ' />
<h1 className='text-3xl font-[600]'>+380 98 782 82 23</h1></div>
<div className='flex items-center gap-4'><IoIosMailUnread className='text-3xl text-[#359740] ' />
<h1 className='text-3xl font-[600]'>mailmail@gmail.com</h1></div>
</div>











<div className='w-[700px] h-[500px] bg-[white] mt-[50px] ml-[-100px] rounded-3xl pt-[10px] pl-[50px] grid gap-1'>
<h1>Name</h1>
<button className='w-[550px] h-[40px] rounded-1xl border-[1px] mt-[10px]  '>
  <h1 className='text-1xl translate-x-[-215px]'>Your name</h1></button>


<h1>Email</h1>
<button className='w-[550px] h-[40px] rounded-1xl border-[1px]'>
  <h1 className='text-1xl translate-x-[-215px]'>Your name</h1></button>

<h1>Message</h1>
<button className='w-[550px] h-[100px] rounded-1xl border-[1px]'>
  <h1 className='text-1xl translate-x-[-215px]'>Your name</h1></button>


 <div className='flex gap-[60px]'>
 <button className='w-[200px] h-[60px] rounded-2xl border-[1px] mt-[10px] bg-[#359740] text-white'>Send request</button>
 <p className='text-1xl text-[gray] pt-[10px] w-[280px]'>By sending request you agree to out Pivacy&Policy</p>
  </div> 
</div>
    
    
    
    </div> 
    </>
  )
}

export default Contacts