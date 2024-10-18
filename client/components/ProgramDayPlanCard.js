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
        <h3 className="text-2xl font-bold mb-4 text-green-800">
          {dayPlan.day} - {dayPlan.motto}
        </h3>
        <div className="flex-grow overflow-auto mb-6 pr-2 custom-scrollbar">
          <h4 className="font-bold mb-3 text-lg text-green-700">Упражнения:</h4>
          <ul className="list-none">
            {Object.entries(dayPlan.program).map(([key, exercise]) => (
              <li key={key} className="mb-2 pl-4 border-l-4 border-green-500">
                <span className="font-semibold">{exercise.name}</span>: {exercise.completed} / {exercise.total}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramDayPlanCard;