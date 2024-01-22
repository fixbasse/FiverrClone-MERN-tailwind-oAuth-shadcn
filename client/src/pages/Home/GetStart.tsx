

const GetStart = () => {
    return (
        <div className='px-6 lg:px-20 py-10 flex flex-col gap-8'>
            <h1 className='text-4xl md:text-5xl text-gray-800 font-light'>
                Way to get started
            </h1>

            <span className="text-xl md:w-[600px] font-light">
                Whether you want to find freelancers, have them come to you, or collaborate with your entire team, get started in just a few clicks.
            </span>

            <section className="text-3xl md:text-4xl flex flex-col justify-between font-light md:flex-row gap-4 text-gray-700">
                <div className=" bg-orange-200 border-2 border-orange-600 p-6 h-[120px] rounded-2xl flex flex-col md:items-center justify-center cursor-pointer hover:opacity-60 flex-1">
                    Post a briefs & get match
                </div>
                <div className=" bg-teal-100 border-2 border-teal-400 p-6 h-[120px] rounded-2xl flex flex-col md:items-center justify-center cursor-pointer hover:opacity-60 flex-1">
                    Explore freelance services
                </div>
                <div className="bg-purple-100 border-2 border-purple-300 p-6 h-[120px] rounded-2xl flex flex-col justify-center cursor-pointer hover:opacity-60 flex-1">
                    Discover Fiverr Pro
                </div>
            </section>
        </div>
    )
}

export default GetStart