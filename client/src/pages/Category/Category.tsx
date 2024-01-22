import { ArrowRight, FileVideoIcon } from 'lucide-react'
import React from 'react'
import Banner from './Banner'
import { categoriesInfo } from '@/data/data'
import { AccordionCategories } from '@/components/CategoriesAccordion'
import Navbar from '@/components/navbar/Navbar'

const CategoryPage = () => {
  return (
    <>
      <div className='pb-24'>
        <Navbar />
      </div>

      {/* BANNER */}
      <div className='px-4 md:px-8'>
        <Banner />

      </div>

      {/* Explore */}
      <section className='pt-10 md:p-8'>
        <h1 className='text-gray-700 font-semibold text-2xl md:text-3xl pb-4 px-4 md:px-0'>
          Explore graphics & Design
        </h1>


        {/* INFO */}
        <div className='hidden sm:grid grid-cols-3 md:grid-cols-4 gap-8'>
          {categoriesInfo.map((item) => (
            <div
              key={item.id}
            >
              <img
                src={item.img}
                className='rounded-lg h-[220px] w-full object-cover'
                alt="catPic"
              />

              <h1 className='text-gray-700 font-semibold text-xl py-4'>
                {item.label}
              </h1>

              <div className='flex flex-col gap-2'>
                {item.lists.map((list) => (
                  <div
                    key={list.title}
                    className='flex items-center justify-between text-xl group cursor-pointer text-gray-500 font-light hover:bg-gray-100 p-1 rounded-md'>
                    <h2>
                      {list.title}
                    </h2>
                    <ArrowRight
                      className='opacity-0 group-hover:opacity-100'
                      size={20}
                    />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* SMALL SCREEN INFO */}
        <AccordionCategories />
      </section>



    </>
  )
}

export default CategoryPage