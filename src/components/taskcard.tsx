type TaskProps = {
    task: {
      title: string;
      description: string;
      price: number;
      skills: string[];
      location: string;
    };
  };
  
  const TaskCard = ({ task }: TaskProps) => {
    return (
      <div className="p-4 bg-gray-700 rounded-lg text-white text-xl">
        <h1 className="font-bold text-2xl">{task.title}</h1>
        <p>{task.description}</p>
        <p>Price: ₹{task.price}</p>
        <p>Skills: {task.skills.join(", ")}</p>
        <p>Location: {task.location}</p>
      </div>
    );
  };
  
  export default TaskCard;
  