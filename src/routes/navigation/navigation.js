import { Fragment ,useContext, useState , useEffect} from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user';

import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg'

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import PersonIcon from '../../components/person-icon/person-icon';

import Footer from '../../components/footer/footer';

import './navigation.scss';

const Navigation = () => {
    /***********************************/
    // Phone / Desktop Menu
    /***********************************/
    const [toggleMenu,setToggleMenu] = useState(false);
    const [largeur,setLargeur] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

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
    /*****************************************************/


    const {currentUser} = useContext(UserContext);

    // Show Cart Status
    const [showCart,setShowCart] = useState(false);

    // Show Profile Cart Status
    const [showProfileCart,setShowProfileCart] = useState(false);

    const handleProfileCart = () => {
        let profileCartStatus = !showProfileCart;
        setShowProfileCart(profileCartStatus)
    }

    return (
        <Fragment>
        <div className='section-container navigation'>
            <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                {(largeur >=800) && 
                    (<>
                    <Link className='nav-link' to='/'>
                        HOME
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    </>
                )}
                {(largeur <800 && toggleMenu ) && (<div className='full-page-menu'>
                    <span className='close_nav_phone' onClick={toggleNav}>X</span>
                    <Link className='nav-link' to='/'>
                        HOME
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>)}

                <PersonIcon showProfileCart={showProfileCart} handleProfileCart={handleProfileCart} currentUser={currentUser}/>
                <CartIcon showCartAction={setShowCart}/>
                {(largeur <800 ) && <MenuIcon className='menu-icon-nav' onClick={toggleNav}/>}
            </div>
            <CartDropdown show={showCart} showCartAction={setShowCart}/>
        </div>
        <Outlet />
        <Footer />
        </Fragment>
    );
};

export default Navigation;