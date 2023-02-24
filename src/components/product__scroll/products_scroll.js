import './products_scroll.scss'

import { useContext ,useEffect , useState ,useRef} from 'react';

import { ProductsContext } from '../../context/products.context';

import ProductCard from '../product-card/product-card';
// Import Swiper React components
import { Swiper, SwiperSlide ,useSwiper  } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import Button from '../button/button';


const ProductsScroll = () => {

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
    const {productsMap} = useContext(ProductsContext)

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
        </div>
    )
}

export default ProductsScroll