import mongoose from "mongoose";

let isConnected = false;
let connectPromise = null;

export const connectDB = async () => {
  if (isConnected) return;

  if (!connectPromise) {
    connectPromise = mongoose
      .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        isConnected = true;
      })
      .catch((error) => {
        connectPromise = null;
        throw error;
      });
  }

  await connectPromise;
};
