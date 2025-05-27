import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <button className="bg-blue-700 text-neutral-100 rounded px-2 py-2 my-2 hover:bg-blue-300 hover:border-blue-600 hover:text-blue-600" id="backToHomeButton">
          <Link to="/home">
            Return Home
          </Link>
        </button>
      </div>
  );
};
export default NotFound;