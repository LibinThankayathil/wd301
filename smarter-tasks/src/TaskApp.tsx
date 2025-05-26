import type { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";


interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks",{
    tasks: [],
  });

  const addTask = (task: TaskItem) => {
    setTaskAppState({tasks: [...taskAppState.tasks, task]});
  };

  const deleteTask = (index: number) => {
    const newTasks = taskAppState.tasks.filter((_, i) => i !== index);
    setTaskAppState({ tasks: newTasks });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-10 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-3xl mb-2 font-bold text-slate-700">
            Smarter Tasks
          </h1>
          <h2 className="text-lg text-slate-600">
            <span className="font-bold">Project: </span>
            Graduation Final Year Project (Revamp college website)
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-700">
                Pending Tasks
              </h2>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                {taskAppState.tasks.length} tasks
              </span>
            </div>
            <TaskForm addTask={addTask} />
            <div className="mt-6">
              <TaskList tasks={taskAppState.tasks} onDelete={deleteTask} />
              {taskAppState.tasks.length === 0 && (
                <p className="text-center text-slate-500 my-4">No tasks yet. Add one above!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskApp;
