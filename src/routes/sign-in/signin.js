import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase"

export default function SignIn() {
    const authGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

  return (
    <div>
        <h1>SIGN IN PAGE</h1>
        <button onClick={authGoogleUser}>Sign In with google</button>
    </div>
  )
}