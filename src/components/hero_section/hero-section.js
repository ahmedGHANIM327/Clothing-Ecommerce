import './hero-section.scss'
import Button from '../button/button';

const HeroSection = () => {

    return (
        <div className='hero_section_container' 
        style={{
            backgroundImage: `url(https://htmldemo.net/reid/reid/assets/img/slider/slider5.jpg)`,
            backgroundSize: 'cover'
        }}
        >
            <div className='overlay_section'></div>
            <h4>50% sell off for limited time</h4>
            <h1>Great Lookbook 2021</h1>
            <Button buttonType='black_button'>SHOP NOW</Button>
        </div>
    )
}

export default HeroSection;