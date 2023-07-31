import Image from 'next/image'
import LoginPage from './LoginPage.js'
import Keycloak from 'keycloak-js'
import { Inter } from 'next/font/google'
import Router from "next/router";
import { keycloakConfig } from "../components/constants/KeycloakConfig.js";
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [authenticated,setAuthenticated]=useState(false);

  useEffect( () => {
    const localLogin=JSON.parse(localStorage.getItem("loggedInUser"))
    if(!localLogin)
    {
      const keycloak = new Keycloak(keycloakConfig)
      try {
      keycloak.init({onLoad:"check-sso",
         silentCheckSsoRedirectUri:window.location.origin + '/silent-check-sso.html'}).then((authenticated)=>{
           if(!authenticated){
            Router.push('/LoginPage')
           }
           else{
            Router.push('/Dashboard')
           }
           
  
         });
      } catch (error) {
        console.error('Failed to initialize adapter:', error);
      }
      
    }
    else{
      Router.push('/Dashboard')
    }
  }, [])
  
   
      return(
        <>
         <div>
            <div class="flex justify-center">

                <div aria-label="Loading..." role="status">
                    <svg class="h-12 w-12 animate-spin" viewBox="3 3 18 18">
                        <path
                            class="fill-gray-200"
                            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                        <path
                            class="fill-gray-800"
                            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                    </svg>
                </div>
            </div>
        </div>
        </>
      )
    
   
    
   
}
