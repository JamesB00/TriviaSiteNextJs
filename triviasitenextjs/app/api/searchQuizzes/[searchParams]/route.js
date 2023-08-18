import { connectToDB } from "@utils/database";
import { useSearchParams } from "next/navigation";
import Quiz from "@models/quiz";

export const GET = async (request, { params }) => {
  try {
    console.log(params.searchParams);
    await connectToDB();
    const quizRes = await Quiz.find({ tag: params.searchParams }).select({
      questions: 0,
    });

    return new Response(JSON.stringify({ quizzes: quizRes }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), {
      status: 500,
    });
  }
};
