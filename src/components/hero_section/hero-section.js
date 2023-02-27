import './hero-section.scss'
import Button from '../button/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

    let navigate = useNavigate()
    const handleNavigation = () => {
        navigate("/shop")
    }

    return (
        <div className='hero_section_container' 
        style={{
            backgroundImage: `url(https://htmldemo.net/reid/reid/assets/img/slider/slider5.jpg)`,
            backgroundSize: 'cover'
        }}
        >
            <div className='overlay_section'></div>
            <h4>50% sell off for limited time</h4>
            <h1>Great Lookbook 2023</h1>
            <Button buttonType='black_button' onClick={handleNavigation}>SHOP NOW</Button>
        </div>
    )
}

export default HeroSection;