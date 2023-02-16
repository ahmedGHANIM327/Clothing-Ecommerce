import { Fragment ,useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../context/user';

import { signOutUser } from '../../utils/firebase/firebase';

import './navigation.scss';

const Navigation = () => {

    const {currentUser} = useContext(UserContext);

    return (
        <Fragment>
        <div className='section-container navigation'>
            <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
            <Link className='nav-link' to='/'>
                HOME
            </Link>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            {
                currentUser ? (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span> ) : (<Link className='nav-link' to='/sign-in'>SIGN IN</Link>)
            }
            </div>
        </div>
        <Outlet />
        </Fragment>
    );
};

export default Navigation;