import { Book, PictureInPicture2Icon, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const OverviewSeller = () => {
  return (
    <div className='md:h-[100dvh] pt-24 p-4 md:px-20 flex flex-col-reverse gap-4 md:gap-24 md:flex-row items-center justify-center'>

    <section className='md:flex-1'>
      <h1 className='text-2xl font-semibold'>
        Ready to start selling on ActivePeople?
      </h1>
      <h1 className='text-2xl font-semibold'>
        Here's the breakdown:
      </h1>

      <div className='py-8'>
        <hr />
        <article className='flex py-8 gap-2'>
          <Book size={50} />
          <div>
            <h2 className='font-semibold'>
              Learn what make a successful profile
            </h2>
            <span className='text-gray-500 font-light'>
              Discover the do’s and don’ts to ensure you’re always on the right track.
            </span>
          </div>
        </article>

        <hr />
        <article className='flex py-8 gap-2'>
          <PictureInPicture2Icon size={50} />
          <div>
            <h2 className='font-semibold'>
              Create your seller profile
            </h2>
            <span className='text-gray-500 font-light'>
              Add your profile picture, description, and professional information.
            </span>
          </div>
        </article>
        <hr />
        <article className='flex py-8 gap-2'>
          <ShoppingBag size={50} />
          <div>
            <h2 className='font-semibold'>
              Publish your Gig
            </h2>
            <span className='text-gray-500 font-light'>
              Create a Gig of the service you’re offering and start selling instantly.
            </span>
          </div>
        </article>
        <hr />
      </div>

      {/* TO CREATE SELLER INFO */}
      <Link
        to='/become-a-seller/seller_info'
      >
        <button className='bg-orange-800 text-white p-3 rounded-sm font-semibold w-full md:w-[150px] hover:opacity-90'>
          Continue
        </button>
      </Link>
    </section>


    <section className='md:flex-1 w-full'>
      <img
        src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className='rounded-lg h-[300px] w-full object-cover'
        alt=""
      />

    </section>
  </div>
  )
}

export default OverviewSeller