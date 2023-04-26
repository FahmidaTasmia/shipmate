import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { GoCalendar } from "react-icons/go";
import { RiCloudy2Line } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className='m-auto text-center my-[100px]'>
        <h2 className='text-[42px] font-semibold leading-[50px] text-black mt-[100px]'>Hassle-Free Shipping Solutions</h2>
        <p className='text-[22px] text-black font-[500] leading-[26px] pt-4'>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</p>
      </div>

      <div className='w-[1287px] h-[82px] bg-white flex m-auto rounded-[14px] justify-between px-3'>
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
            <Link to='/' className='btn self-center border border-[#9747FF] hover:bg-transparent hover:text-[#9747FF] btn-sm  hover:border-[#9747FF] bg-[#9747FF]'><BsArrowRight className='font-bold '></BsArrowRight></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
