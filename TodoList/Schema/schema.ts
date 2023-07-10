import mongoose from "mongoose";

interface data {
  Title: string;
  Stasus: boolean;
  ShortDescription: string;
  inProgress: boolean;
}

interface Idata extends data, mongoose.Document {}

const Schema = new mongoose.Schema(
  {
    Title: {
      type: String,
    },
    Status: {
      type: Boolean,
    },
    shortDescription: {
      type: String,
    },
    inProgress: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Idata>("ToDoList", Schema);
