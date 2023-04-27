import React from 'react'
import { RiCloudy2Line } from "react-icons/ri";
function Load() {
  return (
   <div className='text-center  lg:mt-[100px] mt-8 md:mt-16'>
     <div className='grid lg:grid-cols-3  m-auto gap-8 '>
      <div className='w-[211px] h-[52px] bg-white rounded-xl m-auto  '>
      <div className='flex text-xs gap-2 my-4 mx-[46px]  text-[16px] font-[600] text-[#868686]'>
            <p className='self-center '><RiCloudy2Line></RiCloudy2Line></p>
            <p className='self-center '>Load</p>
        </div>
      </div>

      <div className='md:flex gap-3 grid grid-cols-2 m-auto'>
      <div className='flex gap-3'>
        <p className='btn btn-circle bg-[#D3B0FF] border-none p-3 '>1</p>
        <p className='w-[131px] h-[3px] bg-[#D3B0FF] self-center ' ></p>
      </div>
      <div className='flex gap-3'>
        <p className='btn btn-circle bg-[#D3B0FF] border-none p-3 '>2</p>
        <p className='w-[131px] h-[3px] bg-[#D3B0FF] self-center ' ></p>
      </div>
      <div className='flex gap-3'>
        <p className='btn btn-circle bg-[#D3B0FF] border-none p-3 '>3</p>
        <p className='w-[131px] h-[3px] bg-[#D3B0FF] self-center ' ></p>
      </div>
      <div>
      <p className='btn btn-circle  border-none p-3 hover:bg-[#D3B0FF] '></p>
      </div>
      </div>
    </div>
   </div>
  )
}

export default Load
