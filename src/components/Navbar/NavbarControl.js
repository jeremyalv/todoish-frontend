import React, { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import CreateTask from "./CreateTask";
import SearchTask from "./SearchTask";
import CreateTaskModal from "./CreateTaskModalOld";

const NavbarControl = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openCreateTask, setOpenCreateTask] = useState(false);

    const handleOpenedDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const handleOpenedCreateTask = () => {
        setOpenCreateTask(!openCreateTask);
    };

    return (
        <div
            id="navbarControl"
            className=" w-screen fixed 
            left-0 right-0 top-auto bottom-0 md:top-0 md:bottom-auto
            bg-orange-500 py-2"
        >
            <div className="flex justify-between items-center px-6 py-2">
                <div className="">
                    <MenuDrawer
                        opened={openDrawer}
                        handleOpenDrawer={handleOpenedDrawer}
                    />
                </div>
                <div>
                    <CreateTask
                        opened={openCreateTask}
                        handleCreateTask={handleOpenedCreateTask}
                        content={null}
                    >
                        <CreateTaskModal />
                    </CreateTask>
                </div>
                <div className="">
                    <SearchTask phoneScreen={true} />
                </div>
            </div>
        </div>
    );
};

export default NavbarControl;
