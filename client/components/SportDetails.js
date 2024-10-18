
import React from "react";

const SportDetails = ({ program }) => {
  return (
    <div className="bg-gradient-to-br from-white to-green-50 p-4 rounded-2xl shadow-lg h-[500px] flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
      <h4 className="text-[#28511D] text-xl font-bold mb-2 text-center">
        Подробная информация
      </h4>
      <div className="flex flex-col gap-3 flex-grow">
        {Object.entries(program).map(([key, exercise]) => (
          <div key={key} className="bg-[#CEE422] p-2 rounded-xl shadow-md">
            <p className="text-[#28511D] font-semibold text-sm mb-1">
              {exercise.name}
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold">{exercise.completed}</span>
              <span>из</span>
              <span className="font-bold">{exercise.total}</span>
            </div>
            <div className="mt-1 bg-white rounded-full h-1.5">
              <div
                className="bg-green-500 h-1.5 rounded-full"
                style={{
                  width: `${(exercise.completed / exercise.total) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportDetails;