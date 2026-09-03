import AboutBrand from '../components/home/AboutBrand'
import Categories from '../components/home/Categories'
import Faq from '../components/home/Faq'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Hero from '../components/home/Hero'
import PopularPicks from '../components/home/PopularPicks'

export default function Home() {
  return (
    <>
      <Hero />
      {/* Product sections, in nav order: Popular Picks, Specialities (the
          Categories tiles), then Explore more categories (FeaturedProducts). */}
      <PopularPicks />
      <Categories />
      <FeaturedProducts />
      <AboutBrand />
      <Faq />
    </>
  )
}
