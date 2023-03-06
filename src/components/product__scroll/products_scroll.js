import './products_scroll.scss'

// React HOOKS
import { useEffect , useState } from 'react';

// Components
import ProductCard from '../product-card/product-card';
import Button from '../button/button';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';

// React Router DOM
import { useNavigate } from 'react-router-dom';

// Redux context
// Redux
import { useSelector } from 'react-redux';

// User Redux
import { selectProducts } from '../../store-redux/products/product.selector';


const ProductsScroll = () => {

    let navigate = useNavigate()
    const handleNavigation = () => {
        navigate("/shop")
        window.scrollTo(0, 0)
    }

    /* Slider based on largeur */
    const [largeur,setLargeur] = useState(window.innerWidth);

    useEffect(() => {
        const changeLargeur = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize' , changeLargeur);

        return () =>
        {
            window.removeEventListener('resize',changeLargeur);
        }
    }, [])

    const sliderPerView = () => {
        if(largeur > 1200)
        {
            return 3;
        } else if (largeur < 1200 && largeur > 700)
        {
            return 2
        } else 
        {
            return 1
        }
    }
    /******************************** */
    const productsMap = useSelector(selectProducts)

    return (
        <div className='section-container products_scroll_container'>
            <div className="scroll_header">
                <h2>Recent Products</h2>
                <div className="actions">
                    <Button id='swiper-prev'>{"<"}</Button>
                    <Button id='swiper-next'>{">"}</Button>
                    
                </div>
            </div>
            {productsMap && (productsMap.length >0) && <Swiper
                spaceBetween={30}
                slidesPerView={sliderPerView()}
                loop={true}
                /*autoplay={{
                    delay: 1000,
                    //disableOnInteraction: false,
                }}*/
                //centeredSlides={true}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={{ nextEl: "#swiper-next", prevEl: "#swiper-prev" }}
                className='mySwiper'
                >
                {productsMap?.slice(0,5).map((item) => {
                    return <SwiperSlide key={item.id}>
                        <ProductCard key={item.id} product={item} />
                    </SwiperSlide>
                })}
            </Swiper>} 
            <Button onClick={handleNavigation}>All Products</Button>
        </div>
    )
}

export default ProductsScroll