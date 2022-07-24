import SignInForm from "../../Components/Sign-In-form/Sign-in-Form";
import SignUpForm from "../../Components/Sign-up-form/Sign-up-form-component";

import "./authentication-styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
