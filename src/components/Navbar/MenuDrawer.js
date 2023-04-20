import React from "react";
import ExtendedMenuDrawer from "./ExtendedMenuDrawer";

const MenuDrawer = ({ opened, handleOpenDrawer }) => {
    return (
        <div
            className="relative border-gray-200 rounded container flex flex-wrap items-center justify-between mx-auto"
            onClick={handleOpenDrawer}
        >
            <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <svg
                    className="w-6 h-6  text-white"
                    strokeWidth={3}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>

            {opened ? <ExtendedMenuDrawer /> : null}
        </div>
    );
};

export default MenuDrawer;
