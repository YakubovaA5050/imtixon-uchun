import React from 'react'
import { GoArrowLeft } from "react-icons/go";

const Blog = () => {
  return (
<>
<div className='container mx-auto flex   mt-[50px] '>

<div>
<div className='flex items-center gap-2'><GoArrowLeft className='text-3xl' /> <h1 className='text-3xl font-bold'>Checkout</h1>
<div className='flex gap-2 translate-x-[500px]'>
<button className='w-[40px] h-[6px] bg-[#359740] border-[1px] rounded-[10px]'></button>
<button className='w-[40px] h-[6px] bg-[#EAF1EB] border-[1px] rounded-[10px]'></button>
</div>

</div>

<div className='mt-[30px]'>
  <h1 className='text-3xl font-bold'>Personal info</h1>
  <div className='flex gap-[100px] mt-[20px]'>
  <div> <h2>Your name</h2>
  <button className='w-[300px] h-[40px] rounded-1xl border-[1px] mt-[10px]  '>Your name</button></div>
  <div>
    <h2>Your number</h2>
    <button className='w-[300px] h-[40px] rounded-1xl border-[1px] mt-[10px]  '>Your number</button>
    </div>

  </div>
 
</div>

<div className='mt-[30px]'> 
<h1 className='text-3xl font-bold'>Address</h1>

<div className='flex gap-[100px] mt-[20px]'>
  <div>
<div> <h2>State</h2>
<button className='w-[300px] h-[40px] rounded-1xl border-[1px] mt-[10px]  '>Name of state</button>
</div>
<div> 
<h2>City</h2>
<button className='w-[300px] h-[40px] rounded-1xl border-[1px] mt-[10px]  '>Name of city</button>
</div>

  </div>



  <div className=''>
  <div>
  <h2>Address</h2>
  <button className='w-[300px] h-[40px] rounded-1xl border-[1px] mt-[10px]  '>Your address</button>
    </div> 

    <div>
    <h2>Zip code</h2>
    <button className='w-[300px] h-[40px] rounded-1xl border-[1px] mt-[10px]  '>Your zip code</button>
    </div>
  </div>
</div>


</div>
</div>










<div className='w-[500px] h-[600px] bg-[white] mt-[50px] ml-[-100px] rounded-3xl 
 translate-x-[300px] container pl-[50px] grid gap-1 border-[1px]'>
  <h1 className='text-3xl font-bold pt-[10px]'>Your cart</h1>
  <div><p className='text-2xl text-[gray]'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</p>
  <h2 className='text-2xl pt-4'>$12.56</h2>
  <button className='w-[380px] h-[2px] bg-[gray]'></button>
  </div>
  <div>
  <p className='text-2xl text-[gray]'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</p>
  <h2 className='text-2xl pt-4'>$12.56</h2>
  <button className='w-[380px] h-[2px] bg-[gray]'></button>
  </div>
  <div>
  <p className='text-2xl text-[gray]'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</p>
  <h2 className='text-2xl pt-4'>$12.56</h2>
  <button className='w-[380px] h-[2px] bg-[gray]'></button>
  </div>

  <div className='flex justify-between'>
    <p className='text-2xl text-[gray]'>Total amount</p>
    <h2 className='text-2xl translate-x-[-80px]'>$12.56</h2>
  </div>
</div>

</div>
</>
  )
}

export default Blog