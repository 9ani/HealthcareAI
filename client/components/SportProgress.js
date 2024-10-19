import React from "react";
import { Flat } from "@alptugidin/react-circular-progress-bar";

const SportProgress = ({ progress = "50%", date }) => {
  // Use a regular expression to safely remove the percentage sign
  const progressValue = parseFloat(progress.replace(/%/g, "").trim());
  return (
    <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg mb-8 transform hover:scale-105 transition-all duration-300">
      <h3 className="text-[#28511D] text-3xl font-bold mb-6 text-center font-sans">
        {date}
      </h3>

      <div className="w-full max-w-md mx-auto flex justify-center">
        <div className="w-40 ">
          <Flat
            progress={50}
            text="Match"
            showMiniCircle={progressValue}
            sx={{

              strokeColor: "#111827",
              textSize: 20,
              strokeLinecap: "square",
              barWidth: 10,
              loadingTime: 0,
              valueAnimation: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SportProgress;
