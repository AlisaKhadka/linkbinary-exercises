import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask() {
    if (text === "") return;
    setTasks([...tasks, text]);
    setText("");
  }

  function removeTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <h1> Task Tracker</h1>
      {/* controlled input */}
      <input
        value={text}
        placeholder="Enter task(use ! for urgent)"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: "8px" }}>Add Task</button>

      {/* conditional rendering:Empty list */}
      {tasks.length ===0 && <p>No tasks available</p>}

      {/* map and list */}
      {tasks.map((task, index) => (
        <p key={index}>
          {task} {task.endsWith("!") && "🔥"}
          <button onClick={() => removeTask(index)}>Remove</button>
        </p>
      ))}
    </div>
  );
}

export default App;
