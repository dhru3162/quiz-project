import { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";

if (!admin.apps.length) {
  const serviceAccount = require("../../src/FireBase/serviceAccountKey.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const usersApi = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const listUsers = await admin.auth().listUsers();
    // const users = listUsers.users.map((userRecord: any) => ({
    // //   uid: userRecord.uid,
    // //   email: userRecord.email,
    // //   name:userRecord.displayName,
    // userRecord
    //   // Add more properties as needed
    // }));
    res.status(200).json(listUsers.users);
  } catch (error) {
    console.error("Error listing users:", error);
    res.status(500).json({ error: "Error listing users" });
  }
};

export default usersApi;
