import { signInWithGooglePopup } from "../../Utils/Firebase/Firebase-utils";
import { createUserDocumentFromAuth } from "../../Utils/Firebase/Firebase-utils";
const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(user);
  };
  return (
    <div>
      Signin page
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
};

export default Signin;
