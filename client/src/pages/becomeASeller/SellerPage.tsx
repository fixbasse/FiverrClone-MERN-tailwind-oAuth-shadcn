import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { Link } from 'react-router-dom'

const SellerPage = () => {
  return (
    <>
      <Navbar />

      <div className='h-[100dvh] pt-24 md:px-20 flex flex-col-reverse md:flex-row items-center justify-center'>

        <section className='flex-1 text-2xl font-semibold'>
          <h1>
            Ready to start selling on ActivePeople?
          </h1>
          <h1>
            Here's the breakdown;
          </h1>
        </section>


        <section className='flex-1'>
          <img
            src="https://images.pexels.com/photos/16861541/pexels-photo-16861541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className='rounded-lg h-[300px] w-full object-cover'
          />
        </section>
      </div>
    </ >
  )
}

export default SellerPage