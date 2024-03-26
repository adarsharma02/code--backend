import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectedDB = async () => {
  try {
    const connectionInstace = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n mongoose db connected !! DB HOST ${connectionInstace.Connection.host} `
    );
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};
export default connectedDB;
