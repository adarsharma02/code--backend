// require("dotenv").config({ path: "/.env" });

import dotenv from "dotenv";

import connectedDB from "./db/index.js";
dotenv.config({
  path: "./env",
});
connectedDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`0 server is running :${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("monodb is conntected fail", err);
  });

/*
import { Express } from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log;
      `your app is listening on ${process.env.PORT}`;
    });
  } catch (error) {
    console.error("ERROR:", Error);
    throw error;
  }
})();
*/
