import React from "react";
import type { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }

  // Arrow function to preserve `this` context
  addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask: TaskItem = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
    this.setState({ description: "" });
    this.setState({ dueDate: "" });
  };

  titleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  descriptionChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };

  dateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id = "todoTitle"
          value={this.state.title}
          onChange={this.titleChanged}
          placeholder="Task Title"
          required
        />
        <input className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"  
          placeholder="Due Date"
          id="todoDueDate"
          value={this.state.dueDate}
          onChange={this.dateChanged}
          required
          />
        <input className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Task Description"
          id = "todoDescription"
          value={this.state.description}
          onChange={this.descriptionChanged}
          required
        />
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          id="addTaskButton" 
          type="submit">
            Add Task
        </button>
      </form>
    );
  }
}

export default TaskForm;
