import TaskCard from "./TaskCard";

function App(): JSX.Element {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="flex flex-col border-2">
        <h1 className="text-3xl font-bold text-gray-600">Pending</h1>
        <TaskCard
          title="Build the website with static content"
          dueDate="6th May" 
          assigneeName="Achinth"
        />
        <TaskCard 
          title="Post Blog"
          dueDate="20th May"
          assigneeName="Noel"
        />
      </div>
      <div className="flex flex-col border-2">
        <h1 className="text-3xl font-bold text-gray-600">Done</h1>
        <TaskCard 
          title="Design the prototype"
          completedAtDate="5th April" 
          assigneeName="Sangeeth"
        />
        <TaskCard 
          title="Get Approval from principal"
          completedAtDate="11th April" 
          assigneeName="Rithul"
        />
      </div>
    </div>
  );
}

export default App;