import React from "react";
import Task from "./Task";
import type { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
}
interface State {
    "": string
}
class TaskList extends React.Component<Props, State> {
  
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task key={idx} title={task.title} description={task.description} dueDate={task.dueDate} />
    ));
  }
}
export default TaskList;
