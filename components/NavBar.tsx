"use client";
import { useState, useRef } from "react";
import { menuItems } from "@/shared/menuItems";

const NavBar = () => {
  const [isRecentOpen, setIsRecentOpen] = useState(false);
  const [isPinnedOpen, setIsPinnedOpen] = useState(false);

  const navBarRef = useRef<HTMLDivElement | null>(null);
  const toggleNavBar = () => navBarRef?.current?.classList.toggle("hidden");

  return (
    <>
      <div
        className="sm:hidden block fixed top-2 right-2 text-white z-[15]"
        onClick={toggleNavBar}
      >
        <div className="w-5 h-5">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-300 w-full h-full"
          >
            <path
              d="M17.5 11H12.5M17.5 15H12.5M17.5 7H12.5M9 3L9 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        ref={navBarRef}
        className="lg:sticky lg:top-0 lg:block hidden lg:w-[15%] fixed w-full dark:bg-[#0D1117] z-20 py-3 bg-gray-50 h-screen border-r-[1px] border-gray-300"
      >
        <div onClick={toggleNavBar} className="lg:hidden block mb-6 mt-1 px-4">
          {" "}
          <div className="absolute bg-black rounded-full before:w-7 before:h-[2px] before:bg-black before:rounded-full before:content-[''] before:absolute after:w-7 after:h-[2px] after:bg-black after:rounded-full after:content-[''] after:absolute [&>div]:h-0 before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45"></div>
        </div>
        <div className="lg:block hidden mb-6 mt-1 px-4">
          {" "}
          <div className="w-7 h-[2px] absolute bg-black rounded-full before:w-7 before:h-[2px] before:bg-black before:rounded-full before:content-[''] before:absolute before:-translate-y-[0.35rem] before:transition-all before:duration-150 after:w-7 after:h-[2px] after:bg-black after:rounded-full after:content-[''] after:absolute after:translate-y-[0.35rem] after:transition-all after:duration-150"></div>
        </div>
        <div className="flex-grow overflow-y-auto sm:max-h-[calc(100vh-6rem)] max-h-[calc(100vh-2rem)] pt-2">
          <ul className="space-y-2 text-[0.85em]">
            {/* Home Item */}
            <li className="flex flex-row items-center hover:bg-gray-200 px-4 py-1">
              <div className="w-4 h-4 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house-door w-full h-full"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                </svg>
              </div>

              <span>Home</span>
            </li>

            {/* Recent Dropdown */}
            <li className="relative">
              <div
                onClick={() => setIsRecentOpen(!isRecentOpen)}
                className="flex items-center justify-between hover:bg-gray-200 px-4 py-1 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="w-4 h-4 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock w-full h-full"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <span>Recent</span>
                </div>
                <span className="material-icons">
                  {isRecentOpen ? (
                    <div className="w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-up w-full h-full"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down w-full h-full"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </div>
                  )}
                </span>
              </div>
              {isRecentOpen && (
                <ul className="ml-6 mt-2 bg-gray-50 p-2 rounded shadow">
                  <li className="p-2 hover:bg-gray-200 rounded">Item 1</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Item 2</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Item 3</li>
                </ul>
              )}
            </li>

            {/* Pinned Dropdown */}
            <li className="relative">
              <div
                onClick={() => setIsPinnedOpen(!isPinnedOpen)}
                className="flex items-center justify-between hover:bg-gray-200 px-4 py-1 cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pin-angle w-full h-full"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146m.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a5 5 0 0 0-.288-.076 5 5 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a5 5 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034q.172.002.343-.04L9.927 2.028q-.042.172-.04.343a1.8 1.8 0 0 0 .062.46z" />
                    </svg>
                  </div>
                  <span>Pinned</span>
                </div>
                <span className="material-icons">
                  {isPinnedOpen ? (
                    <div className="w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-up w-full h-full"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down w-full h-full"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </div>
                  )}
                </span>
              </div>
              {isPinnedOpen && (
                <ul className="ml-6 mt-2 bg-gray-50 p-2 rounded shadow">
                  <li className="p-2 hover:bg-gray-200 rounded">Pinned 1</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Pinned 2</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Pinned 3</li>
                </ul>
              )}
            </li>
          </ul>
          <div className="mt-6">
            {/* Categories */}
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-6">
                {/* Heading */}
                <h3 className="text-[0.85em] font-semibold text-gray-700 mb-2 px-4">
                  {category.heading}
                </h3>
                {/* Items */}
                <ul className="space-y-2 text-[0.85em]">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`${
                        item.name === "Leads"
                          ? "relative bg-white cursor-default"
                          : "hover:bg-gray-200 relative [&>span]:hover:bg-blue-500 cursor-default"
                      }`}
                    >
                      <span
                        className={`${
                          item.name === "Leads"
                            ? "absolute top-0 left-2 w-[3px] h-full bg-blue-500"
                            : "absolute top-0 left-2 w-[3px] h-full bg-none"
                        }`}
                      ></span>
                      <div className="flex items-center px-4 py-1">
                        {" "}
                        <span className="w-4 h-4 mr-4">{item.icon}</span>{" "}
                        {/* Placeholder icon */}
                        <span>{item.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
