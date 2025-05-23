import './TaskCard.css';

interface TaskCardProps {
  title: string;
  assigneeName: string;
  dueDate?: string;
  completedAtDate?: string;
}

const TaskCard = (props: TaskCardProps): JSX.Element => {
  return (    
    <div className="TaskItem">
      <h2 className='text-2xl font-bold text-red-600'>{props.title}</h2>
      <p>
        {props.completedAtDate 
          ? "Completed at: " + props.completedAtDate 
          : "Due Date: " + props.dueDate
        }
      </p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;