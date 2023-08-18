import { connectToDB } from "@utils/database";
import Quiz from "@models/quiz";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const quizRes = await Quiz.find({ _id: params.quizId });
    console.log(quizRes);

    return new Response(JSON.stringify({ result: quizRes }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed" }), { status: 500 });
  }
};
