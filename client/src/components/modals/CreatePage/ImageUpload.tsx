import { Image } from 'lucide-react'
import React from 'react'

const ImageUpload = () => {
    return (
        <>
            <h1 className='text-3xl'>
                Showcase Your Services In A Gig Gallery
            </h1>


            <div className='border border-gray-400 border-dotted h-[200px] flex items-center justify-center'>
                <img
                    src=""
                    alt=''
                />

                <section className='flex flex-col items-center'>
                    <Image size={40} />
                    <span>
                        Drag & drop or Upload
                    </span>
                </section>
            </div>
        </>
    )
}

export default ImageUpload