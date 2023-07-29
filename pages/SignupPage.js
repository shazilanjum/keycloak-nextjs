import Header from "../components/ui/Header";
import Signup from "../components/ui/Signup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/LoginPage"
            />
            <Signup/>
        </>
    )
}