import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LogInForm from "../../components/LogInForm/LogInForm"

export default function AuthPage ({setUser}) {


    return(
        <div>
            <h1>Auth page</h1>
            <SignUpForm setUser={setUser}/>
            <LogInForm setUser={setUser}/>
        </div>
    )
}