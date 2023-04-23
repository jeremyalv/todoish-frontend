// import React, { useState } from "react";
// import * as api from "../../api/api.js";

// const formatDueDate = (task) => {
//     let fDueDate = new Date(task.due_date);
//     fDueDate = fDueDate.setHours(fDueDate.getHours() - 7);
//     fDueDate = new Date(fDueDate);

//     return `${fDueDate.getFullYear()}-${fDueDate.getMonth()}-${fDueDate.getDate()}`;
// };

// const UpdateTaskModal = ({ task, handleUpdate, handleOpen }) => {
//     const [submit, setSubmit] = useState(false);

//     // Init states with existing Task fields
//     const [taskName, setTaskName] = useState(task.title);
//     const [dueDate, setDueDate] = useState(task.due_date);
//     const [description, setDescription] = useState(task.description);
//     const [category, setCategory] = useState(task.category);

//     // Handler for form submission
//     const handleUpdateTask = async (e) => {
//         e.preventDefault();

//         const newData = { taskName, dueDate, description, category };

//         try {
//             // await?
//             handleUpdate(task, newData);
//         } catch (error) {
//             console.log(error);
//         }

//         // Toggle (close) modal
//         handleOpen();

//         // Set submit value to true
//         setSubmit(true);
//     };

//     return (
//         <>
//             <div className="fixed z-10 flex justify-center items-center inset-0">
//                 {/* Overlay */}
//                 <div
//                     className="fixed z-20 w-full h-full bg-black opacity-25 pointer-events-none"
//                     onClick={handleOpen}
//                 ></div>

//                 {/* Modal */}
//                 <div className="flex flex-col absolute z-30 w-5/6 h-84 px-2 py-1.5 bg-white rounded-lg pointer-events-auto">
//                     {/* Modal Header */}
//                     <div className="flex flex-row justify-between mr-3 ml-3 mt-4">
//                         {/* Modal Title */}
//                         <div className="text-xl font-semibold">
//                             Edit this task
//                         </div>

//                         {/* X-mark */}
//                         <svg
//                             className="font-bold w-6 h-6 px-.5 py-.5 active:text-red-500 active:bg-red-200 active:rounded-lg"
//                             onClick={handleOpen}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M6 18L18 6M6 6l12 12"
//                             />
//                         </svg>
//                     </div>

//                     {/* Modal Body */}
//                     <div className="mr-3 ml-3 mt-4 mb-2">
//                         <form onSubmit={handleUpdateTask}>
//                             <div className="mt-2 mb-6">
//                                 {/* Task name */}
//                                 <label className="flex flex-col mb-3">
//                                     Title
//                                     <input
//                                         type="text"
//                                         name="taskName"
//                                         required
//                                         className="border-2 px-1.5 py-1"
//                                         value={taskName}
//                                         onChange={(e) =>
//                                             setTaskName(e.target.value)
//                                         }
//                                     ></input>
//                                 </label>

//                                 {/* Due date -> returns YYYY-MM-DD */}
//                                 <label className="flex flex-col mb-3">
//                                     Due Date
//                                     <input
//                                         type="date"
//                                         name="taskDueDate"
//                                         required
//                                         className="border-2 px-1.5 py-1"
//                                         value={dueDate}
//                                         onChange={(e) =>
//                                             setDueDate(e.target.value)
//                                         }
//                                     ></input>
//                                 </label>

//                                 {/* Task category */}
//                                 <label className="flex flex-col mb-3">
//                                     Category
//                                     <input
//                                         className="border-2 px-1.5 py-1"
//                                         type="text"
//                                         name="taskCategory"
//                                         defaultValue=""
//                                         value={category}
//                                         onChange={(e) =>
//                                             setCategory(e.target.value)
//                                         }
//                                     ></input>
//                                 </label>

//                                 {/* Task description */}
//                                 <label className="flex flex-col mb-3">
//                                     Description
//                                     <input
//                                         className="border-2 px-1.5 py-1"
//                                         type="text"
//                                         name="taskDescription"
//                                         value={description}
//                                         defaultValue=""
//                                         onChange={(e) =>
//                                             setDescription(e.target.value)
//                                         }
//                                     ></input>
//                                 </label>
//                             </div>

//                             <div className="flex flex-row justify-center mt-4 mb-3">
//                                 <button
//                                     type="submit"
//                                     className="active:ring bg-orange-500 text-white font-semibold rounded-md px-6 py-2"
//                                 >
//                                     Save
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default UpdateTaskModal;
