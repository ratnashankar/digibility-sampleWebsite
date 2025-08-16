import React, { useEffect, useState } from "react";

const ErrorMsg = ({ message, show, type = "error" }) => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (show) {
      // Reset state so it can show again
      setVisible(true);
      setExiting(false);

      const timer = setTimeout(() => {
        setExiting(true);
        setTimeout(() => setVisible(false), 400);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [show, message]); // 👈 depend on both show + message

  if (!visible) return null;

  const styles =
    type === "error"
      ? "bg-[#FDECEA] text-[#611A15] border-[#F5C6CB]"
      : "bg-[#E6F4EA] text-[#1E4620] border-[#A3D9A5]";

  return (
    <div
      className={`fixed z-[9999] w-[90vw] lg:w-fit mx-auto 
      top-[12vh] left-1/2 -translate-x-1/2 
      border p-3 rounded-lg shadow-lg 
      ${styles} ${exiting ? "animate-slideDownCenterOut" : "animate-slideDownCenterIn"}`}
    >
      {message}
    </div>
  );
};

export default ErrorMsg;
