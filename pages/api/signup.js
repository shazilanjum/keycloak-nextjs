// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Keycloak from "keycloak-js";
import { keycloakConfig } from '../../components/constants/KeycloakConfig'
import { connectToDatabase } from "../../utils/mongodb";
import axios from "axios";
import { getKeycloakToken } from "@/utils/getKeycloakToken";

export default async function handler(req, res) {
  
  const signupState = req.body;
  var username = signupState.username;
  var email = signupState.email;
  var password = signupState.password;
  var firstName = signupState.firstName;
  var lastName = signupState.lastName;
  
  const token = await getKeycloakToken();
  
  const response = await axios.post(`${keycloakConfig.url}admin/realms/${keycloakConfig.realm}/users`, {
      "username": username,
      "email": email,
      "firstName": firstName,
      "lastName": lastName,
      "enabled": true,
      "credentials": [{
        "value": password,
        "temporary": false
      }]
    }, {
      headers: {

        'Authorization': `Bearer ${token}`
      }
    })

    const { db } = await connectToDatabase();

    const existingUser = await db.collection('Users').findOne({ username });
  
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }
    await db.collection('Users').insertOne({ username, email, password ,firstName,lastName});
    return res.status(200).json({username, email, password ,firstName,lastName});

}
