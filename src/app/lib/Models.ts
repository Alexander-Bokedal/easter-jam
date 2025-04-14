import mongoose, { Schema } from "mongoose";

const eggSchema = new Schema(
  {
    selected: String,

    message: String,
    code: String,
    primaryColor: String,
    secondaryColor: String,
  },
  {
    timestamps: true,
  },
);

const Egg = mongoose.models.Egg || mongoose.model("Egg", eggSchema);

export default Egg;
