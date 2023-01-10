import mongoose from "mongoose";

export const AppUserSchema = new mongoose.Schema({
  name: String,
});

const AppUserModel = mongoose.model("AppUser", AppUserSchema);

export default AppUserModel;
