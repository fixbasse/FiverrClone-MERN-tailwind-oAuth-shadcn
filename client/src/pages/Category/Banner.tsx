import { FileVideoIcon } from 'lucide-react'
import React from 'react'

const Banner = () => {
    return (
        <div className='bg-orange-900 text-white p-4 rounded-lg flex flex-col items-center justify-center h-[250px] gap-4'>
            <h1 className='text-4xl font-semibold'>
                Graphics Design
            </h1>
            <span className='text-xl'>
                Designs to make you stand out.
            </span>

            <button className='flex border gap-2 p-3 rounded-sm'>
                <FileVideoIcon />
                How Fiverr Works
            </button>
        </div>
    )
}

export default Banner