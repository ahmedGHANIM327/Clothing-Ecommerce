import Categories from "../../components/categories-container/categories-container";
import ProductsScroll from "../../components/product__scroll/products_scroll";
import HeroSection from "../../components/hero_section/hero-section";

const Home = () => {
  return (
    <>
        <HeroSection />
        <ProductsScroll />
        <Categories />
    </>
  )
}

export default Home;