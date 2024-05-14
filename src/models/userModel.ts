import mongoose from "mongoose";

const schema = new mongoose.Schema({
  uid: String,
  name: String,
  email: String,
});

export default mongoose.models.Provider || mongoose.model("Provider", schema);
