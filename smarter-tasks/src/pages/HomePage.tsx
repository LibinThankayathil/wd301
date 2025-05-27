import React from "react";

const HomePage: React.FC = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
        <p className="text-lg text-gray-600">Welcome to the Task Manager app!</p>
      </div>
  );
};
export default HomePage;