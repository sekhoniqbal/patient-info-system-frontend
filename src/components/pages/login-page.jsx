import axios from "axios";
import LoginForm from "../forms/login-form";
import authenticationService from "../../service/authentication-service";
import toast from "react-hot-toast";
import defaultFormErrorHandler from "../../others/default-form-error-handler";

async function handleSubmit(values, form) {
     authenticationService.login(values)
        .catch(error => toast.error("incorrect username or password"));

}


export default function LoginPage(){


    return <div>

        <h1 className="text-center my-4">Welcome to Patient Information System</h1>
        
        <LoginForm submitLabel={"Login"} handleSubmit={handleSubmit} initialValues={{username:"", password:""}} heading={""} />
    </div>
}