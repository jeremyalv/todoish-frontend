import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import * as api from "../../api/api.js";

import { GetIdFromTask } from "../Helper/GetIdFromTask";

const fetchTasks = async (setTasks) => {
    const data = await api.getAllTasks();
    const allTasks = await data.results;

    setTasks(allTasks);
};

const handleDelete = async (task) => {
    // Retrieve Id from hyperlinked URL field
    const id = GetIdFromTask(task);

    // Then store to TaskCard's state
    await api.deleteTask(id);

    // TBA fetch tasks
};

const handleUpdate = async (task, newData) => {
    // Retrieve Id from hyperlinked URL field
    const id = GetIdFromTask(task);

    // Then send PUT request to server
    await api.putTask(id, newData);
};

const TaskFeed = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks(setTasks);
    }, []);

    return (
        <div className="flex flex-col items-center overflow-y-auto px-4 pt-12 pb-20">
            {tasks.map((task, key) => (
                <TaskCard
                    key={key}
                    task={task}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default TaskFeed;
