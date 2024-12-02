import React from 'react'
import { AiFillFire } from "react-icons/ai";
import { IoLeafOutline } from "react-icons/io5";
import { TfiFiles } from "react-icons/tfi";
import { GiTomato } from "react-icons/gi";
import { LiaAppleAltSolid } from "react-icons/lia";
import { PiFlowerTulipBold } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { GiOakLeaf } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import Card from '../components/Card';
import { PiShoppingCartLight } from "react-icons/pi";
import { MdAccessTimeFilled } from "react-icons/md";
import img from '../assets/kokat.svg';
import img1 from '../assets/joxori.svg';
import img2 from '../assets/kokat2.svg';
import img3 from '../assets/shvit.svg';
import img4 from '../assets/ellipse.svg';
import img5 from '../assets/qizsavat.svg';
import img6 from '../assets/ellipse2.svg';
import img7 from '../assets/ellipse3.svg';

const Products = () => {
  return (
  <>
  <div className='flex items-center justify-center mx-auto container w-[100vw] mt-20'>

<div className='w-[2200px] h-[630px] bg-[#EAF1EB] rounded-3xl  mx-auto relative pl-[80px]'>
 <div className='text-7xl font-bold mt-[60px] '>
  <h1>SEEDRA Basil Seeds for </h1>
  <h1>Indoor and Outdoor Planting</h1></div> 
  <p className='text-2xl w-[780px] pt-8 text-[23px] font-[400]'>Be sure of our quality - the freshest batches of this seaon. Non-GMO,
     Heirloom - our seeds were tested and have the best germination ratings.
      Your easy growing experience is our guarantee</p>
     <div className='flex items-center gap-10 pt-8'>
     <AiFillFire className='text-red-500 text-8xl' />
      <h1 className='text-7xl font-bold'>$12.56</h1>
      <h3 className='text-3xl text-gray-500 py-8'> <del>$15.56</del></h3>
      </div> 

<div className='flex items-center gap-10 pt-8'>
  <button className='bg-[#359740] text-white px-4 py-2 rounded-2xl w-[200px] h-[50px] font-semibold'>Add to Card</button>
  <button className='bg-white text-[#359740] px-4 py-2 rounded-2xl w-[200px] h-[50px] font-semibold'>Discover</button>
</div>

</div>
<div className=''><img src={img} alt="" className='absolute right-0 top-0 w-[500px] h-[500px] mt-[200px] left-[1200px] '/></div>




  </div>
  
  
  <div className='w-[1550px] h-[140px] bg-[#FFE62E17] rounded-3xl  mx-auto relative top-[30px] text-center pt-[30px]'>
    <h1 className='text-5xl font-[500]'>We sell seeds </h1>
    <p className='text-2xl font-[300] pt-4 text-gray-500'>that always sprout and gardening supplies which never break</p>
  </div>


  <div className='w-[100vw] mt-20 mx-auto container'>
<div className='flex  '><h1 className='text-7xl font-bold'>Our products.</h1>
<button className='bg-[white] text-[#359740] px-4 py-2 rounded-[10px] w-[200px] 
h-[50px] font-semibold border-[1px] mt-[20px] ml-[800px]'>
  View all (12)</button>
</div>





<div className='flex items-center gap-10 pt-[50px]'>
  <button className='w-[120px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
  <IoLeafOutline className='text-2xl text-[#359740]'/> ALL </button>
  <button className='w-[150px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <TfiFiles className='text-2xl text-[#359740] ' /> BUNDLES</button>
  <button className='w-[140px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <GiOakLeaf className='text-2xl text-[#359740]'/> HERBS</button>
  <button className='w-[180px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <GiTomato className='text-2xl text-[#359740]' /> VEGETABLES</button>
  <button className='w-[160px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <LiaAppleAltSolid className='text-2xl text-[#359740]'/> FRUITS</button>
  <button className='w-[160px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <PiForkKnifeFill className='text-2xl text-[#359740]' /> SUPPLIES</button>
  <button className='w-[160px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <PiFlowerTulipBold className='text-2xl text-[#359740]' /> FLOWERS</button>
</div>


<div>



<div className="flex items-center gap-10 pt-[50px] ">
  <div>
    <Card
      img={<img src={img} alt="Cilantro Seeds" />}
      star="⭐⭐⭐⭐⭐ (123)"
      title="Seedra Cilantro Seeds for Planting Indoor and Outdoor"
      price="$12.56"
      icon={<PiShoppingCartLight />}
    />
  </div>
  <div>
    <Card
      img={<img src={img1} alt="Corn Seeds" />}
      star="⭐⭐⭐⭐⭐ (123)"
      title="SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting"
      price="$12.56"
      icon={<PiShoppingCartLight />}
    />
  </div>
  <div>
    <Card
      img={<img src={img2} alt="Spinach Seeds" />}
      star="⭐⭐⭐⭐⭐ (123)"
      title="SEEDRA Spinach Seeds for Indoor and Outdoor Planting"
      price="$12.56"
      icon={<PiShoppingCartLight />}
    />
  </div>
</div>

<div className='flex items-center gap-10 pt-[50px]'>
<div><Card  img={<img src={img} alt="Cilantro Seeds" />}  star="⭐⭐⭐⭐⭐ (123)" 
  title= "Seedra Cilantro Seeds for Planting Indoor and Outdoor " 
  price="$12.56" icon=<PiShoppingCartLight />/></div>
<div><Card img={<img src={img1} alt="Corn Seeds" />}  star="⭐⭐⭐⭐⭐ (123)" 
  title= "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting " 
  price="$12.56" icon=<PiShoppingCartLight />/></div>
<div><Card img={<img src={img2} alt="Spinach Seeds" />} star="⭐⭐⭐⭐⭐ (123)" 
  title= "SEEDRA Spinach Seeds for Indoor and Outdoor Planting " 
  price="$12.56" icon=<PiShoppingCartLight />/></div>

</div>


</div>


<div className='flex w-[100vw] mt-20 mx-auto container '><h1 className='text-7xl font-bold'>Our blog.</h1>
<button className='bg-[white] text-[#359740] px-4 py-2 rounded-[10px] w-[200px] 
h-[50px] font-semibold border-[1px] mt-[20px] ml-[800px]'>
Go to our blog</button>
</div>

<div className='flex gap-[100px]'>
<div >
<div className=' items-center gap-10 pt-[30px]'>
  <div className='w-[850px] h-[450px] bg-[#EAF1EB] rounded-[10px] pl-[50px]'>
<p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
<h1 className='pt-4 pl-4 font-bold text-5xl w-[65%]'>How to plant spinach correctly in winter</h1>
<p className='pt-4 pl-4 w-[65%] text-2xl text-[gray]'>In most areas, successive sowing can be done 
  from early spring until early winter, but more 
  often during hotter months...</p>
<button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px] 
flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
<div><img src={img3} alt="" className='absolute right-0 top-0 w-[300px] h-[400px] top-[2960px] left-[730px] '/></div>
</div>



  </div>



  <div className='flex items-center gap-10 pt-[50px]'>
    <div className='w-[400px] h-[400px] bg-[#EFF2F8] rounded-[10px] pl-[50px]'>
    <p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
    <h1 className='pt-4 pl-4 font-bold text-3xl'>How to plant spinach correctly in winter</h1>
    <button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
     flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
     <img src={img4} alt="" className='absolute left-[385px]'/>
    </div>

   
   
    <div className='w-[400px] h-[400px] bg-[#EFF2F8] rounded-[10px] pl-[50px]'>
    <p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
    <h1 className='pt-4 pl-4 font-bold text-3xl'>How to plant spinach correctly in winter</h1>
    <button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
     flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
 <img src={img4} alt="" className='absolute left-[825px]'/>

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
 <img src={img5} alt="" className='absalute translate-y-[-100px] w-[300px] h-[500px] translate-x-[150px] '/>


</div>
</div>


<div>
<div className='flex items-center gap-2 justify-center pt-[50px]'>
  <button className='w-[40px] h-[5px] bg-[#359740] rounded-[10px]'></button>
  <button className='w-[40px] h-[5px] bg-green-100 rounded-[10px]'></button>
  <button className='w-[40px] h-[5px] bg-green-100 rounded-[10px]'></button>
</div>



<div className='flex items-center justify-center'>
<div className='container pt-[80px] w-[100%]'>
  <h1 className='text-5xl font-bold w-[50%]'>Seedra helps to grow fast and efficiant</h1>
  <p className='pt-4 text-1xl text-[black] w-[50%] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
  <p className='pt-4 text-1xl text-[black] w-[50%] '>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have
     the best germination ratings. </p>
  <p className=' text-1xl text-[black] w-[50%] '>  Your easy growing experience is our guarantee
  Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more
  </p>
  <p className='pt-[50PX] text-1xl text-[black] w-[50%] '>  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers 
    and are happy to produce this American-made product</p>
</div>

<div className='absolute'> 
  <img src={img6} alt="" className='translate-y-[300px] w-[400px] h-[400px] translate-x-[450px]'/>
  <img src={img7} alt="" className='translate-y-[-150px] w-[500px] h-[500px] translate-x-[400px]' />
</div>
</div>


</div>







</div>





  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default Products