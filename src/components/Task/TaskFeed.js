import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import * as api from "../../api/api.js";

const fetchTasks = async (setTasks) => {
    const data = await api.getAllTasks();
    const allTasks = await data.results;

    setTasks(allTasks);
};

const deleteTask = async (id) => {
    // TODO add id field to Task... model
    // then store to TaskCard's state
};

const TaskFeed = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks(setTasks);
    }, []);

    return (
        <div className="flex flex-col items-center overflow-y-auto px-4 pt-12 pb-20">
            {tasks.map((task, key) => (
                <TaskCard key={key} task={task} />
            ))}
        </div>
    );
};

export default TaskFeed;
