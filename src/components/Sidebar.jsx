import { GrTask } from "react-icons/gr";
import {
  MdDashboard,
  MdOutlineTaskAlt,
  MdAddTask,
  MdPendingActions,
  MdCloudDone,
  MdOutlineAccessTimeFilled,
  MdQueryStats,
} from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default is dark mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <div
      className={`min-h-screen w-20 sm:w-64 flex flex-col py-6 px-2 shadow-2xl rounded-xl transition-all ${
        isDarkMode ? "bg-gradient-to-br from-indigo-700 to-purple-600 text-white" : "bg-gradient-to-br from-gray-300 to-gray-100 text-gray-800"
      }`}
    >
      {/* Toggle Dark Mode Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800 border-2 border-gray-500"}`}
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2 justify-center sm:justify-start px-4 h-16 text-2xl font-bold mb-10 transition-all">
        <GrTask />
        <span className="hidden sm:inline-block text-xl font-semibold">Task Manager</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6">
        <Link
          to="/"
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? "hover:bg-gray-700 hover:scale-105 transform"
              : "hover:bg-gray-200 hover:scale-105 transform"
          }`}
        >
          <MdDashboard className="text-2xl" />
          <span className="hidden sm:inline-block">Dashboard</span>
        </Link>

        <Link
          to="/completeTask"
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? "hover:bg-gray-700 hover:scale-105 transform"
              : "hover:bg-gray-200 hover:scale-105 transform"
          }`}
        >
          <MdOutlineTaskAlt className="text-2xl" />
          <span className="hidden sm:inline-block">Completed Tasks</span>
        </Link>

        <Link
          to="/pendingTask"
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? "hover:bg-gray-700 hover:scale-105 transform"
              : "hover:bg-gray-200 hover:scale-105 transform"
          }`}
        >
          <MdPendingActions className="text-2xl" />
          <span className="hidden sm:inline-block">Pending Tasks</span>
        </Link>

        <Link
          to="/inProgressTask"
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? "hover:bg-gray-700 hover:scale-105 transform"
              : "hover:bg-gray-200 hover:scale-105 transform"
          }`}
        >
          <GrInProgress className="text-2xl" />
          <span className="hidden sm:inline-block">In Progress</span>
        </Link>

        <Link
          to="/deployedTask"
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? "hover:bg-gray-700 hover:scale-105 transform"
              : "hover:bg-gray-200 hover:scale-105 transform"
          }`}
        >
          <MdCloudDone className="text-2xl" />
          <span className="hidden sm:inline-block">Deployed Tasks</span>
        </Link>

        <Link
          to="/deferredTask"
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? "hover:bg-gray-700 hover:scale-105 transform"
              : "hover:bg-gray-200 hover:scale-105 transform"
          }`}
        >
          <MdOutlineAccessTimeFilled className="text-2xl" />
          <span className="hidden sm:inline-block">Deferred Tasks</span>
        </Link>

        <Link
          to="/addTask"
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? "hover:bg-gray-700 hover:scale-105 transform"
              : "hover:bg-gray-200 hover:scale-105 transform"
          }`}
        >
          <MdAddTask className="text-2xl" />
          <span className="hidden sm:inline-block">Add New Tasks</span>
        </Link>

        <Link
          to="/statsTask"
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? "hover:bg-gray-700 hover:scale-105 transform"
              : "hover:bg-gray-200 hover:scale-105 transform"
          }`}
        >
          <MdQueryStats className="text-2xl" />
          <span className="hidden sm:inline-block">Task Stats</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
