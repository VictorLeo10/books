import mongoose from "mongoose";

const liveURI =
  "mongodb+srv://firstdatabaseUser:database10@cluster0.bthnwpa.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(liveURI);
mongoose.connection
  .on("open", () => {
    console.log("...😒: connected");
  })
  .once("error", (error) => {
    console.log("...😒 failed to connect:", error);
  });
