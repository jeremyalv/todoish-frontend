import React, { useState, useEffect } from "react";
import * as api from "../../api/api.js";

const CreateTaskModal = ({ handleOpen }) => {
    const [submit, setSubmit] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    // Handler for form submission
    const handleCreateTask = async (e) => {
        e.preventDefault();

        const data = { taskName, dueDate, description, category };

        try {
            await api.postTask(data);
        } catch (error) {
            console.log(error);
        }

        // Toggle (close) modal
        handleOpen();

        // Set submit value to true
        setSubmit(true);
    };

    return (
        <>
            <div className="flex justify-center items-center fixed inset-0">
                {/* Overlay */}
                <div
                    className="w-full h-full bg-black opacity-25"
                    onClick={handleOpen}
                ></div>

                {/* Modal */}
                <div className="flex flex-col absolute z-30 w-5/6 h-84 px-2 py-1.5 bg-white rounded-lg">
                    {/* Modal Header */}
                    <div className="flex flex-row justify-between mr-3 ml-3 mt-4">
                        {/* Modal Title */}
                        <div className="text-xl font-semibold">
                            Add a new task
                        </div>

                        {/* X-mark */}
                        <svg
                            className="font-bold w-6 h-6 px-.5 py-.5 active:text-red-500 active:bg-red-200 active:rounded-lg"
                            onClick={handleOpen}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>

                    {/* Modal Body */}
                    <div className="mr-3 ml-3 mt-4 mb-2">
                        <form method="POST" onSubmit={handleCreateTask}>
                            <div className="mt-2 mb-6">
                                {/* Task name */}
                                <label className="flex flex-col mb-3">
                                    Task Name
                                    <input
                                        type="text"
                                        name="taskName"
                                        required
                                        className="border-2 px-1.5 py-1"
                                        value={taskName}
                                        onChange={(e) =>
                                            setTaskName(e.target.value)
                                        }
                                    ></input>
                                </label>

                                {/* Due date -> returns YYYY-MM-DD */}
                                <label className="flex flex-col mb-3">
                                    Due Date
                                    <input
                                        type="date"
                                        name="taskDueDate"
                                        required
                                        className="border-2 px-1.5 py-1"
                                        value={dueDate}
                                        onChange={(e) =>
                                            setDueDate(e.target.value)
                                        }
                                    ></input>
                                </label>

                                {/* Task category */}
                                <label className="flex flex-col mb-3">
                                    Category
                                    <input
                                        className="border-2 px-1.5 py-1"
                                        type="text"
                                        name="taskCategory"
                                        defaultValue=""
                                        value={category}
                                        onChange={(e) =>
                                            setCategory(e.target.value)
                                        }
                                    ></input>
                                </label>

                                {/* Task description */}
                                <label className="flex flex-col mb-3">
                                    Description
                                    <input
                                        className="border-2 px-1.5 py-1"
                                        type="text"
                                        name="taskDescription"
                                        value={description}
                                        defaultValue=""
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    ></input>
                                </label>
                            </div>

                            <div className="flex flex-row justify-center mt-4 mb-3">
                                <button className="active:ring bg-orange-500 text-white font-semibold rounded-md px-6 py-2">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateTaskModal;
