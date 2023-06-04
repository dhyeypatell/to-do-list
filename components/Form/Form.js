import "./Form.scss";
import { useState } from "react";

const Form = ({ setTasks }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObject = {
      task: task,
      isDone: false,
    };

    if (taskObject.task.length !== 0) {
      setTasks((tasks) => [...tasks, taskObject]);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Enter your task:</label>
      <input
        type="text"
        placeholder="task"
        name="task"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
};

export default Form;
