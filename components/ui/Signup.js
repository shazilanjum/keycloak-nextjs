import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import { keycloakConfig } from "../constants/KeycloakConfig"
import FormAction from "./FormAction";
import Input from "./Input";
import Keycloak from "keycloak-js";
import Router from "next/router";
import axios from 'axios';

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();

    createAccount()
  }


  //handle Signup API Integration here
  const createAccount=async ()=>{

    const response= await axios.post("../../api/signup",signupState)
    if(response.status===409)
    {
      alert(response.data.message)
    }
    if(response.status===200){
      localStorage.setItem("loggedInUser",JSON.stringify(response.data))
      alert("User Created!")
      Router.push('/LoginPage')
    }
  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit}  text="Signup" />
        </div>
      </form>
    )
}