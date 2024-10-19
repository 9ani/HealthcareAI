import React from "react";
import { Flat } from "@alptugidin/react-circular-progress-bar";

const SportProgress = ({ progress, date, isToday }) => {
  // Use a regular expression to safely remove the percentage sign and round to 2 decimal places
  let progressValue = isToday
    ? typeof progress === "string"
      ? parseFloat(progress.replace(/%/g, "").trim())
      : parseFloat(progress)
    : 0;
  // Round to two decimal places
  progressValue = parseFloat(progressValue.toFixed(2));

  return (
    <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg mb-8 transform hover:scale-105 transition-all duration-300">
      <h3 className="text-[#28511D] text-3xl font-bold mb-6 text-center font-sans">
        {date}
      </h3>

      <div className="w-full max-w-md mx-auto flex justify-center">
        <div className="w-40 ">
          <Flat
            progress={progressValue}
            text=""
            showMiniCircle={false}
            sx={{
              strokeColor: "#16a34a",
              bgStrokeColor: "#dadada",
              bgColor: { value: "#000000", transparency: "40" },
              textSize: 20,
              strokeLinecap: "square",
              barWidth: 5,
              valueAnimation: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SportProgress;
