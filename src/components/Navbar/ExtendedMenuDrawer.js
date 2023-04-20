import React from "react";

const ExtendedMenuDrawer = () => {
    return (
        <div
            className="absolute -mt-80 w-44 md:block md:w-auto"
            id="navbar-default"
        >
            <ul className="relative flex flex-col w-full p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-white bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0"
                        aria-current="page"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 "
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 "
                    >
                        Pricing
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 "
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ExtendedMenuDrawer;
