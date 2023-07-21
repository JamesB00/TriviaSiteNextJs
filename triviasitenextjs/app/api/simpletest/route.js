import { connectToDB } from "../../../utils/database";
import { User } from "../../../models/user";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const user = await User.find({ username: params.username });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
