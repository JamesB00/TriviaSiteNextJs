import { connectToDB } from "@utils/database";
import { useSearchParams } from "next/navigation";
import Quiz from "@models/quiz";

export const GET = async (request, { params }) => {
  try {
    console.log(params.searchParams);
    await connectToDB();
    const quizRes = await Quiz.find({ tag: params.searchParams });
    console.log(quizRes);
    return new Response(JSON.stringify({ quizzes: quizRes }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Didn't work" }), {
      status: 500,
    });
  }
};
