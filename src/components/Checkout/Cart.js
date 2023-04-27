import React from 'react'
import { RiLuggageDepositLine } from "react-icons/ri";
import { GiCommercialAirplane,GiWeightScale } from "react-icons/gi";
import img from '../../asset/seller.png'
import img2 from '../../asset/xcover.png'
function Cart() {
  return (
    <div className='grid lg:grid-cols-2 gap-8 mt-[80px]'>
      <div className='w-[907px]'>
        <div className='bg-white shadow-2xl rounded-[14px] py-5 px-3 mx-5'>
        <p className='text-start font-bold text-black mb-4'>Booking Summary</p>
        <div className='grid grid-cols-3'>
            <div></div>
            <div>
            <p>Express</p>
            <GiCommercialAirplane className='mx-3 mt-2'></GiCommercialAirplane>
            </div>
            <div></div>

        </div>
        <div className='flex'>
            <div >
                <div className='flex m-auto'>
                <RiLuggageDepositLine className='text-3xl ml-6'></RiLuggageDepositLine>
                <p className='border-r bg-black w-[633px] h-[1px] self-center'></p>
                
                </div>
               <div className='pl-4 w-[20px] text-center mt-2 text-sm '>
               <p >Delhi,110003 India</p>
                
               </div>
            </div>
            <div >
                <div className='flex'>
                <RiLuggageDepositLine className='text-3xl '></RiLuggageDepositLine>
              
                </div >
                <p className='w-[30px]  text-sm text-center mt-2'>Shanghai 200080, China </p>
               
            </div>
        </div>
        </div>
        <div className='flex gap-5 mt-5 px-5 '>
            <div className='bg-white shadow-2xl rounded-[14px] text-center p-3 w-[232px]'>
                <p className='text-sm'>Total Weight/Volume</p>
                <p className='m-auto flex px-8 justify-center '><GiWeightScale className='text-2xl mt-3 text-center '></GiWeightScale></p>
                <p className='text-center'>114.21KG</p>

            </div>

            <div className='bg-[#FFFFFF] w-[644px] h-[165px] text-center rounded-[14px]'>
                <p className='text-start px-5'>Load</p>
                <div className='flex gap-5 m-auto justify-center  '>
                    <p className='text-xl mt-2 text-center'>1X</p>
               <div>
               <p className='pl-12 self-center mb-2'>  <RiLuggageDepositLine className='text-4xl '></RiLuggageDepositLine></p>
               <p>Pallets</p>
               <p>230 X 140 X  120 CM</p>
               </div>
                </div>
            </div>
        </div>
        <div className='flex  mt-5 gap-5 px-5'>
            <div className='bg-white shadow-2xl rounded-[14px] w-[443px] h-[187px] grid '>
            <p className='m-5'>Seller: Primetime Worldwide</p>
                <div className='place-self-center '>
                
                <img src={img} alt="" />
                </div>
            </div>
            <div className='bg-white shadow-2xl rounded-[14px] w-[443px] h-[187px] grid '>
            <p className='m-5'>Seller: Primetime Worldwide</p>
                <div className='place-self-center '>
                
                <img src={img2} alt="" />
                </div>
            </div>
        </div>
      </div>
      <div className='w-1/4'>

      </div>
    </div>
  )
}

export default Cart
