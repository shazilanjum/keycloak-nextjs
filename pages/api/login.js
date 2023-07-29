// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {

    const loginState = req.body;

    const { db } = await connectToDatabase();

    var email = loginState.email;
    var password = loginState.password;

    const existingUser = await db.collection('Users').findOne({ "email": email, "password": password });

    if (!existingUser) {
        return res.status(200).json(null);
    }

    return res.status(200).json({ username: email, password: password });

}
