import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";

import './sign-in.scss'

export default function SignIn() {

  return (
    <div className="section-container signin_container">
        <SignInForm />
        <SignUpForm />
    </div>
  )
}