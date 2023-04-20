import React from "react";

const Profile = ({ user }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <div
                id="dropdownContainer"
                className="relative rounded-full cursor-pointer"
            >
                <div id="dropdownButton" onClick={handleOpen}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        style={{
                            height: 40,
                            width: 40,
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </div>

                {/* <!-- Dropdown menu --> */}
                {open ? (
                    <div
                        id="menu"
                        className="absolute list-none mt-1 mb-2 -ml-32 my-1 py-1 border border-solid border-gray z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
                    >
                        <div className="mx-2 py-2 px-4 text-sm text-gray-900 bg-white hover:bg-gray-300">
                            <div className="m-0 text-left">{user.username}</div>
                            <div className="m-0 text-left font-medium truncate">
                                {user.email}
                            </div>
                        </div>
                        <ul
                            className="py-2 text-sm text-gray-700"
                            aria-labelledby="avatarButton"
                        >
                            <li className="my-2 bg-white hover:bg-gray-300">
                                <a
                                    href="#"
                                    className="my-2 mx-2 py-2 px-4 hover:bg-gray-100"
                                >
                                    Profile
                                </a>
                            </li>
                            <li className="my-2 bg-white hover:bg-gray-300">
                                <a
                                    href="#"
                                    className="my-2 mx-2 py-2 px-4 hover:bg-gray-100"
                                >
                                    Tasks
                                </a>
                            </li>
                            <li className="my-2 bg-white hover:bg-gray-300">
                                <a
                                    href="#"
                                    className="my-2 mx-2 py-2 px-4 hover:bg-gray-100"
                                >
                                    Settings
                                </a>
                            </li>
                        </ul>
                        <div className="my-1 py-1 bg-white hover:bg-gray-300">
                            <a
                                href="#"
                                className="my-2 mx-2 py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Profile;
