import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required."],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-z0-9._]+(?<![_.])$/,
      "Username invalid, must contain 8-20 alphanumeric characters and be unique.",
    ],
  },
  image: {
    type: String,
  },
  quizTotal: {
    //this is just going to be a cumulative sum of their scores for now, later could be an elo like system
    type: Number,
  },
  completedQuizzes: {
    //array will be composed of both quiz number or id as well as a simple numbering to tell which answers they got wrong
    type: Array,
  },
});

const User = models.User || model("User", userSchema);

export default User;
