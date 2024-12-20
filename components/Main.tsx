/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Fragment, useRef, useState, createRef } from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { options } from "@/shared/optionItems";
import Table from "./Table";
import PopUp from "./Modals/PopUp";
import ProfilePopUp from "./Modals/ProfilePopUp";
import { items } from "@/shared/profiles";
import One from "@/public/assets/images/one.png"
import Two from "@/public/assets/images/two.png";

const Main = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let isDragging = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging = true;
    containerRef.current!.classList.add("cursor-grabbing");
    startX = e.pageX - containerRef.current!.offsetLeft;
    scrollLeft = containerRef.current!.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the speed factor as needed
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
    containerRef.current!.classList.remove("cursor-grabbing");
  };

  const [popUp, setPopUp] = useState(false);

  const togglePopUp = () => {
    setPopUp((prev: boolean) => !prev);
  };

  const [profilePopUp, setProfilePopUp] = useState(false);

  const togglePopUpProfile = () => {
    setProfilePopUp((prev: boolean) => !prev);
  };

  const profileRef = createRef<HTMLDivElement>();
  const [prevButton, setPrevButton] = useState(false);

  const prev = () => {
    const divClientWidth = profileRef.current?.clientWidth;
    profileRef.current?.scrollBy(-divClientWidth!, 0);
    setPrevButton(false);
  };

  const next = () => {
    const divClientWidth = profileRef.current?.clientWidth;
    profileRef.current?.scrollBy(divClientWidth!, 0);
    setPrevButton(true);
  };

  return (
    <>
      {popUp && <PopUp cancel={togglePopUp} />}
      {profilePopUp && <ProfilePopUp cancel={togglePopUpProfile} />}{" "}
      <div className="flex flex-row item-center justify-between w-full">
        {/* NavBar */}
        <NavBar />

        <div className="lg:w-[82%] w-full h-full overflow-y-auto lg:pl-4 px-3 bg-gray-50 lg:pt-6 pt-16 pb-10">
          <div className="bg-white shadow-lg lg:px-0 lg:py-0 px-1 py-1 rounded-md text-[0.83em]">
            <div className="flex lg:flex-row flex-col flex-wrap items-center justify-between px-2 py-1">
              <div
                onClick={togglePopUpProfile}
                className="lg:w-1/5 w-full flex flex-row items-center justify-start gap-3 lg:mb-0 mb-2 cursor-pointer"
              >
                <h3 className="font-semibold">Open my leads</h3>
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
              </div>
              <div
                ref={containerRef}
                className="lg:w-4/5 w-[100%] flex flex-row items-center justify-start snap-x snap-mandatory mx:auto overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] gap-5 whitespace-nowrap p-1 cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {options.map((item: any, index: number) => (
                  <Fragment key={index}>
                    <div
                      onClick={
                        item.name === "Collaborate"
                          ? () => {
                              togglePopUp();
                            }
                          : () => {
                              console.log("Hello");
                            }
                      }
                      className={`${
                        item.name === "Smart data" ||
                        item.name === "Edit filters" ||
                        item.name === "Edit columns"
                          ? "flex flex-row items-center justify-start gap-[0.3rem] shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] bg-white px-[0.45rem] py-1 rounded-md cursor-pointer"
                          : "flex flex-row items-center justify-start gap-[0.3rem] px-[0.45rem] py-1 cursor-pointer"
                      }`}
                    >
                      {item.icon === "" ? null : (
                        <div className="w-4 h-4">{item.icon}</div>
                      )}

                      <p>{item.name}</p>
                      {item.name === "Delete" ? (
                        <div className="flex flex-row items-center justify-start gap-2">
                          <div className="flex flex-row items-center justify-start gap-1">
                            <div className="w-[1px] h-5 bg-gray-200"></div>
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
                          </div>
                          <div className="w-4 h-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-three-dots-vertical w-full h-full"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                            </svg>
                          </div>
                        </div>
                      ) : null}
                      {item.name === "" ? (
                        <div className="flex flex-row items-center justify-start gap-2 bg-blue-500 rounded-md px-[0.65rem] py-1">
                          <div className="w-4 h-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-menu-button text-white w-full h-full"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" />
                              <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                            </svg>
                          </div>
                          <div className="w-[1px] h-5 bg-white"></div>
                          <div className="w-4 h-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-white w-full h-full"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                              />
                            </svg>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 w-full bg-white sm:px-6 sm:py-5 px-3 py-6 cursor-default pointer-events-auto relative rounded-lg mx-auto border-2 border-indigo-500">
            <div className="w-3 h-3 absolute sm:top-5 sm:right-2 top-2 right-2">
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
            <div className="flex flex-row flex-wrap items-center justify-between gap-3">
              <div className="lg:w-[58%] w-full flex flex-row items-center justify-start gap-2">
                <svg
                  height="1.2em"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:block hidden"
                >
                  <title>Copilot</title>
                  <defs>
                    <radialGradient
                      cx="85.44%"
                      cy="100.653%"
                      fx="85.44%"
                      fy="100.653%"
                      gradientTransform="scale(-.8553 -1) rotate(50.927 2.041 -1.946)"
                      id="lobe-icons-copilot-fill-0"
                      r="105.116%"
                    >
                      <stop offset="9.6%" stopColor="#00AEFF"></stop>
                      <stop offset="77.3%" stopColor="#2253CE"></stop>
                      <stop offset="100%" stopColor="#0736C4"></stop>
                    </radialGradient>
                    <radialGradient
                      cx="18.143%"
                      cy="32.928%"
                      fx="18.143%"
                      fy="32.928%"
                      gradientTransform="scale(.8897 1) rotate(52.069 .193 .352)"
                      id="lobe-icons-copilot-fill-1"
                      r="95.612%"
                    >
                      <stop offset="0%" stopColor="#FFB657"></stop>
                      <stop offset="63.4%" stopColor="#FF5F3D"></stop>
                      <stop offset="92.3%" stopColor="#C02B3C"></stop>
                    </radialGradient>
                    <radialGradient
                      cx="82.987%"
                      cy="-9.792%"
                      fx="82.987%"
                      fy="-9.792%"
                      gradientTransform="scale(-1 -.9441) rotate(-70.872 .142 1.17)"
                      id="lobe-icons-copilot-fill-4"
                      r="140.622%"
                    >
                      <stop offset="6.6%" stopColor="#8C48FF"></stop>
                      <stop offset="50%" stopColor="#F2598A"></stop>
                      <stop offset="89.6%" stopColor="#FFB152"></stop>
                    </radialGradient>
                    <linearGradient
                      id="lobe-icons-copilot-fill-2"
                      x1="39.465%"
                      x2="46.884%"
                      y1="12.117%"
                      y2="103.774%"
                    >
                      <stop offset="15.6%" stopColor="#0D91E1"></stop>
                      <stop offset="48.7%" stopColor="#52B471"></stop>
                      <stop offset="65.2%" stopColor="#98BD42"></stop>
                      <stop offset="93.7%" stopColor="#FFC800"></stop>
                    </linearGradient>
                    <linearGradient
                      id="lobe-icons-copilot-fill-3"
                      x1="45.949%"
                      x2="50%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3DCBFF"></stop>
                      <stop
                        offset="24.7%"
                        stopColor="#0588F7"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="lobe-icons-copilot-fill-5"
                      x1="83.507%"
                      x2="83.453%"
                      y1="-6.106%"
                      y2="21.131%"
                    >
                      <stop offset="5.8%" stopColor="#F8ADFA"></stop>
                      <stop
                        offset="70.8%"
                        stopColor="#A86EDD"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="nonzero">
                    <path
                      d="M17.533 1.829A2.528 2.528 0 0015.11 0h-.737a2.531 2.531 0 00-2.484 2.087l-1.263 6.937.314-1.08a2.528 2.528 0 012.424-1.833h4.284l1.797.706 1.731-.706h-.505a2.528 2.528 0 01-2.423-1.829l-.715-2.453z"
                      fill="url(#lobe-icons-copilot-fill-0)"
                      transform="translate(0 1)"
                    ></path>
                    <path
                      d="M6.726 20.16A2.528 2.528 0 009.152 22h1.566c1.37 0 2.49-1.1 2.525-2.48l.17-6.69-.357 1.228a2.528 2.528 0 01-2.423 1.83h-4.32l-1.54-.842-1.667.843h.497c1.124 0 2.113.75 2.426 1.84l.697 2.432z"
                      fill="url(#lobe-icons-copilot-fill-1)"
                      transform="translate(0 1)"
                    ></path>
                    <path
                      d="M15 0H6.252c-2.5 0-4 3.331-5 6.662-1.184 3.947-2.734 9.225 1.75 9.225H6.78c1.13 0 2.12-.753 2.43-1.847.657-2.317 1.809-6.359 2.713-9.436.46-1.563.842-2.906 1.43-3.742A1.97 1.97 0 0115 0"
                      fill="url(#lobe-icons-copilot-fill-2)"
                      transform="translate(0 1)"
                    ></path>
                    <path
                      d="M15 0H6.252c-2.5 0-4 3.331-5 6.662-1.184 3.947-2.734 9.225 1.75 9.225H6.78c1.13 0 2.12-.753 2.43-1.847.657-2.317 1.809-6.359 2.713-9.436.46-1.563.842-2.906 1.43-3.742A1.97 1.97 0 0115 0"
                      fill="url(#lobe-icons-copilot-fill-3)"
                      transform="translate(0 1)"
                    ></path>
                    <path
                      d="M9 22h8.749c2.5 0 4-3.332 5-6.663 1.184-3.948 2.734-9.227-1.75-9.227H17.22c-1.129 0-2.12.754-2.43 1.848a1149.2 1149.2 0 01-2.713 9.437c-.46 1.564-.842 2.907-1.43 3.743A1.97 1.97 0 019 22"
                      fill="url(#lobe-icons-copilot-fill-4)"
                      transform="translate(0 1)"
                    ></path>
                    <path
                      d="M9 22h8.749c2.5 0 4-3.332 5-6.663 1.184-3.948 2.734-9.227-1.75-9.227H17.22c-1.129 0-2.12.754-2.43 1.848a1149.2 1149.2 0 01-2.713 9.437c-.46 1.564-.842 2.907-1.43 3.743A1.97 1.97 0 019 22"
                      fill="url(#lobe-icons-copilot-fill-5)"
                      transform="translate(0 1)"
                    ></path>
                  </g>
                </svg>
                <h1 className="text-[0.85em] font-semibold">
                  Hi Mona, <span className="text-indigo-600 me-1">68%</span>
                  of goals achieved and rest can be achieved by focusing on 20
                  top leads.
                </h1>
              </div>
              <div className="lg:w-[40%] w-full text-gray-600 flex flex-col gap-1 items-start justify-start text-[0.6em]">
                <div className="flex flex-row flex-wrap gap-2 items-center justify-between w-full">
                  <div className="flex flex-row items-center justify-start gap-1">
                    <div className="w-2 h-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock w-full h-full text-gray-800"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                    </div>
                    <p>1 month until Q4 end</p>
                  </div>

                  <div className="flex flex-row items-center justify-start gap-4">
                    <p className="relative">
                      <span className="w-[1px] h-5 bg-slate-600 absolute top-0 -left-1 z-[10] sm:block hidden"></span>
                      Target{" "}
                      <span className="font-semibold text-black">
                        $45 million
                      </span>
                    </p>
                    <p>68% of target achieved</p>
                  </div>
                </div>
                <div className="relative bg-gray-200 h-[0.3rem] w-full">
                  <div className="absolute bg-green-400 w-[5rem] h-full"></div>
                  <div className="absolute left-[5rem] bg-blue-400 w-[3rem] h-full"></div>
                  <div className="absolute left-[8rem] bg-pink-400 w-[1.5rem] h-full"></div>
                  <div className="absolute left-[9.5rem] bg-yellow-400 w-[1rem] h-full"></div>
                </div>
                <div className="flex flex-row flex-wrap items-center justity-start sm:gap-3 gap-1 w-full">
                  <div className="flex flex-row items-center justify-start gap-1">
                    <div className="w-[4px] h-[4px] rounded-full bg-green-400"></div>
                    <span>Won $18m</span>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-1">
                    <div className="w-[4px] h-[4px] rounded-full bg-blue-400"></div>
                    <span>Generated $8m</span>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-1">
                    <div className="w-[4px] h-[4px] rounded-full bg-pink-400"></div>
                    <span>Best case $7m</span>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-1">
                    <div className="w-[4px] h-[4px] rounded-full bg-blue-400"></div>
                    <span>Quantified $10m</span>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-1">
                    <div className="w-[4px] h-[4px] rounded-full bg-gray-400"></div>
                    <span>Leads $75m</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-between">
              <div className="lg:w-[64%] w-full">
                <div className="mt-5 lg:ms-4 text-xs text-gray-600">
                  <p>
                    Copilot has pinpointed 20 key leads that show strong
                    purchase intent and are actively engaging. These leads need
                    your focus
                  </p>
                  <div className="relative mt-3">
                    <div
                      ref={profileRef}
                      className="flex flex-row items-center justify-start snap-x snap-mandatory w-full mx:auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] gap-4 whitespace-nowrap p-3"
                    >
                      {items.map((data: any, index: number) => (
                        <Fragment key={index}>
                          <div className="px-4 py-3 shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] rounded-xl bg-white">
                            <div className="flex flex-row items-center justify-start gap-2 text-[0.9em] w-[18rem]">
                              <div className="w-10 h-10 relative">
                                <Image
                                  src={data.avatar}
                                  alt="Avatar"
                                  priority={true}
                                  unoptimized={true}
                                  width={50}
                                  height={50}
                                  className="w-10 h-10 rounded-full"
                                />
                                <div className="absolute bottom-0 -right-[0.30rem] bg-green-500 w-3 h-3 rounded-full"></div>
                              </div>
                              <div className="flex flex-col items-start justify-start gap-1">
                                <h5 className="font-semibold">{data.name}</h5>
                                <p className="font-normal">{data.position}</p>
                              </div>
                            </div>
                            <div className="mt-3 p-3 relative bg-gradient-to-r from-blue-100/60 to-blue-50/80 rounded-md">
                              {" "}
                              <div className="w-[2em] h-[2.5em] bg-white absolute top-0 right-0 grid place-content-center rounded-bl-xl">
                                {" "}
                                <div className="w-4 h-4">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full"
                                  >
                                    <path
                                      d="M3.74984 18.3332V14.1665M3.74984 5.83317V1.6665M1.6665 3.74984H5.83317M1.6665 16.2498H5.83317M10.8332 2.49984L9.38802 6.25722C9.15301 6.86825 9.03551 7.17376 8.85278 7.43074C8.69083 7.6585 8.49184 7.8575 8.26408 8.01945C8.00709 8.20217 7.70158 8.31968 7.09055 8.55469L3.33317 9.99984L7.09056 11.445C7.70158 11.68 8.00709 11.7975 8.26408 11.9802C8.49184 12.1422 8.69083 12.3412 8.85278 12.5689C9.03551 12.8259 9.15301 13.1314 9.38802 13.7425L10.8332 17.4998L12.2783 13.7425C12.5133 13.1314 12.6308 12.8259 12.8136 12.5689C12.9755 12.3412 13.1745 12.1422 13.4023 11.9802C13.6592 11.7975 13.9648 11.68 14.5758 11.445L18.3332 9.99984L14.5758 8.55469C13.9648 8.31968 13.6592 8.20217 13.4023 8.01945C13.1745 7.8575 12.9755 7.6585 12.8136 7.43074C12.6308 7.17376 12.5133 6.86825 12.2783 6.25722L10.8332 2.49984Z"
                                      stroke="#4338ca"
                                      strokeWidth="1.67"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-start gap-2">
                                <svg
                                  height="1em"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>Copilot</title>
                                  <defs>
                                    <radialGradient
                                      cx="85.44%"
                                      cy="100.653%"
                                      fx="85.44%"
                                      fy="100.653%"
                                      gradientTransform="scale(-.8553 -1) rotate(50.927 2.041 -1.946)"
                                      id="lobe-icons-copilot-fill-0"
                                      r="105.116%"
                                    >
                                      <stop
                                        offset="9.6%"
                                        stopColor="#00AEFF"
                                      ></stop>
                                      <stop
                                        offset="77.3%"
                                        stopColor="#2253CE"
                                      ></stop>
                                      <stop
                                        offset="100%"
                                        stopColor="#0736C4"
                                      ></stop>
                                    </radialGradient>
                                    <radialGradient
                                      cx="18.143%"
                                      cy="32.928%"
                                      fx="18.143%"
                                      fy="32.928%"
                                      gradientTransform="scale(.8897 1) rotate(52.069 .193 .352)"
                                      id="lobe-icons-copilot-fill-1"
                                      r="95.612%"
                                    >
                                      <stop
                                        offset="0%"
                                        stopColor="#FFB657"
                                      ></stop>
                                      <stop
                                        offset="63.4%"
                                        stopColor="#FF5F3D"
                                      ></stop>
                                      <stop
                                        offset="92.3%"
                                        stopColor="#C02B3C"
                                      ></stop>
                                    </radialGradient>
                                    <radialGradient
                                      cx="82.987%"
                                      cy="-9.792%"
                                      fx="82.987%"
                                      fy="-9.792%"
                                      gradientTransform="scale(-1 -.9441) rotate(-70.872 .142 1.17)"
                                      id="lobe-icons-copilot-fill-4"
                                      r="140.622%"
                                    >
                                      <stop
                                        offset="6.6%"
                                        stopColor="#8C48FF"
                                      ></stop>
                                      <stop
                                        offset="50%"
                                        stopColor="#F2598A"
                                      ></stop>
                                      <stop
                                        offset="89.6%"
                                        stopColor="#FFB152"
                                      ></stop>
                                    </radialGradient>
                                    <linearGradient
                                      id="lobe-icons-copilot-fill-2"
                                      x1="39.465%"
                                      x2="46.884%"
                                      y1="12.117%"
                                      y2="103.774%"
                                    >
                                      <stop
                                        offset="15.6%"
                                        stopColor="#0D91E1"
                                      ></stop>
                                      <stop
                                        offset="48.7%"
                                        stopColor="#52B471"
                                      ></stop>
                                      <stop
                                        offset="65.2%"
                                        stopColor="#98BD42"
                                      ></stop>
                                      <stop
                                        offset="93.7%"
                                        stopColor="#FFC800"
                                      ></stop>
                                    </linearGradient>
                                    <linearGradient
                                      id="lobe-icons-copilot-fill-3"
                                      x1="45.949%"
                                      x2="50%"
                                      y1="0%"
                                      y2="100%"
                                    >
                                      <stop
                                        offset="0%"
                                        stopColor="#3DCBFF"
                                      ></stop>
                                      <stop
                                        offset="24.7%"
                                        stopColor="#0588F7"
                                        stopOpacity="0"
                                      ></stop>
                                    </linearGradient>
                                    <linearGradient
                                      id="lobe-icons-copilot-fill-5"
                                      x1="83.507%"
                                      x2="83.453%"
                                      y1="-6.106%"
                                      y2="21.131%"
                                    >
                                      <stop
                                        offset="5.8%"
                                        stopColor="#F8ADFA"
                                      ></stop>
                                      <stop
                                        offset="70.8%"
                                        stopColor="#A86EDD"
                                        stopOpacity="0"
                                      ></stop>
                                    </linearGradient>
                                  </defs>
                                  <g fill="none" fillRule="nonzero">
                                    <path
                                      d="M17.533 1.829A2.528 2.528 0 0015.11 0h-.737a2.531 2.531 0 00-2.484 2.087l-1.263 6.937.314-1.08a2.528 2.528 0 012.424-1.833h4.284l1.797.706 1.731-.706h-.505a2.528 2.528 0 01-2.423-1.829l-.715-2.453z"
                                      fill="url(#lobe-icons-copilot-fill-0)"
                                      transform="translate(0 1)"
                                    ></path>
                                    <path
                                      d="M6.726 20.16A2.528 2.528 0 009.152 22h1.566c1.37 0 2.49-1.1 2.525-2.48l.17-6.69-.357 1.228a2.528 2.528 0 01-2.423 1.83h-4.32l-1.54-.842-1.667.843h.497c1.124 0 2.113.75 2.426 1.84l.697 2.432z"
                                      fill="url(#lobe-icons-copilot-fill-1)"
                                      transform="translate(0 1)"
                                    ></path>
                                    <path
                                      d="M15 0H6.252c-2.5 0-4 3.331-5 6.662-1.184 3.947-2.734 9.225 1.75 9.225H6.78c1.13 0 2.12-.753 2.43-1.847.657-2.317 1.809-6.359 2.713-9.436.46-1.563.842-2.906 1.43-3.742A1.97 1.97 0 0115 0"
                                      fill="url(#lobe-icons-copilot-fill-2)"
                                      transform="translate(0 1)"
                                    ></path>
                                    <path
                                      d="M15 0H6.252c-2.5 0-4 3.331-5 6.662-1.184 3.947-2.734 9.225 1.75 9.225H6.78c1.13 0 2.12-.753 2.43-1.847.657-2.317 1.809-6.359 2.713-9.436.46-1.563.842-2.906 1.43-3.742A1.97 1.97 0 0115 0"
                                      fill="url(#lobe-icons-copilot-fill-3)"
                                      transform="translate(0 1)"
                                    ></path>
                                    <path
                                      d="M9 22h8.749c2.5 0 4-3.332 5-6.663 1.184-3.948 2.734-9.227-1.75-9.227H17.22c-1.129 0-2.12.754-2.43 1.848a1149.2 1149.2 0 01-2.713 9.437c-.46 1.564-.842 2.907-1.43 3.743A1.97 1.97 0 019 22"
                                      fill="url(#lobe-icons-copilot-fill-4)"
                                      transform="translate(0 1)"
                                    ></path>
                                    <path
                                      d="M9 22h8.749c2.5 0 4-3.332 5-6.663 1.184-3.948 2.734-9.227-1.75-9.227H17.22c-1.129 0-2.12.754-2.43 1.848a1149.2 1149.2 0 01-2.713 9.437c-.46 1.564-.842 2.907-1.43 3.743A1.97 1.97 0 019 22"
                                      fill="url(#lobe-icons-copilot-fill-5)"
                                      transform="translate(0 1)"
                                    ></path>
                                  </g>
                                </svg>
                                <p className="text-[0.9em] font-semibold">
                                  Engage with {data.name}
                                </p>
                              </div>
                              <div className="mt-1">
                                <p className="whitespace-normal break-words">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Accusamus, ut.
                                </p>
                              </div>
                            </div>
                            <p className="mt-3 text-[0.9em] text-gray-400">
                              {data.info}
                            </p>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                    {prevButton && (
                      <div
                        onClick={prev}
                        className="absolute top-[50%] -translate-y-[50%] -left-6 cursor-pointer lg:grid hidden place-content-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full"
                      >
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rotate-180 dark:[&>path]:stroke-[#FBFAFC]"
                        >
                          <path
                            d="M1 13L7 7L1 1"
                            stroke="#344054"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                    <div
                      onClick={next}
                      className="absolute top-[50%] -translate-y-[50%] -right-4 cursor-pointer lg:grid hidden place-content-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full"
                    >
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="dark:[&>path]:stroke-[#FBFAFC]"
                      >
                        <path
                          d="M1 13L7 7L1 1"
                          stroke="#344054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative lg:mt-5 mt-14">
                  <div className="absolute lg:bottom-0 bottom-8 left-[50%] -translate-x-[50%] sm:w-[4rem] w-[2.5rem] flex flex-row items-center justify-between gap-1">
                    <div className="w-[5px] h-[5px] rounded-full bg-gray-400 cursor-pointer"></div>
                    <div className="w-[5px] h-[5px] rounded-full bg-gray-400 cursor-pointer"></div>
                    <div className="w-[5px] h-[5px] rounded-full bg-gray-400 cursor-pointer"></div>

                    <div className="absolute w-6 h-[5px] rounded-full bg-indigo-600 left-0"></div>
                  </div>
                </div>
              </div>
              <div className="w-[2px] h-[17rem] lg:block hidden bg-gray-200"></div>
              <div className="lg:w-[30%] w-full text-xs lg:mt-0 mt-10">
                <p className="text-gray-500">Other key activities</p>
                <div className="px-4 py-3 shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] rounded-md bg-white mt-3">
                  <div className="flex flex-row items-center justify-start gap-2 text-[0.8em] w-[18rem]">
                    <div className="w-8 h-8 relative">
                      <Image
                        src={One}
                        alt="Avatar"
                        priority={true}
                        unoptimized={true}
                        width={50}
                        height={50}
                        className="w-full h-full rounded-full"
                      />
                      <div className="absolute bottom-0 -right-[0.30rem] bg-yellow-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[2px]">
                      <h5 className="font-semibold text-[1.1em]">
                        Cafe A100 for Woodland Bank
                      </h5>
                      <p className="font-normal">
                        Woodland Bank - $100,000 - 8 days to close
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 p-[0.4rem] relative bg-gradient-to-r from-blue-100/60 to-blue-50/80 rounded-md">
                    {" "}
                    <div className="w-[2em] h-[2.9em] bg-white absolute top-0 right-0 grid place-content-center rounded-bl-xl">
                      {" "}
                      <div className="w-4 h-4">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                        >
                          <path
                            d="M3.74984 18.3332V14.1665M3.74984 5.83317V1.6665M1.6665 3.74984H5.83317M1.6665 16.2498H5.83317M10.8332 2.49984L9.38802 6.25722C9.15301 6.86825 9.03551 7.17376 8.85278 7.43074C8.69083 7.6585 8.49184 7.8575 8.26408 8.01945C8.00709 8.20217 7.70158 8.31968 7.09055 8.55469L3.33317 9.99984L7.09056 11.445C7.70158 11.68 8.00709 11.7975 8.26408 11.9802C8.49184 12.1422 8.69083 12.3412 8.85278 12.5689C9.03551 12.8259 9.15301 13.1314 9.38802 13.7425L10.8332 17.4998L12.2783 13.7425C12.5133 13.1314 12.6308 12.8259 12.8136 12.5689C12.9755 12.3412 13.1745 12.1422 13.4023 11.9802C13.6592 11.7975 13.9648 11.68 14.5758 11.445L18.3332 9.99984L14.5758 8.55469C13.9648 8.31968 13.6592 8.20217 13.4023 8.01945C13.1745 7.8575 12.9755 7.6585 12.8136 7.43074C12.6308 7.17376 12.5133 6.86825 12.2783 6.25722L10.8332 2.49984Z"
                            stroke="#4338ca"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2">
                      <svg
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Copilot</title>
                        <defs>
                          <radialGradient
                            cx="85.44%"
                            cy="100.653%"
                            fx="85.44%"
                            fy="100.653%"
                            gradientTransform="scale(-.8553 -1) rotate(50.927 2.041 -1.946)"
                            id="lobe-icons-copilot-fill-0"
                            r="105.116%"
                          >
                            <stop offset="9.6%" stopColor="#00AEFF"></stop>
                            <stop offset="77.3%" stopColor="#2253CE"></stop>
                            <stop offset="100%" stopColor="#0736C4"></stop>
                          </radialGradient>
                          <radialGradient
                            cx="18.143%"
                            cy="32.928%"
                            fx="18.143%"
                            fy="32.928%"
                            gradientTransform="scale(.8897 1) rotate(52.069 .193 .352)"
                            id="lobe-icons-copilot-fill-1"
                            r="95.612%"
                          >
                            <stop offset="0%" stopColor="#FFB657"></stop>
                            <stop offset="63.4%" stopColor="#FF5F3D"></stop>
                            <stop offset="92.3%" stopColor="#C02B3C"></stop>
                          </radialGradient>
                          <radialGradient
                            cx="82.987%"
                            cy="-9.792%"
                            fx="82.987%"
                            fy="-9.792%"
                            gradientTransform="scale(-1 -.9441) rotate(-70.872 .142 1.17)"
                            id="lobe-icons-copilot-fill-4"
                            r="140.622%"
                          >
                            <stop offset="6.6%" stopColor="#8C48FF"></stop>
                            <stop offset="50%" stopColor="#F2598A"></stop>
                            <stop offset="89.6%" stopColor="#FFB152"></stop>
                          </radialGradient>
                          <linearGradient
                            id="lobe-icons-copilot-fill-2"
                            x1="39.465%"
                            x2="46.884%"
                            y1="12.117%"
                            y2="103.774%"
                          >
                            <stop offset="15.6%" stopColor="#0D91E1"></stop>
                            <stop offset="48.7%" stopColor="#52B471"></stop>
                            <stop offset="65.2%" stopColor="#98BD42"></stop>
                            <stop offset="93.7%" stopColor="#FFC800"></stop>
                          </linearGradient>
                          <linearGradient
                            id="lobe-icons-copilot-fill-3"
                            x1="45.949%"
                            x2="50%"
                            y1="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#3DCBFF"></stop>
                            <stop
                              offset="24.7%"
                              stopColor="#0588F7"
                              stopOpacity="0"
                            ></stop>
                          </linearGradient>
                          <linearGradient
                            id="lobe-icons-copilot-fill-5"
                            x1="83.507%"
                            x2="83.453%"
                            y1="-6.106%"
                            y2="21.131%"
                          >
                            <stop offset="5.8%" stopColor="#F8ADFA"></stop>
                            <stop
                              offset="70.8%"
                              stopColor="#A86EDD"
                              stopOpacity="0"
                            ></stop>
                          </linearGradient>
                        </defs>
                        <g fill="none" fillRule="nonzero">
                          <path
                            d="M17.533 1.829A2.528 2.528 0 0015.11 0h-.737a2.531 2.531 0 00-2.484 2.087l-1.263 6.937.314-1.08a2.528 2.528 0 012.424-1.833h4.284l1.797.706 1.731-.706h-.505a2.528 2.528 0 01-2.423-1.829l-.715-2.453z"
                            fill="url(#lobe-icons-copilot-fill-0)"
                            transform="translate(0 1)"
                          ></path>
                          <path
                            d="M6.726 20.16A2.528 2.528 0 009.152 22h1.566c1.37 0 2.49-1.1 2.525-2.48l.17-6.69-.357 1.228a2.528 2.528 0 01-2.423 1.83h-4.32l-1.54-.842-1.667.843h.497c1.124 0 2.113.75 2.426 1.84l.697 2.432z"
                            fill="url(#lobe-icons-copilot-fill-1)"
                            transform="translate(0 1)"
                          ></path>
                          <path
                            d="M15 0H6.252c-2.5 0-4 3.331-5 6.662-1.184 3.947-2.734 9.225 1.75 9.225H6.78c1.13 0 2.12-.753 2.43-1.847.657-2.317 1.809-6.359 2.713-9.436.46-1.563.842-2.906 1.43-3.742A1.97 1.97 0 0115 0"
                            fill="url(#lobe-icons-copilot-fill-2)"
                            transform="translate(0 1)"
                          ></path>
                          <path
                            d="M15 0H6.252c-2.5 0-4 3.331-5 6.662-1.184 3.947-2.734 9.225 1.75 9.225H6.78c1.13 0 2.12-.753 2.43-1.847.657-2.317 1.809-6.359 2.713-9.436.46-1.563.842-2.906 1.43-3.742A1.97 1.97 0 0115 0"
                            fill="url(#lobe-icons-copilot-fill-3)"
                            transform="translate(0 1)"
                          ></path>
                          <path
                            d="M9 22h8.749c2.5 0 4-3.332 5-6.663 1.184-3.948 2.734-9.227-1.75-9.227H17.22c-1.129 0-2.12.754-2.43 1.848a1149.2 1149.2 0 01-2.713 9.437c-.46 1.564-.842 2.907-1.43 3.743A1.97 1.97 0 019 22"
                            fill="url(#lobe-icons-copilot-fill-4)"
                            transform="translate(0 1)"
                          ></path>
                          <path
                            d="M9 22h8.749c2.5 0 4-3.332 5-6.663 1.184-3.948 2.734-9.227-1.75-9.227H17.22c-1.129 0-2.12.754-2.43 1.848a1149.2 1149.2 0 01-2.713 9.437c-.46 1.564-.842 2.907-1.43 3.743A1.97 1.97 0 019 22"
                            fill="url(#lobe-icons-copilot-fill-5)"
                            transform="translate(0 1)"
                          ></path>
                        </g>
                      </svg>
                      <p className="text-[0.9em] font-semibold">
                        Review daft and talk to Chris Naldo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] rounded-md bg-white mt-3">
                  <div className="flex flex-row items-center justify-start gap-2 text-[0.8em] w-[18rem]">
                    <div className="w-8 h-8 relative">
                      <Image
                        src={Two}
                        alt="Avatar"
                        priority={true}
                        unoptimized={true}
                        width={50}
                        height={50}
                        className="w-full h-full rounded-full"
                      />
                      <div className="absolute bottom-0 -right-[0.30rem] bg-yellow-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[2px]">
                      <h5 className="font-semibold text-[1.1em]">
                        Partnership opportunity for Frank
                      </h5>
                      <p className="font-normal">
                        Frank - $500,000 - 12 days to close
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 p-[0.4rem] relative bg-gradient-to-r from-blue-100/60 to-blue-50/80 rounded-md">
                    {" "}
                    <div className="w-[2em] h-[2.9em] bg-white absolute top-0 right-0 grid place-content-center rounded-bl-xl">
                      {" "}
                      <div className="w-4 h-4">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                        >
                          <path
                            d="M3.74984 18.3332V14.1665M3.74984 5.83317V1.6665M1.6665 3.74984H5.83317M1.6665 16.2498H5.83317M10.8332 2.49984L9.38802 6.25722C9.15301 6.86825 9.03551 7.17376 8.85278 7.43074C8.69083 7.6585 8.49184 7.8575 8.26408 8.01945C8.00709 8.20217 7.70158 8.31968 7.09055 8.55469L3.33317 9.99984L7.09056 11.445C7.70158 11.68 8.00709 11.7975 8.26408 11.9802C8.49184 12.1422 8.69083 12.3412 8.85278 12.5689C9.03551 12.8259 9.15301 13.1314 9.38802 13.7425L10.8332 17.4998L12.2783 13.7425C12.5133 13.1314 12.6308 12.8259 12.8136 12.5689C12.9755 12.3412 13.1745 12.1422 13.4023 11.9802C13.6592 11.7975 13.9648 11.68 14.5758 11.445L18.3332 9.99984L14.5758 8.55469C13.9648 8.31968 13.6592 8.20217 13.4023 8.01945C13.1745 7.8575 12.9755 7.6585 12.8136 7.43074C12.6308 7.17376 12.5133 6.86825 12.2783 6.25722L10.8332 2.49984Z"
                            stroke="#4338ca"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2">
                      <svg
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Copilot</title>
                        <defs>
                          <radialGradient
                            cx="85.44%"
                            cy="100.653%"
                            fx="85.44%"
                            fy="100.653%"
                            gradientTransform="scale(-.8553 -1) rotate(50.927 2.041 -1.946)"
                            id="lobe-icons-copilot-fill-0"
                            r="105.116%"
                          >
                            <stop offset="9.6%" stopColor="#00AEFF"></stop>
                            <stop offset="77.3%" stopColor="#2253CE"></stop>
                            <stop offset="100%" stopColor="#0736C4"></stop>
                          </radialGradient>
                          <radialGradient
                            cx="18.143%"
                            cy="32.928%"
                            fx="18.143%"
                            fy="32.928%"
                            gradientTransform="scale(.8897 1) rotate(52.069 .193 .352)"
                            id="lobe-icons-copilot-fill-1"
                            r="95.612%"
                          >
                            <stop offset="0%" stopColor="#FFB657"></stop>
                            <stop offset="63.4%" stopColor="#FF5F3D"></stop>
                            <stop offset="92.3%" stopColor="#C02B3C"></stop>
                          </radialGradient>
                          <radialGradient
                            cx="82.987%"
                            cy="-9.792%"
                            fx="82.987%"
                            fy="-9.792%"
                            gradientTransform="scale(-1 -.9441) rotate(-70.872 .142 1.17)"
                            id="lobe-icons-copilot-fill-4"
                            r="140.622%"
                          >
                            <stop offset="6.6%" stopColor="#8C48FF"></stop>
                            <stop offset="50%" stopColor="#F2598A"></stop>
                            <stop offset="89.6%" stopColor="#FFB152"></stop>
                          </radialGradient>
                          <linearGradient
                            id="lobe-icons-copilot-fill-2"
                            x1="39.465%"
                            x2="46.884%"
                            y1="12.117%"
                            y2="103.774%"
                          >
                            <stop offset="15.6%" stopColor="#0D91E1"></stop>
                            <stop offset="48.7%" stopColor="#52B471"></stop>
                            <stop offset="65.2%" stopColor="#98BD42"></stop>
                            <stop offset="93.7%" stopColor="#FFC800"></stop>
                          </linearGradient>
                          <linearGradient
                            id="lobe-icons-copilot-fill-3"
                            x1="45.949%"
                            x2="50%"
                            y1="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#3DCBFF"></stop>
                            <stop
                              offset="24.7%"
                              stopColor="#0588F7"
                              stopOpacity="0"
                            ></stop>
                          </linearGradient>
                          <linearGradient
                            id="lobe-icons-copilot-fill-5"
                            x1="83.507%"
                            x2="83.453%"
                            y1="-6.106%"
                            y2="21.131%"
                          >
                            <stop offset="5.8%" stopColor="#F8ADFA"></stop>
                            <stop
                              offset="70.8%"
                              stopColor="#A86EDD"
                              stopOpacity="0"
                            ></stop>
                          </linearGradient>
                        </defs>
                        <g fill="none" fillRule="nonzero">
                          <path
                            d="M17.533 1.829A2.528 2.528 0 0015.11 0h-.737a2.531 2.531 0 00-2.484 2.087l-1.263 6.937.314-1.08a2.528 2.528 0 012.424-1.833h4.284l1.797.706 1.731-.706h-.505a2.528 2.528 0 01-2.423-1.829l-.715-2.453z"
                            fill="url(#lobe-icons-copilot-fill-0)"
                            transform="translate(0 1)"
                          ></path>
                          <path
                            d="M6.726 20.16A2.528 2.528 0 009.152 22h1.566c1.37 0 2.49-1.1 2.525-2.48l.17-6.69-.357 1.228a2.528 2.528 0 01-2.423 1.83h-4.32l-1.54-.842-1.667.843h.497c1.124 0 2.113.75 2.426 1.84l.697 2.432z"
                            fill="url(#lobe-icons-copilot-fill-1)"
                            transform="translate(0 1)"
                          ></path>
                          <path
                            d="M15 0H6.252c-2.5 0-4 3.331-5 6.662-1.184 3.947-2.734 9.225 1.75 9.225H6.78c1.13 0 2.12-.753 2.43-1.847.657-2.317 1.809-6.359 2.713-9.436.46-1.563.842-2.906 1.43-3.742A1.97 1.97 0 0115 0"
                            fill="url(#lobe-icons-copilot-fill-2)"
                            transform="translate(0 1)"
                          ></path>
                          <path
                            d="M15 0H6.252c-2.5 0-4 3.331-5 6.662-1.184 3.947-2.734 9.225 1.75 9.225H6.78c1.13 0 2.12-.753 2.43-1.847.657-2.317 1.809-6.359 2.713-9.436.46-1.563.842-2.906 1.43-3.742A1.97 1.97 0 0115 0"
                            fill="url(#lobe-icons-copilot-fill-3)"
                            transform="translate(0 1)"
                          ></path>
                          <path
                            d="M9 22h8.749c2.5 0 4-3.332 5-6.663 1.184-3.948 2.734-9.227-1.75-9.227H17.22c-1.129 0-2.12.754-2.43 1.848a1149.2 1149.2 0 01-2.713 9.437c-.46 1.564-.842 2.907-1.43 3.743A1.97 1.97 0 019 22"
                            fill="url(#lobe-icons-copilot-fill-4)"
                            transform="translate(0 1)"
                          ></path>
                          <path
                            d="M9 22h8.749c2.5 0 4-3.332 5-6.663 1.184-3.948 2.734-9.227-1.75-9.227H17.22c-1.129 0-2.12.754-2.43 1.848a1149.2 1149.2 0 01-2.713 9.437c-.46 1.564-.842 2.907-1.43 3.743A1.97 1.97 0 019 22"
                            fill="url(#lobe-icons-copilot-fill-5)"
                            transform="translate(0 1)"
                          ></path>
                        </g>
                      </svg>
                      <p className="text-[0.9em] font-semibold">
                        Prepare me for Frank stakeholder meeting
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-indigo-600 text-[0.9em] font-semibold">
                    Show all key activities
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Table />
        </div>
        {/* SideBar */}
        <SideBar />
      </div>
    </>
  );
};

export default Main;
