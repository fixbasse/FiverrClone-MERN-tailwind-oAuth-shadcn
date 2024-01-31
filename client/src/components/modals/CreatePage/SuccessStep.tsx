import { BookImage } from 'lucide-react'
import React from 'react'

const SuccessStep = () => {
    return (
        <div className='md:w-[500px] h-[300px] flex item-center justify-center'>

        <section className='flex flex-col gap-4 items-center'>
            <h1 className='text-5xl font-bold'>
                Congratulation!
            </h1>

            <h2>
                Click publish to start selling.
            </h2>
            
            <BookImage size={100} />
        </section>

        </div>
    )
}

export default SuccessStep