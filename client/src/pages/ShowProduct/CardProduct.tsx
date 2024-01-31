import { Star } from 'lucide-react'

const CardProduct = () => {
    return (
        <div className='flex flex-col gap-1 hover:cursor-pointer'>
            <img
                src="https://images.pexels.com/photos/19748403/pexels-photo-19748403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="/"
                className='w-full h-[200px] object-cover rounded-md group'
            />

            {/* IMG, NAME & LEVEL */}
            <section className='flex justify-between items-center py-2'>
                <div className='flex items-center gap-2'>
                    <img
                        src="https://images.pexels.com/photos/19748403/pexels-photo-19748403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="/"
                        className='w-[30px] h-[30px] rounded-full'
                    />
                    <h3 className='font-semibold'>
                        Wongsapat
                    </h3>
                </div>
                <span className='font-semibold text-gray-600'>
                    Level 1
                </span>
            </section>

            {/* DESCRIPTION */}
            <span className='text-gray-500 group-hover:underline'>
                I will build a high quality portfolio website with responsive.
            </span>

            <section className='pt-2'>
                {/* STARS */}
                <div className='flex items-center gap-1 font-semibold'>
                    <Star size={15} />
                    4.2
                </div>

                {/* PRICE */}
                <div className='flex gap-2 font-semibold'>
                    <h4>
                        From
                    </h4>
                    <span>
                        $90
                    </span>
                </div>
            </section>

        </div>
    )
}

export default CardProduct