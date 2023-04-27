import React from 'react'
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { FaCircle } from "react-icons/fa";
import { CiLocationOn } from 'react-icons/ci';
import { BsAirplane, BsChatLeftDots } from 'react-icons/bs';
import img from '../../asset/frame.png'
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
function Value() {
  return (
    <div className='lg:flex gap-8 md:grid  grid grid-cols-1 m-auto'>
      <div className='lg:w-3/12 w-full '>
       <div className='mx-12'>
       <p className='text-[16px] font-bold mb-8'>3 Top Quote <span className=' font-normal'>(6 in Total)</span></p>
       <div>
        <p className='flex justify-between self-center mb-3'>Filters <TfiAngleDown className='self-center'></TfiAngleDown></p>
        <p className='flex justify-between self-center mb-3'>Price <TfiAngleDown className='self-center'></TfiAngleDown></p>
        <p className='flex justify-between self-center mb-3'>Modes <TfiAngleDown className='self-center'></TfiAngleDown></p>
        <p className='flex justify-between self-center mb-3'>Seller <TfiAngleDown className='self-center'></TfiAngleDown></p>
       </div>
       </div>
      </div>
      <div className='lg:w-3/5 w-full mt-[40px]  m-auto rounded-[14px] '>
        <div className='md:flex justify-between grid bg-white p-5'>
        <div>
            <div className='lg:flex gap-8'> 
                <button className='gap-2 flex bg-[#AFFFAD] text-xs p-[10px] font-normal text-black rounded-[12px]  self-center'><FaCircle className='self-center text-xs text-[#05FF00]'></FaCircle> Best Value</button>
                <div className='flex gap-5'>
                <p className='text-[#FF0000] self-center'>Express</p>
                <p className='border-l-2 pl-4 h-5  self-center'>Est. 5 days</p>
                </div>

                </div>
                
            <div className='flex gap-3 my-4'>
            <p className='self-center flex gap-2  '><CiLocationOn className='self-center'></CiLocationOn>110003, Delhi</p>
            <p className='border w-[24px] h-[2px] self-center border-[#565656]'></p>
            <p className='self-center'><BsAirplane></BsAirplane></p>
            <p className='border w-[24px] h-[2px] self-center border-[#565656]'></p>
            <p className='self-center  flex gap-2'><CiLocationOn className='self-center'></CiLocationOn>200080, Shanghai</p>
            </div>
            <div className='flex gap-3 '>
            <img className='w-[20px] h-[15px] self-center' src={img} alt="" />
            <p className='text-[#808080]'>Primetime Worldwide</p>
            <div className='flex gap-2 self-center text-[#9747FF]'>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiOutlineStar></AiOutlineStar></p>
            </div>
        </div>
        </div>

        <div className='border-l-2 px-3'>
            <p className='text-black font-bold'>$ 3,982<span className='text-xs mt-4'>.63</span></p>
            <button className='w-[101px] bg-[#6F57E9] rounded-[14px] h-[39px] text-white my-[10px]'>Select</button>
            <p><Link className='text-sm underline '>View details</Link></p>
        </div>
      
        </div>
        {/* 2 */}
        <div className='md:flex justify-between grid my-8 bg-white p-5'>
        <div>
            <div className='lg:flex gap-8'> 
                <button className='gap-2 flex bg-[#ADBFFF] text-xs p-[10px] font-normal text-black rounded-[12px]  self-center'><FaCircle className='self-center text-xs text-[#446DFF]'></FaCircle> Eco</button>
                <div className='flex gap-5'>
                <p className='text-[#FF0000] self-center'>Express</p>
                <p className='border-l-2 pl-4 h-5  self-center'>Est. 5 days</p>
                </div>

                </div>
                
            <div className='flex gap-3 my-4'>
            <p className='self-center flex gap-2  '><CiLocationOn className='self-center'></CiLocationOn>110003, Delhi</p>
            <p className='border w-[24px] h-[2px] self-center border-[#565656]'></p>
            <p className='self-center'><BsAirplane></BsAirplane></p>
            <p className='border w-[24px] h-[2px] self-center border-[#565656]'></p>
            <p className='self-center  flex gap-2'><CiLocationOn className='self-center'></CiLocationOn>200080, Shanghai</p>
            </div>
            <div className='flex gap-3 '>
            <img className='w-[20px] h-[15px] self-center' src={img} alt="" />
            <p className='text-[#808080]'>Primetime Worldwide</p>
            <div className='flex gap-2 self-center text-[#9747FF]'>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiOutlineStar></AiOutlineStar></p>
            </div>
        </div>
        </div>

        <div className='border-l-2 px-3'>
            <p className='text-black font-bold'>$ 3,982<span className='text-xs mt-4'>.63</span></p>
            <button className='w-[101px] bg-[#6F57E9] rounded-[14px] h-[39px] text-white my-[10px]'>Select</button>
            <p><Link className='text-sm underline '>View details</Link></p>
        </div>
      
        </div>
        {/* 3 */}
        <div className='md:flex justify-between grid bg-white p-5'>
        <div>
            <div className='lg:flex gap-8'> 
                <button className='gap-2 flex bg-[#AFFFAD] text-xs p-[10px] font-normal text-black rounded-[12px]  self-center'><FaCircle className='self-center text-xs text-[#05FF00]'></FaCircle> Best Value</button>
                <div className='flex gap-5'>
                <p className='text-[#FF0000] self-center'>Express</p>
                <p className='border-l-2 pl-4 h-5  self-center'>Est. 5 days</p>
                </div>

                </div>
                
            <div className='flex gap-3 my-4'>
            <p className='self-center flex gap-2  '><CiLocationOn className='self-center'></CiLocationOn>110003, Delhi</p>
            <p className='border w-[24px] h-[2px] self-center border-[#565656]'></p>
            <p className='self-center'><BsAirplane></BsAirplane></p>
            <p className='border w-[24px] h-[2px] self-center border-[#565656]'></p>
            <p className='self-center  flex gap-2'><CiLocationOn className='self-center'></CiLocationOn>200080, Shanghai</p>
            </div>
            <div className='flex gap-3 '>
            <img className='w-[20px] h-[15px] self-center' src={img} alt="" />
            <p className='text-[#808080]'>Primetime Worldwide</p>
            <div className='flex gap-2 self-center text-[#9747FF]'>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiOutlineStar></AiOutlineStar></p>
            </div>
        </div>
        </div>

        <div className='border-l-2 px-3'>
            <p className='text-black font-bold'>$ 3,982<span className='text-xs mt-4'>.63</span></p>
            <button className='w-[101px] bg-[#6F57E9] rounded-[14px] h-[39px] text-white my-[10px]'>Select</button>
            <p><Link className='text-sm underline '>View details</Link></p>
        </div>
      
        </div>
        {/* 4 */}
        <div className='md:flex justify-between grid bg-white p-5 my-8'>
        <div>
            <div className='lg:flex gap-8'> 
                <button className='gap-2 flex bg-[#AFFFAD] text-xs p-[10px] font-normal text-black rounded-[12px]  self-center'><FaCircle className='self-center text-xs text-[#05FF00]'></FaCircle> Best Value</button>
                <div className='flex gap-5'>
                <p className='text-[#FF0000] self-center'>Express</p>
                <p className='border-l-2 pl-4 h-5  self-center'>Est. 5 days</p>
                </div>

                </div>
                
            <div className='flex gap-3 my-4'>
            <p className='self-center flex gap-2  '><CiLocationOn className='self-center'></CiLocationOn>110003, Delhi</p>
            <p className='border w-[24px] h-[2px] self-center border-[#565656]'></p>
            <p className='self-center'><BsAirplane></BsAirplane></p>
            <p className='border w-[24px] h-[2px] self-center border-[#565656]'></p>
            <p className='self-center  flex gap-2'><CiLocationOn className='self-center'></CiLocationOn>200080, Shanghai</p>
            </div>
            <div className='flex gap-3 '>
            <img className='w-[20px] h-[15px] self-center' src={img} alt="" />
            <p className='text-[#808080]'>Primetime Worldwide</p>
            <div className='flex gap-2 self-center text-[#9747FF]'>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiFillStar></AiFillStar></p>
                <p><AiOutlineStar></AiOutlineStar></p>
            </div>
        </div>
        </div>

        <div className='border-l-2 px-3'>
            <p className='text-black font-bold'>$ 3,982<span className='text-xs mt-4'>.63</span></p>
            <button className='w-[101px] bg-[#6F57E9] rounded-[14px] h-[39px] text-white my-[10px]'>Select</button>
            <p><Link className='text-sm underline '>View details</Link></p>
        </div>
      
        </div>
      </div>
      <div className='w-1/6 '>
      <div className='flex justify-end'>
        <Link className='text-xl  rounded-full bg-[#6F57E9] border border-[#6F57E9] hover:bg-transparent hover:border-[#6F57E9] btn btn-circle relative  top-[500px] m-auto  '><BsChatLeftDots className='hover:text-[#6F57E9] text-white'></BsChatLeftDots></Link>
      </div>
      </div>
    </div>
  )
}

export default Value
