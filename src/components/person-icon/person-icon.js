import PersoneIcon from '../../assets/profile-icone.png'
import Button from '../button/button'
import './person-icon.scss'
import { signOutUser } from '../../utils/firebase/firebase'
import { useNavigate } from 'react-router-dom'

const PersonIcon = ({showProfileCart,handleProfileCart,currentUser}) => {

    const navigate = useNavigate();

    const handleSignIn = () => 
    {
        navigate("/sign-in");
        handleProfileCart();
    }

    const handleSignOut = () => 
    {
        signOutUser();
        handleProfileCart();
    }

    return (
        <div className='person-icon-container'>
            <img src={PersoneIcon} onClick={handleProfileCart}/>
            {showProfileCart && 
            (currentUser ? 
            (<div className='profile_cart_container'>
                <h2>{currentUser.displayName.toUpperCase()}</h2>
                <p>{currentUser.email.toUpperCase()}</p>
                <Button buttonType='google' onClick={handleSignOut}>Sign-Out</Button>
            </div>):
            (<div className='profile_cart_container'>
                <h2>Login to your profile</h2>
                <Button buttonType='login' onClick={handleSignIn}>Login/Sign-Up</Button>
            </div>))}
        </div>
    )
}

export default PersonIcon