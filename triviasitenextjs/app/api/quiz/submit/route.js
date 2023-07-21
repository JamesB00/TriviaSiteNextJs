import { connectToDB } from "@utils/database";

export const POST = async () => {
  try {
    await connectToDB();

    //I'll need to validate data, and then insert it into the db
    //I need to figure out if mongo/mongoose automatically adds an
    //ID, or if I need to create one within the quiz model
    return new Response(JSON.stringify({ message: "hello" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error submitting quiz" }), {
      status: 500,
    });
  }
};
