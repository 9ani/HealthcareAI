import React from 'react';

const ProgramDayPlanCard = ({ dayPlan }) => {
  if (!dayPlan) {
    return null;
  }

  return (
    <div
      className="border-2 border-green-800 rounded-2xl overflow-hidden w-full mx-auto cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-green-50 shadow-xl"
    >
      <div className="p-6 h-full flex flex-col min-h-[450px] md:h-[450px]">
        {/* Day and Motto */}
        <h3 className="text-2xl font-bold mb-4">
          {dayPlan.day} - {dayPlan.motto}
        </h3>
  
        <div className="flex-grow overflow-auto mb-6 pr-2 custom-scrollbar">
          {/* Focus Section */}
          <h4 className="font-bold mb-1 text-2xl text-[#D0E320]">Фокус:</h4>
          
          {/* Display Focus with dynamic formatting */}
          <p className="mb-6 pl-4 ml-4 border-l-4 border-[#D0E320]">
            <span className="font-bold">
              {dayPlan.focus.split(":")[0]}:
            </span>
            <br /> 
            <span className="">
              {dayPlan.focus.split(":")[1]}
            </span>
          </p>

          {/* Light Green Container for Exercises */}
          <div className="bg-[#F5FADC] p-4 rounded-lg">
            <h4 className="font-bold text-lg">Упражнения:</h4>
            <ul className="list-none ml-0 pl-0">
              {Object.entries(dayPlan.program).map(([key, exercise]) => (
                <li key={key} className=" flex justify-between">
                  <span className="">{exercise.name}</span>
                  <span>{exercise.sets} × {exercise.reps}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDayPlanCard;
