import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoLsit] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addNewTask = () => {
    setTodoLsit([...todoList, newTask]);
    setNewTask("");
  };

  const deleteTask = (taskId) => {
    const updatedList = todoList.filter((item, idx) => taskId !== idx);
    setTodoLsit(updatedList);
  };

  const editTask = (taskId) => {};

  return (
    <div className="container">
      <div className="taskContainer">
        <div className="addTask">
          <input type="text" onChange={handleChange} value={newTask} />
          <button className="addBtn" onClick={addNewTask}>
            Add Task
          </button>
        </div>
        <h2>TASK LIST</h2>
        <div className="showList">
          {todoList.map((item, idx) => {
            return (
              <div key={idx} className="taskItem">
                {<p>{item}</p>}
                <div className="btnSection">
                  <button className="editBtn" onClick={() => editTask(idx)}>
                    Edit
                  </button>
                  <button className="deleteBtn" onClick={() => deleteTask(idx)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
