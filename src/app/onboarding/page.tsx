'use client';

import { useState, useEffect } from "react";
import TaskCard from "@/components/taskcard";
import { supabase } from "@/components/lib/supabase";

type Task = {
  id: number;
  title: string;
  description: string;
  price: number;
  skills: string[];
  location: string;
};

export default function Onboard() {
  const [fetchError, setFetchError] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

useEffect(() => {
  const fetchTasks = async () => {
    setLoading(true); // Set loading state to true
    const { data, error } = await supabase.from('tasks').select('*');
    setLoading(false); // Set loading state to false after fetching

    if (error) {
        setFetchError(error.message);
        setTasks([]); // Clear tasks on error
        console.error(error); // Log the error to the console
      }
       else if (data) {
      setTasks(data as Task[]); // Cast the data to an array of Task
      setFetchError("");
    }
  };

  fetchTasks();
}, []); // Empty dependency array to run the effect only once on component mount

// In your return statement, display a loading message if loading is true
{loading && <p>Loading tasks...</p>}

  return (
    <div>
      <h1>Task List</h1>

      {fetchError && <div className="text-red-500">{fetchError}</div>}

      {tasks.length > 0 ? (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl mt-10">No tasks found</p>
      )}
    </div>
  );
}
