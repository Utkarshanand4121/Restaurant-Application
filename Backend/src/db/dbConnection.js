import mongoose from "mongoose";

export const dbConn = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Utkarshanand",
    })
    .then(() => {
      console.log("Connection to DB Successfull");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database! ${err}`);
    });
};
