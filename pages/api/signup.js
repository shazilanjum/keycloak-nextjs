// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Keycloak from "keycloak-js";
import {keycloakConfig} from '../../components/constants/KeycloakConfig'
import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  
  const signupState=req.body;

 

  const {db}=await connectToDatabase();

  

  var username=signupState.username;
  var email=signupState.email;
  var password=signupState.password;



  const existingUser = await db.collection('Users').findOne({ username });

  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists' });
  }
  await db.collection('Users').insertOne({ username,email,password});
  return res.status(200).json({username,email});

}
