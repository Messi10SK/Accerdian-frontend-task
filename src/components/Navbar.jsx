import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [coursesMenuOpen, setCoursesMenuOpen] = useState(false);

  const handleCoursesMenuToggle = () => {
    setCoursesMenuOpen(!coursesMenuOpen);
  };

  return (
    <div className="bg-blue-100 pt-2">
      <div className="flex items-center justify-center">
        <h1 className="text-black text-l mr-4">
          Navigate your ideal career path with tailored expert advice
        </h1>
        <button className="bg-blue-100 text-blue-700 hover:bg-blue-200 py-2 px-4 rounded">
          <Link to='/contactexpert' className="text-blue-700 hover:text-blue-800">
            Contact Expert
          </Link>
        </button>
      </div>

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="p-2">
                Accerdian
              </Link>
              <button
                onClick={handleCoursesMenuToggle}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Courses
              </button>
              {coursesMenuOpen && (
                <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg">
                  <ul className="divide-y divide-gray-200">
                    <li>
                      <Link
                        to="/course1"
                        onClick={() => setCoursesMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Course 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/course2"
                        onClick={() => setCoursesMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Course 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/course3"
                        onClick={() => setCoursesMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Course 3
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex">
              <Link to="/refer-earn" className="p-2">
                Refer & Earn
              </Link>
              <Link to="/resources" className="p-2">
                Resources
              </Link>
              <Link to="/about-us" className="p-2 text-black">
                About Us
              </Link>
              <Link to="/login" className="p-2 text-blue-500">
                Login
              </Link>
              <Link
                to="/try-for-free"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Try for Free
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
