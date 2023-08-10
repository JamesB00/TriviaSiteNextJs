import { connectToDB } from "@utils/database";
import Quiz from "@models/quiz";

export const GET = async ({ req, res }) => {
  try {
    await connectToDB();
    const test = await Quiz.find({ email: "240mlofjam@gmail.com" });
    return new Response(JSON.stringify(test), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ message: "Didn't work" }), {
      status: 500,
    });
  }
};
