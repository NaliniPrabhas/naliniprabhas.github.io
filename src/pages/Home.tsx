import AboutBrand from '../components/home/AboutBrand'
import Categories from '../components/home/Categories'
import Faq from '../components/home/Faq'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Hero from '../components/home/Hero'
import InstagramFeed from '../components/home/InstagramFeed'
import Newsletter from '../components/home/Newsletter'
import PaydaySale from '../components/home/PaydaySale'
import PopularPicks from '../components/home/PopularPicks'
import Testimonials from '../components/home/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <PopularPicks />
      <AboutBrand />
      <PaydaySale />
      <Categories />
      <Testimonials />
      <Faq />
      <InstagramFeed />
      <Newsletter />
    </>
  )
}
