import React from 'react'
import { RiLuggageDepositLine } from "react-icons/ri";
import { GiCommercialAirplane,GiWeightScale } from "react-icons/gi";
import img from '../../asset/seller.png'
import img2 from '../../asset/xcover.png'
import { BsStarFill } from 'react-icons/bs';
function Cart() {
  return (
    <div className='flex  gap-8 mt-[80px]'>
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
      <div className='w-[366px] bg-white shadow-2xl rounded-[14px]'>
        <div className='flex gap-8 my-8 justify-center'>
            <p className='font-bold self-center'>Price details</p>
            <p className='flex bg-[#E5E6E6] p-3 gap-2 rounded-[23px]'><BsStarFill className='self-center'></BsStarFill>Known shipper</p>
        </div>
        <div className='flex  justify-between mx-8 mb-5'>
            <p>Seller’s Quote</p>
            <p>$ 3,659.25</p>
        </div>
        <div>
            <p className='border-2 mx-5 my-8'></p>
        </div>

        <div className='flex  justify-between mx-8 mb-2 mt-5'>
            <p>Duties and taxes</p>
            <p>Not Included</p>
        </div>
        <div className='flex  justify-between mx-8 mb-2'>
            <p>Insurance</p>
            <p>$323.40</p>
        </div>
        <div className='flex  justify-between mx-8 mb-2'>
            <p>Based on the items cost</p>
           
        </div>
        <div>
            <p className='border-2 mx-5 my-8'></p>
        </div>
        <div className='flex  justify-between mx-8 mb-2'>
            <p>Add a promo code</p>
           
        </div>
        <div className='flex  justify-between mx-8 mb-2'>
            <p>Platform fee</p>
            <p>$119.48</p>
        </div>
        <div>
            <p className='border-2 mx-5 my-8'></p>
        </div>
        <div className='flex  justify-between mx-8 mb-2 font-bold text-xl'>
            <p>Total:</p>
            <p>$ 4,102.13</p>
        </div>
        <div className='text-center mt-6'>
            <button className='bg-[#9747FF] w-[276px] h-[47px] text-white rounded-[14px]'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
