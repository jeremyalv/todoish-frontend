import React from "react";

const SearchTask = ({ phoneScreen }) => {
    return (
        <>
            {phoneScreen ? (
                <div className="hover:bg-orange-500 focus:ring-2 focus:ring-gray-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-6 h-6 text-white "
                        style={{ height: 30, width: 30 }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </div>
            ) : null}
        </>
    );
};

export default SearchTask;
