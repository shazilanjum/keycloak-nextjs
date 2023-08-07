import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import Keycloak from "keycloak-js";
import { keycloakConfig } from '../constants/KeycloakConfig';
import { useRouter  } from 'next/navigation' 

import  Router  from 'next/router';
import axios from 'axios';
import { baseUri } from '../constants/baseUri';


const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {




  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  }
  const handleSubmitWithKeycloak=async (e)=>{
    e.preventDefault()
    const keycloak=new Keycloak(keycloakConfig);
    const authenticated=await keycloak.init({onLoad:"login-required",checkLoginIframe:false,redirectUri:`${baseUri}/Dashboard`})
  }
  //Handle Login API Integration here
  const authenticateUser = async () => {
    console.log(loginState)
    const response=await axios.post('api/login',loginState)
    console.log(response.data)
    if(response.data)
    {
      localStorage.setItem("loggedInUser",JSON.stringify(response.data))
      Router.push("/")
    }
    else{
      alert("Incorrect Email or Password")
    }
  }

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        
      </div>

 
      <FormAction handleSubmit={handleSubmitWithKeycloak} text="Login with Keycloak" />

    </form>
  )
}