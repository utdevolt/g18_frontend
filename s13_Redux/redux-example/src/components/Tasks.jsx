import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../app/slices/taskSlice";


export default function Tasks() {
  const [value,setValue] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.tasks);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit= (event) => {
    event.preventDefault();
    const task = {
      id: tasks.length + 1,
      text: value,
    };

    dispatch(addTask(task));

  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input 
          value={value} 
          onChange={handleInputChange} 
          type="text" 
          placeholder="Escribe tu tarea"
          />
        <button type="submit" className="createButton">Crear Tarea</button>
      </form>
      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id}>
            <p>{task.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}