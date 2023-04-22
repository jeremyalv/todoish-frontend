import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import TaskFeed from "./Task/TaskFeed";
import Menu from "./Navbar/Menu";
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
    }, []);

    // If viewport is desktop, then show warning to user
    if (showDesktopWarning) {
        return (
            <div className="h-screen w-screen">
                <DesktopWarning />
            </div>
        );
    }

    // Else, return the Todoish app
    return (
        <>
            <Navbar />
            <TaskFeed />
            <Menu />
        </>
    );
};

export default App;
