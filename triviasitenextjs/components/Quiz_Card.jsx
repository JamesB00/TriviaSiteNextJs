import { useState } from "react";

const Quiz_Card = ({ question, answers, quesNo, tag, status }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <div className=" text-black p-1">
      {/*Question card Header */}
      {status[0] ? (
        //If the answer was correct
        status[1][0] == "correct" ? (
          <div
            className="text-white p-1 flex justify-center border-b-2 bg-green-800 border-black rounded-t-md "
            name={`outer_ques_${quesNo}`}
          >
            <p>{question}</p>
          </div>
        ) : (
          <div
            className="text-white p-1 flex justify-center border-b-2 bg-red-800 border-black rounded-t-md "
            name={`outer_ques_${quesNo}`}
          >
            <p>{question}</p>
          </div>
        )
      ) : (
        //If the answer was not correct
        <div
          className=" p-1 flex justify-center border-b-2 bg-white border-black rounded-t-md "
          name={`outer_ques_${quesNo}`}
        >
          <p>{question}</p>
        </div>
      )}

      {/*Question card body (where answers go) */}
      <div className="bg-white grid grid-cols-6">
        <div className="col-start-1 col-span-6 sm:col-span-3 pl-1 sm:pl-2 ">
          {answers.map((ans, index) => (
            <div //Div that contains the entire label, onclick makes it so that clicking on the div selects the input
              key={ans + "_container"}
              className="hover:bg-gray-400"
            >
              <label key={ans + "_label"} className="flex">
                <input
                  className="w-fill mr-1"
                  type="radio"
                  name={"question_" + quesNo} //This is used in the media query for getAnswers on main quiz component
                  id={"question_" + quesNo}
                  key={ans}
                  value={ans}
                />
                {ans}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/*Question card footer (for the tag) */}
      <div className="text-center border-t-2 border-black rounded-b-md bg-white">
        {tag}
      </div>
    </div>
  );
};

export default Quiz_Card;
