import { defineNitroConfig } from "nitropack";
import mongoose from "mongoose";
import dotenv from "dotenv";
export default defineNitroConfig((nitroApp) => {
  /*const config = useRuntimeConfig();  */
  //connect to mongoose
  const config = dotenv.config();
  mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
      console.log(`connected to db successfully`);
    })
    .catch((err) => {
      console.log(`sorry did'nt connect ${err}`);
    });
});
