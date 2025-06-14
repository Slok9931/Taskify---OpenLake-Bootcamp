import React, { useState } from 'react';
import TodoCalender from './components/TodoCalender'; 
import TodoForm from './components/TodoForm';   
import TodoCard from './components/TodoCard';

export default function Todo() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="animated-gradient min-h-screen w-full p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      
      {/* Full Layout Row */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Calendar */}
        <div className="transition-transform duration-300 hover:-translate-y-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl h-fit">
          <TodoForm />
        </div>

        {/* Middle: Form */}
        <div className="transition-transform duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl h-fit">
           <TodoCalender
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
        </div>

        {/* Right: Tasks */}
        <div className="transition-transform duration-300 hover:-translate-y-1/2 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Tasks for <span className="text-indigo-600">
              {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </span>
          </h2>
          <div className="max-h-[75vh] overflow-y-auto pr-2">
            <TodoCard />
          </div>
        </div>
      </div>
    </div>
  );
}
