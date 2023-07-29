import Header from "../components/ui/Header.js"
import Login from "../components/ui/Login.js"
import Router from "next/router";
import { useRouter } from 'next/router';
import Keycloak from 'keycloak-js'
import { keycloakConfig} from '../components/constants/KeycloakConfig.js'
import { useEffect } from "react";


export default function LoginPage(){
    
    useEffect(() => {
        const keycloak =new Keycloak(keycloakConfig)
      
        console.log("HEllo")

      keycloak.init({onLoad:"check-sso",silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'}).then((authenticated)=>{
        if(authenticated)
        {
            Router.push('/Dashboard')
        }
      });
    },[]);
    return(
        <>
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/SignupPage"
                />
             <Login/>
        </>
    )
}