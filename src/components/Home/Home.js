import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { GoCalendar } from "react-icons/go";
import { RiCloudy2Line } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Service from './Service';
function Home() {
  return (
    <div>
      <div className='m-auto text-center lg:my-[100px]'>
        <h2 className='lg:text-[42px] text-2xl font-semibold lg:leading-[50px] text-black mt-[100px]'>Hassle-Free Shipping Solutions</h2>
        <p className='lg:text-[22px] text-xs text-black font-[500] leading-[26px] pt-4'>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</p>
      </div>

     <div className='hidden lg:block'>
     <div className='w-[1287px] h-[82px] bg-white flex m-auto rounded-[14px] justify-between px-3 '>
        <div className='flex text-lg gap-1'>
            <p className='self-center '><CiLocationOn></CiLocationOn></p>
            <p className='self-center '> Origin,Port,City</p>
        </div>
        <div className='flex text-lg gap-1'>
            <p className='self-center '><CiLocationOn></CiLocationOn></p>
            <p className='self-center '>Destination,Port,City</p>
        </div>

        <div className='flex text-lg gap-2 '>
            <p className='self-center border-l-2 pl-2'><GoCalendar></GoCalendar></p>
            <p className='self-center '>13 April 2023</p>
        </div>

        <div className='flex text-lg gap-2 '>
            <p className='self-center border-l-2 pl-2'><RiCloudy2Line></RiCloudy2Line></p>
            <p className='self-center '>Load</p>
        </div>
        <div className='flex'>
          <p className='border-l-2 pl-2 my-8'></p>
            <Link to='/booking' className='btn self-center border border-[#9747FF] hover:bg-transparent hover:text-[#9747FF] btn-sm  hover:border-[#9747FF] bg-[#9747FF]'><BsArrowRight className='font-bold '></BsArrowRight></Link>
        </div>
      </div>
     </div>

     <div className='block lg:hidden'>
        <div className='grid grid-cols-2 md:grid-cols-5 bg-white rounded-xl my-5 gap-3 md:gap-5 text-xs px-3 py-5 mx-5'>
        <div className='flex  gap-1'>
            <p className='self-center '><CiLocationOn></CiLocationOn></p>
            <p className='self-center '> Origin,Port,City</p>
        </div>
        <div className='flex gap-1'>
            <p className='self-center '><CiLocationOn></CiLocationOn></p>
            <p className='self-center '>Destination,Port,City</p>
        </div>
        <div className='flex text-xs gap-2 '>
            <p className='self-center border-l-2 pl-2'><GoCalendar></GoCalendar></p>
            <p className='self-center '>13 April 2023</p>
        </div>
        <div className='flex text-xs gap-2 '>
            <p className='self-center border-l-2 pl-2'><RiCloudy2Line></RiCloudy2Line></p>
            <p className='self-center '>Load</p>
        </div>
        <div className='flex '>
        <p className='border-l-2 pl-2 my-8'></p>
            <Link to='/booking' className='btn self-center border border-[#9747FF] hover:bg-transparent hover:text-[#9747FF] btn-sm  hover:border-[#9747FF] bg-[#9747FF]'><BsArrowRight className='font-bold '></BsArrowRight></Link>
        </div>
        </div>
     </div>

      <div>
        <Service></Service>
      </div>
    </div>
  )
}

export default Home
