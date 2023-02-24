import './subscribe-form.scss'
import Grid from '@mui/material/Grid';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { useState } from 'react';
import { addSubscriber } from '../../utils/firebase/firebase';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const SubscribeForm = () => {

    const [email,setEmail] = useState("")

    const [emailSub,setEmailSub] = useState(true);

    const [openAlert,setOpenAlert] = useState(false);

    const resetFormFields = () => {
        setEmail("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const sub_added = await addSubscriber(email);
            if(sub_added)
            {
                setEmailSub(true);
            }else
            {
                setEmailSub(false);
            }
            setOpenAlert(true);
            resetFormFields();
        } catch (error) {
            /*switch (error.code) {
            case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
            case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
            default:*/
            console.log(error);
        }
        //console.log(email);
    };

    const handleChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue)
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='subscribe_form'> 
                <FormInput
                label='Email'
                type='email'
                placeholder="Email*"
                required
                onChange={handleChange}
                name='email'
                value={email}
                />
                <Button type='submit' buttonType='login'>SUBSCRIBE</Button>
            </form>
            <Collapse in={openAlert}>
                {emailSub ? <Alert
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpenAlert(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                Email added successfully !
                </Alert> :
                <Alert
                    severity='warning'
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpenAlert(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                Email already exists !
                </Alert>}
            </Collapse>
        </>
    )

}

export default SubscribeForm