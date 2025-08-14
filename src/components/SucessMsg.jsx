import React, { useEffect, useState } from "react";

const ErrorAlert = ({ message, show }) => {
    const [visible, setVisible] = useState(false);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        if (show) {
            setVisible(true);
            setExiting(false);

            const timer = setTimeout(() => {
                setExiting(true);
                setTimeout(() => {
                    setVisible(false);
                }, 400);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [show]);

    if (!visible) return null;

    return (
        <div
            className={`fixed w-[90vw] lg:w-fit mx-auto top-5 left-1/2 -translate-x-1/2 z-50 bg-[#E8F5E9] text-[#1B5E20] border border-[#B2DFDB] p-3 rounded-lg shadow-lg animate-slideDownCenter ${exiting ? "animate-slideDownCenterOut" : "animate-slideDownCenterIn"} `}
        >
            {message}
        </div>
    );
};

export default ErrorAlert;
