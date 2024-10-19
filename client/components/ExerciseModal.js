
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ExerciseModal = ({ isOpen, onClose, program, dayNumber, onUpdateProgress }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  
  useEffect(() => {
    if (isOpen) {
      // Calculate total time in seconds from program
      const totalTime = Object.values(program).reduce((acc, exercise) => {
        const timeInMinutes = parseInt(exercise.time);
        return acc + (timeInMinutes * 60);
      }, 0);
      setTimeLeft(totalTime);
      setCurrentProgress(0); // Reset progress when modal opens
      setIsActive(false); // Reset timer state
    }
  }, [isOpen, program]);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          const newTime = time - 1;
          // Calculate progress percentage
          const totalTime = Object.values(program).reduce((acc, exercise) => {
            const timeInMinutes = parseInt(exercise.time);
            return acc + (timeInMinutes * 60);
          }, 0);
          const progress = ((totalTime - newTime) / totalTime) * 100;
          setCurrentProgress(progress);
          onUpdateProgress(progress);
          return newTime;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setCurrentProgress(100);
      onUpdateProgress(100);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, program, onUpdateProgress]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
    setCurrentProgress(0);
    onUpdateProgress(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-800">Тренировка дня {dayNumber}</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="mb-8">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-4">{formatTime(timeLeft)}</div>
            <button
              onClick={toggleTimer}
              className={`px-6 py-3 rounded-full font-bold ${
                isActive 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isActive ? 'Пауза' : 'Старт'}
            </button>
          </div>

          <div className="mb-4 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${currentProgress}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(program).map(([key, exercise]) => (
            <div key={key} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">{exercise.name}</h3>
              <div className="text-sm text-gray-600">
                <p>Подходы: {exercise.sets}</p>
                <p>Повторения: {exercise.reps}</p>
                <p>Время: {exercise.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseModal;