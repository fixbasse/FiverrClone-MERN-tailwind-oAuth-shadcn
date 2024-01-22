import Banner from './HomeBanner'
import GetStart from './GetStart'
import Hero from './Hero'
import HomeCategory from './HomeCategory'
import Popular from './Popular'
import Talent from './Talent'


const HomePage = () => {
  return (
    <>
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