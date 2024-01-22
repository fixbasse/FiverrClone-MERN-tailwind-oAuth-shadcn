import React from 'react'

const LayoutCreatePageModal = () => {
    return (
        <div className='pt-40 pb-20 flex flex-col items-center justify-center bg-gray-100'>

            {/* TITLE */}
            <div className='bg-white p-8 rounded-sm w-[900px] border flex flex-col gap-8'>
                <section className='grid md:grid-cols-3 gap-2'>
                    <div className='col-span-1'>
                        <h3 className='font-semibold text-xl'>
                            Title
                        </h3>
                    </div>
                    <div className='col-span-2'>
                        <textarea
                            placeholder="I will do something I'm very good at"
                            className='border border-gray-400 p-4 h-[100px] rounded-md outline-none focus:ring-0 w-full'
                        />
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className='grid md:grid-cols-3 gap-2'>
                    <div className=' col-span-1'>
                        <h3 className='font-semibold text-xl'>
                            Category
                        </h3>
                    </div>
                    <div className='col-span-2'>
                        <select
                            className='border border-gray-400 p-3 w-full rounded-sm outline-none focus:ring-0'
                        >
                            <option>SELECT A CATEGORY</option>
                        </select>
                    </div>
                </section>

                {/* TAG */}
                <section className='grid md:grid-cols-3 gap-2'>
                    <div className=' col-span-1'>
                        <h3 className='font-semibold text-xl'>
                            Search tags
                        </h3>
                    </div>
                    <div className='col-span-2'>
                        <div className='pb-2'>
                            <h2 className='font-semibold'>
                                Positive Keywords
                            </h2>
                            <span className='text-gray-400 text-sm'>
                                Enter search terms you feel your buyers will use when looking for your service.
                            </span>
                        </div>
                        <input
                            type="text"
                            className='border rounded-sm border-gray-400 w-full outline-none focus:ring-0 p-3'
                        />
                    </div>
                </section>

                <button className='bg-gray-800 text-white p-3 rounded-md w-[160px]'>
                    Save & Continue
                </button>
            </div>
        </div>
    )
}

export default LayoutCreatePageModal