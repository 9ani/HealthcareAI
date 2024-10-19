import React from "react";
import { Flat } from "@alptugidin/react-circular-progress-bar";

const SportProgress = ({ progress = 50, date }) => {
  // Use a regular expression to safely remove the percentage sign
  const progressValue =
    typeof progress === "string"
      ? parseFloat(progress.replace(/%/g, "").trim())
      : parseFloat(progress);
  return (
    <div className="bg-[#3F3F3F] w-[350px] h-full text-[#3F3F3F] gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg mb-8 transform hover:scale-105 transition-all duration-300">
      <h3 className="text-[#FFFFFF] text-3xl font-bold mb-6 text-center font-sans">
        {date}
      </h3>

      <div className="ml-16 w-full max-w-md mx-auto flex justify-center">
        <div className="w-40">
          <Flat
            progress={50}
            text="Match"
            showMiniCircle={false}
            sx={{
              strokeColor: "#16a34a",
              bgStrokeColor: "#dadada",
              bgColor: { value: "#000000", transparency: "40" },
              textSize: 20,
              strokeLinecap: "square",
              barWidth: 5,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SportProgress;
