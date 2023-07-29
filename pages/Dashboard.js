import React, { useEffect, useState } from 'react'
import Keycloak from 'keycloak-js'
import Router from "next/router";
import { keycloakConfig} from '../components/constants/KeycloakConfig.js'


export default function Dashboard() {
    const[userName,setUserName]=useState('');
    
    useEffect(() => {

        const keycloak = new Keycloak(keycloakConfig)
        
     
        keycloak.init({ onLoad: "check-sso", silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html' }).then((authenticated) => {
            if (!authenticated || !JSON.parse(localStorage.getItem("loggedInUser"))) {
               
               if(!localStorage.getItem("loggedInUser"))
               {
                   Router.push('/LoginPage')

               }
               else{
                   setUserName(JSON.parse(localStorage.getItem("loggedInUser")).username)

               }
            }
            else{

                keycloak.loadUserInfo().then((user)=>{
                    setUserName(user.name)
                })
                
            }
            
        });


    }, [])

    return (
        <>
        {
            userName? <>Hello {userName}</>: <>Loading</>
           
        }
        </>
    )
}
