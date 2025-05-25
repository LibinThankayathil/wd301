import React, { useState } from "react";
import type { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm=(props:TaskFormProps)=>{

  const [formState, setFormState] = useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
  });

  const titleChanged: React.ChangeEventHandler<HTMLInputElement>=(event) =>{
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value })
  }

  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement>=(event) =>{
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value })
  }

  const dateChanged: React.ChangeEventHandler<HTMLInputElement>=(event) =>{
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value })
  }

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 ||  formState.dueDate === "") {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", description: "", dueDate: "" });
  };



  return (
  
  <>
    <form onSubmit={addTask}>
        <input className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id = "todoTitle"
          value={formState.title}
          onChange={titleChanged}
          placeholder="Task Title"
          required
        />
        <input className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"  
          placeholder="Due Date"
          id="todoDueDate"
          value={formState.dueDate}
          onChange={dateChanged}
          required
          />
        <input className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Task Description"
          id = "todoDescription"
          value={formState.description}
          onChange={descriptionChanged}
          required
        />
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          id="addTaskButton" 
          type="submit">
            Add Task
        </button>
      </form>
  </>
  )
}

export default TaskForm;
