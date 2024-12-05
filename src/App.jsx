import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';
import AddTask from './components/AddTask';
import Sidebar from './components/Sidebar';
import AllTasks from './components/AllTasks';
import CompleteTask from './components/CompleteTask';
import InProgressTask from './components/InProgressTask';
import Dashboard from './components/Dashboard';
import PendingTask from './components/PendingTask';
import Deployed from './components/Deployed';
import Deferred from './components/Deferred';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and save the preference to localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Check if the dark mode preference exists in localStorage
    if (localStorage.getItem('darkMode') === 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to the document root
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the preference in localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`flex h-full ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="container p-6 overflow-y-auto max-h-screen">
        <header className="flex justify-between items-center mb-4">
          
          <button
            onClick={toggleDarkMode}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-400"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        {/* Routing for different pages */}
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/allTask" element={<AllTasks />} />
          <Route path="/completeTask" element={<CompleteTask />} />
          <Route path="/pendingTask" element={<PendingTask />} />
          <Route path="/deployedTask" element={<Deployed />} />
          <Route path="/deferredTask" element={<Deferred />} />
          <Route path="/inProgressTask" element={<InProgressTask />} />
          <Route path="/statsTask" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
