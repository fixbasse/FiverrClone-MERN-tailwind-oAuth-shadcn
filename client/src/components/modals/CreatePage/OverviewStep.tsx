
import { FieldValues, UseFormRegister } from 'react-hook-form'

export const categoriesValue = [
    {
        label: 'Graphic & Design'
    },
    {
        label: 'Graphic & Design'
    },
]

interface OverviewProps {
    register: UseFormRegister<FieldValues>
}

const OverviewStep = ({
    register
}: OverviewProps) => {
    console.log({ ...register('category') });

    return (
        <>
        <hr />
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
                        {...register('title')}
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

                {/* SELECT */}
                <div className='flex justify-between col-span-2 gap-4'>
                    <select
                        {...register('category')}
                        className='border border-gray-400 p-3 w-full rounded-sm outline-none focus:ring-0'
                    >
                        <option value='' disabled>SELECT A CATEGORY</option>
                        <option value='Graphic'>Graphic & design</option>
                        <option value='Music'>MUSIC & AUDIO</option>
                        <option value='Programming'>PROGRAMMING & TECH</option>
                    </select>
                    {/* <select
                        className='border border-gray-400 p-3 w-full rounded-sm outline-none focus:ring-0'
                    >
                        <option>SELECT A SUB CATEGORY</option>
                        <option>WEBSITE DEVELOPMENT</option>
                        <option>MUSIC & AUDIO</option>
                        <option>PROGRAMMING & TECH</option>
                    </select> */}
                </div>
            </section>

            {/* TAG */}
            <section className='grid md:grid-cols-3 gap-2'>
                <div className='col-span-1'>
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
                        {...register('keyword')}
                    />
                </div>
            </section>
        </>
    )
}

export default OverviewStep