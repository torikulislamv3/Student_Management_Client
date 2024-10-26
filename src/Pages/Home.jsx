import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Student Management System</h1>
          <p className="text-lg mb-6">Easily manage students, classes, and attendance in one place.</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 shadow-md p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Manage Students</h3>
              <p className="text-gray-700">Add, edit, and view student details with ease.</p>
            </div>
            <div className="bg-gray-100 shadow-md p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Track Attendance</h3>
              <p className="text-gray-700">Keep records of student attendance efficiently.</p>
            </div>
            <div className="bg-gray-100 shadow-md p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Organize Classes</h3>
              <p className="text-gray-700">Set up and manage class schedules and information.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
