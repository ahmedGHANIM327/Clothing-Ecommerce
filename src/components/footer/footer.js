import './footer.scss';
import Grid from '@mui/material/Grid';

import SubscribeForm from '../subscribe-form/subscribe-form';

const Footer = () => {



    return(
        <div className='footer_container'>
            <Grid container className='section-container' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={6} sm={12} xs={12}>
                    <h3>SIGN UP NOW & GET 10% OFF</h3>
                    <p>Get timely updates from your favorite products</p>
                    <SubscribeForm />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <h3>CONTACT INFO</h3>
                    <ul>
                        <li>Phone: +33674311624</li>
                        <li>Email: contact@ahmed-ghanim.com</li>
                        <li>Address: France</li>
                    </ul>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <h3>USEFUL LINKS</h3>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Profile</li>
                        <li>Contact</li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer