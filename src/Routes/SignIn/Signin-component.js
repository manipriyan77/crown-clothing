import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
} from "../../Utils/Firebase/Firebase-utils";

const Signin = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(user);
  };

  return (
    <div>
      Signin page
      <button onClick={logGoogleUser}>Sign in with google</button>
      <button onClick={logGoogleUser}>Sign in with google redirect</button>
    </div>
  );
};

export default Signin;
