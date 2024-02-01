
import { PopularCarousal } from '@/components/PopularCarousal'

const Popular = () => {
    return (
        <div className='px-6 lg:px-20 md:py-10'>
            <h1 className='text-4xl md:text-5xl text-gray-800 font-light'>
                Popular Services
            </h1>

            <div
                className='flex justify-center gap-3 md:w-[1300px] mx-auto pt-8'
            >
                <PopularCarousal />
            </div>
        </div>
    )
}

export default Popular