import React from "react";

const CreateTask = ({ opened, handleCreateTask, children }) => {
    return (
        <>
            <button
                onClick={handleCreateTask}
                type="button"
                className="focus:outline-none text-white bg-white active:ring hover:bg-white 
            focus:ring-4 focus:ring-red-300 font-medium rounded-full text-lg px-4 py-4
            "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-10 h-5 font-bold text-orange-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                    />
                </svg>
            </button>

            {opened ? (
                <div className="flex justify-center items-center fixed inset-0">
                    {/* Overlay */}
                    <div
                        className="w-full h-full bg-black opacity-25"
                        onClick={handleCreateTask}
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
                                onClick={handleCreateTask}
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
                            <form method="POST">
                                <div className="mt-2 mb-6">
                                    {/* Task Data */}
                                    <div className="flex flex-col mb-3">
                                        <label htmlFor="task-name">
                                            Task Name
                                        </label>
                                        <input
                                            required
                                            className="border-2 px-1.5 py-1"
                                            type="text"
                                            id="task-name"
                                            name="task-name"
                                        ></input>
                                    </div>

                                    {/* Due date -> returns YYYY-MM-DD */}
                                    <div className="flex flex-col mb-3">
                                        <label htmlFor="task-due-date">
                                            Due Date
                                        </label>
                                        <input
                                            required
                                            className="border-2 px-1.5 py-1"
                                            type="date"
                                            id="task-due-date"
                                            name="task-due-date"
                                        ></input>
                                    </div>

                                    <div className="flex flex-col mb-3">
                                        <label htmlFor="task-description">
                                            Description
                                        </label>
                                        <input
                                            className="border-2 px-1.5 py-1"
                                            type="text"
                                            id="task-description"
                                            name="task-description"
                                        ></input>
                                    </div>
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
            ) : (
                <></>
            )}
        </>
    );
};

export default CreateTask;
