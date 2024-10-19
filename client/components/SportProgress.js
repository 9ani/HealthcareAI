import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SportProgress = ({ progress = "0%", score = "50%", date }) => {
  // Safely parse percentages and handle NaN
  const progressValue = parseFloat(progress.replace("%", "").trim()) || 0;
  const scoreValue = parseFloat(score.replace("%", "").trim()) || 0;

  return (
    <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg mb-8 transform hover:scale-105 transition-all duration-300">
      <h3 className="text-[#28511D] text-3xl font-bold mb-6 text-center font-sans">
        {date}
      </h3>

      <div className="w-full max-w-md mx-auto flex justify-around">
        {Number.isFinite(progressValue) ? (
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              value={progressValue}
              text={`${progressValue}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: '#28511D',
                textColor: '#28511D',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            <div className="text-center mt-2">Прогресс</div>
          </div>
        ) : (
          <p className="text-center">No progress data available</p>
        )}

        {Number.isFinite(scoreValue) && (
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              value={scoreValue}
              text={`${scoreValue}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: '#007BFF',
                textColor: '#007BFF',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            <div className="text-center mt-2">Score</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportProgress;