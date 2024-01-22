import { Search } from "lucide-react"

const Hero = () => {
  return (
    <div className='h-[100dvh] bg-orange-900 flex items-center justify-center px-4 lg:px-20 gap-10'>

      {/* LEFT */}
      <section className="md:flex-1 w-full sm:w-[500px] flex flex-col gap-4 text-white z-10">
        <article>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Find the right
            <span className="italic font-light"> freelance </span>
          </h1>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            service, right away
          </h1>
        </article>

        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <input
            type="text"
            className="max-[768px]:rounded-md md:rounded-l-md w-full p-3 outline-none focus:ring-0"
          />

          <div className="bg-green-500 p-3 max-[768px]:rounded-md md:rounded-r-md px-6 cursor-pointer">
            <Search
              className="text-white"
              size={20}
            />
          </div>
        </div>

        {/* Popular */}
        <div className="hidden lg:flex items-center gap-2 text-sm">
          <h3>
            Popular:
          </h3>

          <div className="flex items-center gap-2">
            <button className="border rounded-full px-2">
              Website Design
            </button>
            <button className="border rounded-full px-2">
              WordPress
            </button>
            <button className="border rounded-full px-2">
              Logo Design
            </button>
            <button className="border rounded-full px-2">
              AI Services
            </button>
          </div>
        </div>

      </section>

      {/* RIGHT */}

      <section className="md:flex-1 hidden md:block">
        <img
          src="/man.png"
          alt="" 
          
          />
      </section>

    </div>
  )
}

export default Hero