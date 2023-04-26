import React from 'react'
import { RiCloudy2Line } from "react-icons/ri";
import {MdOutlineBusinessCenter } from "react-icons/md";
import { TbWorldDownload } from "react-icons/tb";
import { BsChatLeftDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Service() {
  return (
    <div>
      <div>
        <h2 className='text-[33px] font-[600] leading-[40px] text-center lg:my-[100px] my-8'>Services</h2>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 m-auto px-12 '>
      <div className='bg-white rounded-lg shadow-2xl p-8'>
      <div className='flex text-lg  md:gap-10  gap-3 border-b-2  border-[#9E9E9E]'>
            <p className='self-center text-[20px] font-[500] text-[#0075FF] '><RiCloudy2Line></RiCloudy2Line></p>
            <p className='self-center py-5 text-[20px] font-[500] text-black'>Flight Services</p>
        </div>
        <div>
          <p className=' pt-5'>Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</p>
        </div>
      </div>
      {/* 2 */}
      <div className='bg-white rounded-lg shadow-2xl p-8'>
      <div className='flex text-lg  md:gap-10  gap-3 border-b-2  border-[#9E9E9E]'>
            <p className='self-center text-[20px] font-[500] text-[#FF4747] '><MdOutlineBusinessCenter></MdOutlineBusinessCenter></p>
            <p className='self-center py-5 text-[20px] font-[500] text-black'>Business Services</p>
        </div>
        <div>
          <p className=' pt-5'>Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</p>
        </div>
      </div>

      {/* 3 */}
      <div className='bg-white rounded-lg shadow-2xl p-8'>
      <div className='flex text-lg  md:gap-10  gap-3 border-b-2  border-[#9E9E9E]'>
            <p className='self-center text-[20px] font-[500] text-[#FF4747] '>< TbWorldDownload></ TbWorldDownload></p>
            <p className='self-center py-5 text-[20px] font-[500] text-black'>Shipping & Logistics</p>
        </div>
        <div>
          <p className=' pt-5'>Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</p>
        </div>
      </div>
      {/* 4 */}
      <div className='bg-white rounded-lg shadow-2xl p-8'>
      <div className='flex text-lg  md:gap-10  gap-3 border-b-2  border-[#9E9E9E]'>
            <p className='self-center text-[20px] font-[500] text-[#47A7FF] '><BsChatLeftDots></BsChatLeftDots></p>
            <p className='self-center py-5 text-[20px] font-[500] text-black'>24/7 Support</p>
        </div>
        <div>
          <p className=' pt-5'>Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</p>
        </div>
      </div>
      </div>
      <div className='flex justify-end'>
        <Link className='text-xl  rounded-full bg-[#6F57E9] border border-[#6F57E9] hover:bg-transparent hover:border-[#6F57E9] btn btn-circle relative bottom-6 right-20'><BsChatLeftDots className='hover:text-[#6F57E9] text-white'></BsChatLeftDots></Link>
      </div>
    </div>
  )
}

export default Service
