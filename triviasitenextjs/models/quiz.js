import { Schema, model, models } from "mongoose";

//May need to add an id if mongo/mongoose doesn't automatically
const quizSchema = new Schema({
  title: {
    type: String,
    required: [true, "Need a title for the quiz"],
  },
  creator: {
    type: String,
    required: [true, "Must have a quiz creator"],
  },
  questions: { type: Array },
  rating: { type: Number },
  difficulty: { type: Number },
});

const Quiz = models.Quiz || model("Quiz", quizSchema);

export default Quiz;
