import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { getAllTasks } from "../../api/api.js";

const TaskFeed = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getAllTasks();
            const allTasks = await data.results;

            setTasks(allTasks);
        };

        fetchTasks();
    }, []);

    return (
        <div className="flex flex-col items-center">
            {tasks.map((task, key) => (
                <TaskCard key={key} task={task} />
            ))}
        </div>
    );
};

export default TaskFeed;
