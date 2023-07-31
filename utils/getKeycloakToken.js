import axios from 'axios'
import React from 'react'
import qs from 'qs'
import {keycloakConfig} from '../components/constants/KeycloakConfig'

export async function getKeycloakToken() {

    var data = qs.stringify({
        'username': 'admin',
        'password': 'admin',
        'client_id': 'admin-cli',
        'grant_type': 'password' 
      });

      var config = {
        method: 'post',
        url: `${keycloakConfig.url}realms/master/protocol/openid-connect/token`,
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };


    const response = await axios(config);
    var jsonResponse=response.data
    return jsonResponse["access_token"];
}
