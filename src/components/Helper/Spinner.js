import React, { useState } from "react";
import "./spinner.css";

export const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default Spinner;
