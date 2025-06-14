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
    <div className=" animated-gradient min-h-screen w-full p-4 sm:p-6 lg:p-8">
      <main className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        
        <section className="lg:col-span-1 flex flex-col gap-8">
          
         
          <div className=" bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg w-full mx-auto">
            <TodoCalender
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <TodoForm />
          </div>

        </section>

        
        <section className="lg:col-span-1 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Tasks for <span className="text-indigo-600">{selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
          </h2>

          
          <div className="max-h-[75vh] overflow-y-auto pr-2 flex flex-col">
            <div className="my-auto">
            <TodoCard />
            </div>
          </div>

        </section>
      </main>
    </div>
  );

}