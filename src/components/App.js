import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import TaskFeed from "./Task/TaskFeed";
import NavbarControl from "./Navbar/NavbarControl";
import DesktopWarning from "./Helper/DesktopWarning";

const App = () => {
    const [showDesktopWarning, setShowDesktopWarning] = useState(false);

    // Shows warning when users access the webpage via desktop screen
    useEffect(() => {
        if (window.innerWidth > 768) {
            setShowDesktopWarning(true);
        } else {
            setShowDesktopWarning(false);
        }
    });

    // If viewport is desktop, then show warning to user
    if (showDesktopWarning) {
        return (
            <div className="px-4 py-2 h-screen w-screen">
                <DesktopWarning />
            </div>
        );
    }

    // Else, return the Todoish app
    return (
        <div className="max-w-md px-4 py-2 h-screen w-screen">
            <>
                <Navbar />
                <TaskFeed />
                <NavbarControl />
            </>
        </div>
    );
};

export default App;
