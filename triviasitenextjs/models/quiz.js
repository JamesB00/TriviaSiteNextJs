import { Schema, model, models } from "mongoose";

const quizSchema = new Schema({
  title: {
    type: String,
    required: [true, "Need a title for the quiz"],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  questions: { type: Array },
  difficulty: {
    type: Number,
  },
});

const Quiz = models.Quiz || model("Quiz", quizSchema);

export default Quiz;
