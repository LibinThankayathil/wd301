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

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
  });

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({ ...formState, title: event.target.value });
  };

  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({ ...formState, description: event.target.value });
  };

  const dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.title.length === 0 || formState.dueDate === "") {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", description: "", dueDate: "" });
  };

  return (
    <form onSubmit={addTask} className="space-y-4">
      <div>
        <label htmlFor="todoTitle" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          id="todoTitle"
          value={formState.title}
          onChange={titleChanged}
          placeholder="What needs to be done?"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="todoDueDate" className="block text-sm font-medium text-gray-700 mb-1">
          Due Date
        </label>
        <input
          type="date"
          id="todoDueDate"
          value={formState.dueDate}
          onChange={dateChanged}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="todoDescription" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <input
          type="text"
          id="todoDescription"
          value={formState.description}
          onChange={descriptionChanged}
          placeholder="Add details about this task"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        id="addTaskButton"
        className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
