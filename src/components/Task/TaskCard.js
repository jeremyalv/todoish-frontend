import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { formatDate } from "../Helper/FormatDate";
import { GMTtoWIB } from "../Helper/GMTtoWIB";

const Task = ({ task }) => {
    const [finished, setFinished] = useState(task["is_finished"]);
    const taskDueDate = Date.parse(task.due_date);
    const formattedDueDate = formatDate(task);

    // TODO Sync actions with backend database
    const handleFinished = () => {
        setFinished(!finished);
    };

    return (
        <div className="flex flex-col items-center w-full h-20">
            <div className="w-full border-b"></div>
            <div className="flex flex-row items-center w-full h-20">
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
                        {/* Delete Task */}
                        <div className="text-sm text-gray-400 ml-auto pt-3 pb-2 active:text-red-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 28 28"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </div>

                        {/* Category */}
                        {/* Hide this for now as we'd want to focus on delete feature / CRUD */}
                        {/* <div className='text-sm text-gray-400 mt-auto'>
                        {task.category}
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
