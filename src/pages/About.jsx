import React from 'react'
import { CiSearch, CiHeart} from "react-icons/ci";
import { MdAccessTimeFilled } from "react-icons/md";
import img3 from '../assets/shvit.svg';
import img4 from '../assets/ellipse.svg';
import img5 from '../assets/qizsavat.svg';
import img6 from '../assets/uzum.svg';
import img7 from '../assets/qulpnay.svg';
import img8 from '../assets/tabiat.svg';
import img9 from '../assets/kaktusqiz.svg';
import img10 from '../assets/mevalar.svg';
import img11 from '../assets/gulqiz.svg';
const About = () => {
  return (
  <>
<div className='container mx-auto'>

  <div className='w-[1500px] h-[300px] bg-[#EAF1EB] rounded-3xl
  pt-[80px]  mx-auto relative pl-[80px] mt-[50px] text-center items-center'>
<h1 className='text-7xl font-bold'>Welcome to our blog</h1>
<p className='text-2xl w-[780px] pt-8 text-[23px] font-[400] translate-x-[320px]'>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
  </div>
  

  <div className='flex mt-[50px] gap-[60px]'>
    <button className='w-[1100px] h-[80px] border-2 border-gray rounded-[20px] flex text-3xl pt-4 pl-8 gap-4'>
      <CiSearch className='text-3xl translate-y-[5px]' />Search
    </button>
    <button className='w-[350px] h-[80px] border-2 border-gray rounded-[20px]'>Sort by <br />Recently
    </button>
  </div>

  <div className='flex gap-[100px]'>
<div>
<div className=' items-center gap-10 pt-[30px]'>
  <div className='w-[850px] h-[450px] bg-[#EAF1EB] rounded-[10px] pl-[50px]'>
<p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
<h1 className='pt-4 pl-4 font-bold text-5xl w-[65%]'>How to plant spinach correctly in winter</h1>
<p className='pt-4 pl-4 w-[65%] text-2xl text-[gray]'>In most areas, successive sowing can be done 
  from early spring until early winter, but more 
  often during hotter months...</p>
<button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px] 
flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button></div>
<div><img src={img3} alt="" className='absolute translate-y-[-300px] translate-x-[555px]' /></div>
</div>



  



  <div className='flex items-center gap-10 pt-[50px]'>
    <div className='w-[400px] h-[400px] bg-[#EFF2F8] rounded-[10px] pl-[50px]'>
    <p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
    <h1 className='pt-4 pl-4 font-bold text-3xl'>How to plant spinach correctly in winter</h1>
    <button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
     flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
     <img src={img6} alt="" className='absolute translate-y-[5px] translate-x-[152px]'/>
    </div>

   
   
    <div className='w-[400px] h-[400px] bg-[#EFF2F8] rounded-[10px] pl-[50px]'>
    <p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
    <h1 className='pt-4 pl-4 font-bold text-3xl'>How to plant spinach correctly in winter</h1>
    <button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
     flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
 <div><img src={img4} alt="" className='absolute translate-y-[5px] translate-x-[152px]'/></div>

    </div>
  </div>


</div>




<div className='w-[500px] h-[900px] bg-[#EFF2F8] mt-[25px] pl-[30px] border-[1px] rounded-[10px]'>
<p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
<h1 className='pt-4 pl-4 font-bold text-5xl w-[65%]'>How to plant spinach correctly in winter</h1>
<p className='pt-4 pl-4  text-2xl text-[gray]'>In most areas, successive sowing can be done 
  from early spring until early winter, but more 
  often during hotter months...</p>
<button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
 flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
 <img src={img5} alt="" className='translate-y-[-100px] translate-x-[150px] w-[300px] h-[500px]'/>
</div>


</div>


<div className='flex gap-[100px] mt-[50px]'>

{/* <div className=' items-center gap-10 pt-[30px]'> */}
  <div className='w-[850px] h-[450px] bg-[#EAF1EB] rounded-[10px] pl-[50px]'>
<p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
<h1 className='pt-4 pl-4 font-bold text-5xl w-[65%]'>How to plant spinach correctly in winter</h1>
<p className='pt-4 pl-4 w-[65%] text-2xl text-[gray]'>In most areas, successive sowing can be done 
  from early spring until early winter, but more 
  often during hotter months...</p>
<button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px] 
flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
<img src={img7} alt="" className='translate-y-[-310px] translate-x-[490px] w-[300px] h-[500px]'/>
</div>


  


 <div className='w-[400px] h-[450px] bg-[#EAF1EB] rounded-[10px] pl-[50px]'>
    <p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
    <h1 className='pt-4 pl-4 font-bold text-3xl'>How to plant spinach correctly in winter</h1>
    <button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
     flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
     <img src={img8} alt="" className='translate-x-[152px] translate-y-[52px]'/>
 

    </div>
</div>


<div className='flex gap-[100px] mt-[50px]'>
<div className='w-[500px] h-[900px] bg-[#EAF1EB] mt-[25px] pl-[30px] border-[1px] rounded-[10px]'>
<p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
<h1 className='pt-4 pl-4 font-bold text-5xl w-[65%]'>How to plant spinach correctly in winter</h1>
<p className='pt-4 pl-4  text-2xl text-[gray]'>In most areas, successive sowing can be done 
  from early spring until early winter, but more 
  often during hotter months...</p>
<button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
 flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
 <img src={img9} alt="" className='translate-y-[-108px] translate-x-[139px] absolute'/>
</div>


<div className='w-[500px] h-[900px] bg-[#EFF2F8] mt-[25px] pl-[30px] border-[1px] rounded-[10px]'>
<p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
<h1 className='pt-4 pl-4 font-bold text-5xl w-[65%]'>How to plant spinach correctly in winter</h1>
<p className='pt-4 pl-4  text-2xl text-[gray]'>In most areas, successive sowing can be done 
  from early spring until early winter, but more 
  often during hotter months...</p>
<button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
 flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
 <img src={img10} alt="" className='translate-y-[70px] translate-x-[139px] absolute'/>
</div>



<div className='w-[500px] h-[900px] bg-[#EAF1EB] mt-[25px] pl-[30px] border-[1px] rounded-[10px]'>
<p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
<h1 className='pt-4 pl-4 font-bold text-5xl w-[65%]'>How to plant spinach correctly in winter</h1>
<p className='pt-4 pl-4  text-2xl text-[gray]'>In most areas, successive sowing can be done 
  from early spring until early winter, but more 
  often during hotter months...</p>
<button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
 flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
 <img src={img11} alt="" className='translate-y-[-109px] translate-x-[109px] absolute'/>
</div>
</div>





  
  
  
  
  
  
  
  
  
</div>
  </>
  )
}

export default About