import mongoose from "mongoose";

const connectDB = async () => {
  const username = process.env.DATABASE_USERNAME;
  const password = process.env.DATABASE_PASSWORD;
  const cluster = process.env.DATABASE_CLUSTER;
  const dbName = process.env.DATABASE_NAME;

  const DB_OPTION = {
    dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const DATABASE_URL = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(DATABASE_URL, DB_OPTION);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
