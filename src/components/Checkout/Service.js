import React from 'react'


function Service() {
  return (
    <div className='flex mt-8 lg:mt-[100px]'>
       <div className='md:flex gap-2 grid grid-cols-2 m-auto'>
      <div className='flex gap-2'>
        <div>
          <p className='btn btn-circle bg-[#D3B0FF] border-none p-3  self-center'>1</p>
          <p className='mt-2 text-xs'>Search</p>
        </div>
        <p className='w-[131px] h-[3px] bg-[#D3B0FF] self-center ' ></p>
      </div>
      <div className='flex gap-2'>
      <div>
          <p className='btn btn-circle bg-[#D3B0FF] border-none p-3 '>2</p>
         
        </div>
        
        <p className='w-[131px] h-[3px] bg-[#D3B0FF] self-center ' ></p>
      </div>
      <div className='flex gap-2'>
      <div>
          <p className='btn btn-circle bg-[#D3B0FF] border-none p-3 '>3</p>
          <p className='mt-2 text-xs'>Results</p>
        </div>
        <p className='w-[131px] h-[3px] bg-[#D3B0FF] self-center ' ></p>
      </div>
      <div>
          <p className='btn btn-circle bg-[#D3B0FF] border-none p-3 '>4</p>
          <p className='mt-2 text-xs'>Booking</p>
        </div>
      </div>
    </div>
  )
}

export default Service
