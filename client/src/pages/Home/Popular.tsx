import { PopularCarousal } from '@/components/PopularCarousal'
import { popularData } from '@/data/data'
import React from 'react'
import { Link } from 'react-router-dom'

const Popular = () => {
    return (
        <div className='px-6 lg:px-20 py-10'>
            <h1 className='text-4xl md:text-5xl text-gray-800 font-light'>
                Popular Services
            </h1>

            <div
                className='grid grid-cols-2 md:grid-cols-4 gap-8 pt-8'
            >
                {popularData.map((item) => (
                    <div

                        key={item.label}
                        className={`w-[200px] h-[240px] flex flex-col justify-between rounded-xl shadow-xl p-1.5 hover:opacity-80
                        ${item.bg}
                        `}
                    >
                        <h2 className='text-white font-semibold p-2 text-xl'>
                            {item.label}
                        </h2>

                        <img
                            src={item.img}
                            className='rounded-lg h-[70%] object-cover'
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Popular