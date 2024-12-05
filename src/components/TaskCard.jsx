import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleTaskCompleted } from "../store/taskSlice";
import { useState } from "react";

// Task Card with enhanced UI
const TaskCard = ({
  id,
  title,
  description,
  startDate,
  endDate,
  status,
  assignee,
  priority,
  fromPending,
}) => {
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  // Handle task completion toggle
  const handleToggleCompleted = () => {
    dispatch(toggleTaskCompleted(id));
    setCompleted(!completed);
  };

  // Status colors for tasks
  const statusColors = {
    Pending: "bg-yellow-500 text-yellow-900",
    "In Progress": "bg-blue-500 text-blue-900",
    Completed: "bg-green-500 text-green-900",
    Deferred: "bg-gray-500 text-gray-900",
    Deployed: "bg-purple-500 text-purple-900",
  };

  // Render end date logic
  const renderEndDate = () => {
    if (status === "Completed" || status === "Deployed") {
      return (
        <button
          disabled
          className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md"
        >
          End Date: {endDate ? new Date(endDate).toLocaleDateString() : "N/A"}
        </button>
      );
    }
    if (fromPending) {
      return (
        <div className="text-sm mt-4">
          <span>End Date: {new Date(endDate).toLocaleDateString()}</span>
        </div>
      );
    }
    return (
      <div className="text-sm mt-4">
        <span>End Date: ---</span>
      </div>
    );
  };

  return (
    <div className="rounded-xl shadow-lg p-6 bg-white dark:bg-gray-800 w-full max-w-sm transition-all hover:scale-105 transform">
      <div className={`p-4 rounded-t-md ${statusColors[status]} text-white`}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm font-light">{assignee || "No Assignee"}</p>
      </div>
      <div className="p-4 text-gray-800 dark:text-gray-300">
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between text-sm mt-4">
          <span>Start: {new Date(startDate).toLocaleDateString()}</span>
          {renderEndDate()}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xs bg-gray-200 py-1 px-3 rounded-full dark:bg-gray-700 dark:text-gray-300">
          Priority: {priority || "N/A"}
        </span>
        <button
          onClick={handleToggleCompleted}
          className={`py-1 px-4 text-sm rounded-lg shadow transition-colors duration-300 ${completed ? "bg-green-200 text-green-800" : statusColors[status]}`}
        >
          {completed ? "Completed" : status}
        </button>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  status: PropTypes.string.isRequired,
  assignee: PropTypes.string,
  priority: PropTypes.string,
  fromPending: PropTypes.bool,
};

export default TaskCard;
