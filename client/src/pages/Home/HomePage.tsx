import Banner from './HomeBanner'
import GetStart from './GetStart'
import Hero from './Hero'
import HomeCategory from './HomeCategory'
import Popular from './Popular'
import Talent from './Talent'

//* PAGE 
const HomePage = () => {
  return (
    <div className='relative pb-8'>
      <Hero />
      <HomeCategory />
      <Popular />
      <GetStart />
      <Talent />
      <Banner />

      {/* Line */}
      {/* <div className='absolute right-0 top-0 w-[20px] h-full bg-gray-100 opacity-80 z-50'>
        
      </div> */}
    </div>
  )
}

export default HomePage