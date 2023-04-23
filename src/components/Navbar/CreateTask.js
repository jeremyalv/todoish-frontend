import React, { useState } from "react";

const CreateTask = ({
    opened,
    handleOpenCreateTaskModal: openModal,
    children: modal,
}) => {
    return (
        <>
            {/* Create Task Button */}
            <button
                onClick={openModal}
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

            {opened ? modal : null}
        </>
    );
};

export default CreateTask;
