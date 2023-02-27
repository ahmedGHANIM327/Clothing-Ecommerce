import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";

import PageTitle from '../../components/page-title/page-title'

import './sign-in.scss';
import { Grid } from "@material-ui/core";

export default function SignIn() {

  return (
    <div className="signin_full_container">
      <PageTitle page_title={"Login / Sign Up"}/>
      <Grid container className='section-container forms_container' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={6} sm={12} xs={12}>
            <SignInForm />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <SignUpForm />
          </Grid>
      </Grid>
    </div>
  )
}