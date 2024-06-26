import React, { useState, useEffect } from "react";

const Helpcomp = ({ onClose, userDt, closing2 }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputHeight, setInputHeight] = useState("auto");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    onClose();
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setInputHeight(`${event.target.scrollHeight}px`);
  };

  const handleSend = () => {
    const message = `Message: \n${inputValue}\nName: ${userDt.name}\nEmail: ${userDt.email}\nLocation: ${userDt.location}`;
    const scriptUrl = `https://script.google.com/macros/s/AKfycbwe2YpsFjN3diseguwicYTXqgUmoN-dTQP5X6RJ_IgD_6qfdkgUhJyFO8irHk0wimOn/exec?read=${encodeURIComponent(
      message
    )}`;

    fetch(scriptUrl, { mode: "no-cors" })
    handleClose();
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center h-screen z-50 ${
        closing2 ? "depixelated" : "pixelated"
      }`}
    >
      <div className="profilecard w-[90%] md:w-[40%] rounded-lg shadow-lg overflow-hidden bg-white">
        <div className="p-4 rounded-lg relative bg-gray-50">
          <div className="absolute top-2 right-3 text-gray-600">
            <button className="helpbtn" onClick={handleClose}>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-9"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16 8L8 16M8.00001 8L16 16"
                    stroke="#F97316"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="text-black flex flex-col gap-1 text-left mt-8 mb-0">
            <textarea
              value={inputValue}
              placeholder="Write your message here"
              onChange={handleChange}
              style={{
                height: inputHeight,
                minHeight: "120px",
                width: "100%",
                resize: "none",
                background: "#f5f5f5",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                color: "#6d6d6d",
              }}
              className="focus:border-blue-500"
            />
            <div className="flex justify-end items-center mt-3">
              <button
                className="flex items-center justify-center py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                onClick={handleSend}
              >
                Send
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M22 2L11 13"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpcomp;