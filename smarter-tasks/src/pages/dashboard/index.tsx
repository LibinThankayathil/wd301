import React from 'react';

const Dashboard: React.FC = () => {
    const userDataString = localStorage.getItem('userData');
    const user = userDataString ? JSON.parse(userDataString) : {};

    const logout = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <p className="font-bold text-center text-gray-800 mb-8">Name: {user.name} </p>
      <p className="font-bold text-center text-gray-800 mb-8">Email: {user.email} </p>
      <div>
        <a href="/signin" onClick={logout} id="logout-link" >Sign Out</a>
      </div>
    </div>
  );
}

export default Dashboard;