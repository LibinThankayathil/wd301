import Task from "./Task";
import type { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDelete: (index: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li key={idx} className="list-none">
      <Task 
        title={task.title} 
        description={task.description} 
        dueDate={task.dueDate}
        onDelete={() => props.onDelete(idx)}
      />
    </li>
  ));

  return <ul className="space-y-2">{list}</ul>
}

export default TaskList;
