import React from 'react'
import { TfiPencilAlt2 } from "react-icons/tfi";
import { CiLocationOn } from 'react-icons/ci'
import { GoCalendar } from 'react-icons/go'
import { RiCloudy2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Origin() {
  return (
  <div>
      <div className='lg:mt-[100px] mt-8 md:mt-16 border-b-2 '>
      <div className='hidden lg:block mb-5'>
     <div className='w-[1287px] h-[82px] bg-white flex m-auto rounded-[14px] justify-between px-3 '>
        <div className='flex text-lg gap-1'>
            <p className='self-center '><CiLocationOn></CiLocationOn></p>
            <p className='self-center '> Delhi, 110003</p>
        </div>
        <div className='flex text-lg gap-1'>
            <p className='self-center '><CiLocationOn></CiLocationOn></p>
            <p className='self-center '>Shanghai 200080</p>
        </div>

        <div className='flex text-lg gap-2 '>
            <p className='self-center border-l-2 pl-2'><GoCalendar></GoCalendar></p>
            <p className='self-center '>13 April 2023</p>
        </div>

        <div className='flex text-lg gap-2 '>
            <p className='self-center border-l-2 pl-2'><RiCloudy2Line></RiCloudy2Line></p>
            <p className='self-center '>114.21KG - AIR</p>
        </div>
        <div className='flex'>
        <p className='border-l-2 pl-2 my-8'></p>
            <Link to='/booking' className=' self-center border  hover:bg-transparent text-[#9747FF] border-none hover:text-[#9747FF]  hover:border-[#9747FF] bg-transparent'><TfiPencilAlt2 className='font-bold '></TfiPencilAlt2></Link>
        </div>
      </div>
     </div>
     <div className='block lg:hidden mb-5'>
        <div className='grid grid-cols-2 md:grid-cols-5 bg-white rounded-xl my-5 gap-3 md:gap-5 text-xs px-3 py-5 mx-5'>
        <div className='flex  gap-1'>
            <p className='self-center '><CiLocationOn></CiLocationOn></p>
            <p className='self-center '> Delhi, 110003</p>
        </div>
        <div className='flex gap-1'>
            <p className='self-center '><CiLocationOn></CiLocationOn></p>
            <p className='self-center '>Shanghai 200080</p>
        </div>
        <div className='flex text-xs gap-2 '>
            <p className='self-center border-l-2 pl-2'><GoCalendar></GoCalendar></p>
            <p className='self-center '>13 April 2023</p>
        </div>
        <div className='flex text-xs gap-2 '>
            <p className='self-center border-l-2 pl-2'><RiCloudy2Line></RiCloudy2Line></p>
            <p className='self-center '>114.21KG - AIR</p>
        </div>
        <div className='flex '>
        <p className='border-l-2 pl-2 my-8'></p>
            <Link to='/booking' className='btn self-center border border-[#9747FF] hover:bg-transparent hover:text-[#9747FF] btn-sm  hover:border-[#9747FF] bg-[#9747FF]'><TfiPencilAlt2 className='font-bold '></TfiPencilAlt2></Link>
        </div>
        </div>
     </div>

     
    </div>
    <div className='hidden lg:block'>
    <div className='w-[688px] h-[42px] bg-[#EBE8FF] flex m-auto gap-8 pr-5 mt-4 shadow-2xl rounded-[14px]'>
       <div className='self-center bg-white h-full py-2 px-5 rounded-[14px] z-30 shadow-2xl'>
        <p >Best Value 5-5 days. $3,121</p>
       </div>
       <div className='flex m-auto gap-8 '>
        <p>Quickest 5-5 days. $3,121</p>
        <p>Cheapest 5-5 days. $3,121</p>
       </div>
     </div>
    </div>
  </div>
  )
}

export default Origin
