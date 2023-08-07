import { connectToDB } from "@utils/database";
import Quiz from "@models/quiz";

export const POST = async (req, res) => {
  try {
    const incData = await req.json();
    //incdata Is an array with the first element being the quiz title,
    //the second being the email of the creator, and all others are sub arrays composed like:
    //[question, [answer choices], correct_answer, question_tag]
    const extQuestions = [];

    for (var i = 2; i < incData.length; i++) {
      extQuestions.push(incData[i]);
    }
    console.log(extQuestions);
    await connectToDB();

    await Quiz.create({
      title: incData[0][0],
      creator: incData[1],
      questions: extQuestions,
    });
    return new Response(
      JSON.stringify({ message: "Quiz created successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error submitting quiz" }), {
      status: 500,
    });
  }
};
