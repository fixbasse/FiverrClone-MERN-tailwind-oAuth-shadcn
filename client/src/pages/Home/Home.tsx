import Navbar from '@/components/navbar/Navbar'
import Banner from './Banner'
import GetStart from './GetStart'
import Hero from './Hero'
import HomeCategory from './HomeCategory'
import Popular from './Popular'
import Talent from './Talent'


const HomePage = () => {
  return (
    <>
      <Navbar />

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