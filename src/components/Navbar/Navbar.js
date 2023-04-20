import React from "react";
import Header from "./Header";
import Profile from "./Profile";

const user = {
    username: "testuser",
    email: "test@gmail.com",
};

const Navbar = () => {
    return (
        <div className="flex py-2 px-2">
            <Header />
            <div className="ml-auto">
                <Profile user={user} />
            </div>
        </div>
    );
};

export default Navbar;