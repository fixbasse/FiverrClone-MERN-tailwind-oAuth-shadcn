

const HomeBanner = () => {
    return (
        <div className='px-6 lg:px-20 flex flex-col gap-10 md:gap-24'>
            <section className='text-5xl sm:text-7xl md:text-8xl md:text-[10rem] font-bold bg-green-700 text-white h-[80dvh] rounded-lg w-full flex items-center justify-center'>
                <h1 className=''>
                    fiverr
                </h1>
                <span className='text-green-500'>
                    .
                </span>
            </section>

            <section className='text-5xl sm:text-7xl md:text-8xl md:text-[10rem] font-bold bg-blue-950 text-white h-[70dvh] rounded-lg w-full flex items-center justify-center'>
                <h1 className=''>
                    fiverr
                </h1>
                <span className='text-green-500'>
                    .
                </span>
            </section>
        </div>
    )
}

export default HomeBanner