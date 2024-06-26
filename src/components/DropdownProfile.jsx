import React, { useState, useEffect } from "react";
import image4 from "../images/user.png";
import image6 from "../images/question.png";
import image7 from "../images/log-out.png";
import ProfileCard from "./ProfileCard.jsx";
import Helpcomp from "./HelpComponent.jsx";

const DropdownProfile = ({ userData, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const [showContainer2, setShowContainer2] = useState(false);
  const [closing, setClosing] = useState(false);
  const [closing2, setClosing2] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".dropdownn")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleButtonClick = () => {
    setShowContainer(true);
  };

  const handleButtonClick2 = () => {
    setShowContainer2(true);
  };

  const handleCloseButtonClick = () => {
    setClosing(true);
    setTimeout(() => {
      setShowContainer(false);
      setClosing(false);
    }, 400);
  };

  const handleCloseButtonClick2 = () => {
    setClosing2(true);
    setTimeout(() => {
      setShowContainer2(false);
      setClosing2(false);
    }, 400);
  };

  return (
    <div className="grid">
      <button
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`border-2 profile dropdownn ${isOpen ? "flipped" : ""}`}
      >
        <img
          className="profileimage"
          src={userData.avatar}
          alt="Your profile"
        />
      </button>
      {shouldRender && (
        <div className="tooltipbox">
          <ul
            className={`flex flex-col gap-y-4 pdropdown-menu z-20 absolute -right-3 mt-5 w-[14%] min-w-56 bg-white bg-opacity-20 backdrop-blur-md text-black rounded-lg shadow-lg pt-4 pb-5 ${
              isOpen ? "pdropdown-open" : "pdropdown-closed"
            }`}
          >
            <div className="myname max-w-[100%] text-gray-900 font-semibold mx-auto">
              {userData.name}
            </div>
            <hr
              style={{ borderColor: "#0000001b" }}
              className="mx-auto w-[82%] border-t-1 -mt-1"
            />
            <li>
              <button
                onClick={handleButtonClick}
                className="profilebtn flex ml-5 items-center"
              >
                <div className="flex min-w-[92%] gap-3">
                  <img
                    className="iconprofile"
                    src={image4}
                    alt="View profile"
                  />
                  <span className="btnname">My Profile</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3.5 tick"
                  stroke="currentColor"
                  strokeWidth="0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={handleButtonClick2}
                className="profilebtn flex ml-5 items-center"
              >
                <div className="flex min-w-[92%] gap-3">
                  <img
                    className="iconprofile"
                    src={image6}
                    alt="View profile"
                  />
                  <span className="btnname">Help</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3.5 tick"
                  stroke="currentColor"
                  strokeWidth="0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                className="profilebtn flex ml-5 items-center"
                onClick={handleLogout}
              >
                <div className="flex min-w-[92%] gap-3">
                  <img
                    className="iconprofile"
                    src={image7}
                    alt="View profile"
                  />
                  <span className="btnname">Logout</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3.5 tick"
                  stroke="currentColor"
                  strokeWidth="0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ul>
          <div className="ptooltip"></div>
          <div className="tooltip"></div>
        </div>
      )}
      {showContainer && (
        <ProfileCard
          onClose={handleCloseButtonClick}
          userData={userData}
          closing={closing}
        />
      )}
      {showContainer2 && (
        <Helpcomp onClose={handleCloseButtonClick2} userDt={userData} closing2 = {closing2}/>
      )}
    </div>
  );
};
export default DropdownProfile;