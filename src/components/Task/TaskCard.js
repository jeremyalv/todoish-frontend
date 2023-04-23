import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { formatDate } from "../Helper/FormatDate";
import { GMTtoWIB } from "../Helper/GMTtoWIB";
import DeleteTask from "./DeleteTask";
import * as api from "../../api/api.js";
import { GetIdFromTask } from "../Helper/GetIdFromTask";
// import UpdateTaskModal from "../Navbar/UpdateTaskModal";

const TaskCard = ({ task, handleUpdate, handleDelete }) => {
    const [opened, setOpened] = useState(false);
    const [finished, setFinished] = useState(task["is_finished"]);
    const taskDueDate = Date.parse(task.due_date);
    const formattedDueDate = formatDate(task);

    const handleOpened = () => {
        console.log("opened: " + opened);
        setOpened(!opened);
    };

    const handleFinished = async () => {
        // Store the new finished data
        const id = GetIdFromTask(task);
        const data = { is_finished: !finished };

        try {
            await api.patchTask(id, data);
        } catch (error) {
            console.log(error);
        }

        // Update 'finished' state
        setFinished(!finished);
    };

    return (
        <div className="flex flex-col items-center w-full h-20">
            {/* Border */}
            <div className="w-full border-b"></div>

            {/* Main Card Section */}
            <div
                onClick={handleOpened}
                className="flex flex-row items-center w-full h-20"
            >
                {/* Checkbox component */}
                <div className="self-start mt-4">
                    <Checkbox onChange={handleFinished} checked={finished} />
                </div>

                {/* Task Details Section */}
                <div className="flex flex-row w-full">
                    <div className="flex flex-col ml-4 mr-2 justify-start items-start">
                        {/* Title */}
                        <div className="text-sm md:text-lg">{task.title}</div>

                        {/* Description */}
                        <div className="text-xs md:text-sm text-gray-500">
                            {task.description}
                        </div>

                        {/* Due Date */}
                        {/* Assumption: TaskDueDate is in WIB */}
                        {task.due_date === null ? (
                            ""
                        ) : GMTtoWIB(new Date().getTime()) >= taskDueDate ? (
                            // If task is due, then highlight font as red
                            <div className="text-xs pt-1 pb-0.5 text-red-400">
                                {formattedDueDate}
                            </div>
                        ) : (
                            // Else, highlight font as gray
                            <div className="text-xs pt-1 pb-0.5 text-gray-400">
                                {formattedDueDate}
                            </div>
                        )}
                    </div>

                    {/* Delete Task and Category Section */}
                    <div className="flex flex-col ml-auto my-auto">
                        <DeleteTask task={task} handleDelete={handleDelete} />

                        {/* Category */}
                        {/* <div className="text-sm text-gray-400 mt-auto">
                            {task.category}
                        </div> */}
                    </div>

                    {/* TODO For future improvement - Update whole Task data */}
                    {/* 
                    {opened ? (
                        <UpdateTaskModal
                            task={task}
                            handleUpdate={handleUpdate}
                            handleOpen={handleOpened}
                        />
                    ) : null} */}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
