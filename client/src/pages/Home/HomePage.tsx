import Banner from './HomeBanner'
import GetStart from './GetStart'
import Hero from './Hero'
import HomeCategory from './HomeCategory'
import Popular from './Popular'
import Talent from './Talent'
import LoadingAnimate from '@/components/LoadingAnimate'

//* PAGE 
const HomePage = () => {
  return (
    <>
      {/* <LoadingAnimate /> */}
      <Hero />
      <HomeCategory />
      <Popular />
      <GetStart />
      <Talent />
      <Banner />
    </>
  )
}

export default HomePage