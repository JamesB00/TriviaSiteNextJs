import trivia from "../../../../public/triviaqs.json";

export const POST = async (req, res) => {
  try {
    const { arr } = await req.json();
    //console.log(arr);

    /* With actual database, it'll be more intuitive */

    const check = trivia;

    const retArr = [];
    //retArr composed of arrays compoesd of status, your answer, correct answer
    arr.forEach((p, index) => {
      if (p[1] == check[index].correct) {
        retArr.push(["correct", p[1], check[index].correct]);
      } else {
        retArr.push(["incorrect", p[1], check[index].correct]);
      }
    });

    return new Response(JSON.stringify(retArr), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify("Unable to fetch results", { status: 500 })
    );
  }
};
