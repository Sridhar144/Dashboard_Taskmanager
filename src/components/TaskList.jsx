import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {tasks.map((task) => (
        <TaskCard
        key={task.id}
        {...task}
        fromPending={task.status === "Pending" && task.status === "Completed"}
      />
      ))}
    </div>
  );
};

export default TaskList;
