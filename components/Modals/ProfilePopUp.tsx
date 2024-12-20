/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";
import { items } from "@/shared/profiles";

interface IPopUp {
  cancel: () => void;
}

const ProfilePopUp = (props: IPopUp) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = ["Engage", "Research"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="fixed top-0 left-0 inset-0 z-[25] min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
        {/* Overlay */}
        <div
          onClick={props.cancel}
          className="fixed inset-0 w-full h-full bg-black/25 cursor-pointer"
        ></div>

        {/* Modal */}
        <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
          <div className="w-full sm:p-6 px-3 py-6 cursor-default pointer-events-auto relative rounded-2xl mx-auto max-w-[55rem] border-2 border-indigo-500 bg-gradient-to-b from-[#FFFFFF] to-[#F2EFE3]">
            <button
              onClick={props.cancel}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6"
            >
              <svg
                className="h-5 w-5 cursor-pointer text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close</span>
            </button>

            <div>
              <div
                onClick={prev}
                className="absolute top-[50%] -translate-y-[50%] -left-4 cursor-pointer grid place-content-center p-[0.5rem] bg-white rounded-full border-2 border-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-compact-left fill-gray-400 stroke-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                  />
                </svg>
              </div>

              <div
                onClick={next}
                className="absolute top-[50%] -translate-y-[50%] -right-4 cursor-pointer grid place-content-center p-[0.5rem] bg-white rounded-full border-2 border-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-compact-right fill-gray-300 scale-110 stroke-gray-300"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div className="flex flex-row items-center justify-start gap-2 ms-4">
                <svg
                  height="1.2em"
                  viewBox="0 0 24 24"
                  width="1.2em"
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
                <h1 className="test-sm font-semibold">
                  Engage with {items[currentIndex].name}
                </h1>
              </div>
              <div className="shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] bg-white sm:p-4 p-3 rounded-md text-sm">
                <div className="flex flex-row items-start justify-start gap-2">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={items[currentIndex].avatar}
                      alt="Avatar"
                      priority={true}
                      unoptimized={true}
                      width={50}
                      height={50}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="absolute bottom-0 -right-[0.30rem] bg-green-500 w-3 h-3 rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-0 text-sm">
                    <h3 className="font-semibold">
                      {items[currentIndex].name}
                    </h3>
                    <div className="flex flex-row items-center justify-start gap-[0.35rem]">
                      <div>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.3333 0C22.0406 0 22.7189 0.280951 23.219 0.781048C23.719 1.28115 24 1.95942 24 2.66667V21.3333C24 22.0406 23.719 22.7189 23.219 23.219C22.7189 23.719 22.0406 24 21.3333 24H2.66667C1.95942 24 1.28115 23.719 0.781048 23.219C0.280951 22.7189 0 22.0406 0 21.3333V2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H21.3333ZM20.6667 20.6667V13.6C20.6667 12.4472 20.2087 11.3416 19.3936 10.5264C18.5784 9.71128 17.4728 9.25333 16.32 9.25333C15.1867 9.25333 13.8667 9.94667 13.2267 10.9867V9.50667H9.50667V20.6667H13.2267V14.0933C13.2267 13.0667 14.0533 12.2267 15.08 12.2267C15.5751 12.2267 16.0499 12.4233 16.3999 12.7734C16.75 13.1235 16.9467 13.5983 16.9467 14.0933V20.6667H20.6667ZM5.17333 7.41333C5.76742 7.41333 6.33717 7.17733 6.75725 6.75725C7.17733 6.33717 7.41333 5.76742 7.41333 5.17333C7.41333 3.93333 6.41333 2.92 5.17333 2.92C4.57571 2.92 4.00257 3.1574 3.57999 3.57999C3.1574 4.00257 2.92 4.57571 2.92 5.17333C2.92 6.41333 3.93333 7.41333 5.17333 7.41333ZM7.02667 20.6667V9.50667H3.33333V20.6667H7.02667Z"
                            fill="#0A66C2"
                          />
                        </svg>
                      </div>
                      <div className="w-[1px] h-4 bg-gray-400"></div>
                      <p className="text-xs -translate-x-[0.2rem]">
                        {items[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] bg-white sm:p-4 p-3 rounded-md text-sm">
                <div className="p-3 bg-blue-300/20 rounded-lg flex flex-row items-center flex-wrap lg:gap-0 gap-2 justify-between">
                  <div className="flex flex-row items-center justify-start gap-[0.4rem]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.74984 18.3332V14.1665M3.74984 5.83317V1.6665M1.6665 3.74984H5.83317M1.6665 16.2498H5.83317M10.8332 2.49984L9.38802 6.25722C9.15301 6.86825 9.03551 7.17376 8.85278 7.43074C8.69083 7.6585 8.49184 7.8575 8.26408 8.01945C8.00709 8.20217 7.70158 8.31968 7.09055 8.55469L3.33317 9.99984L7.09056 11.445C7.70158 11.68 8.00709 11.7975 8.26408 11.9802C8.49184 12.1422 8.69083 12.3412 8.85278 12.5689C9.03551 12.8259 9.15301 13.1314 9.38802 13.7425L10.8332 17.4998L12.2783 13.7425C12.5133 13.1314 12.6308 12.8259 12.8136 12.5689C12.9755 12.3412 13.1745 12.1422 13.4023 11.9802C13.6592 11.7975 13.9648 11.68 14.5758 11.445L18.3332 9.99984L14.5758 8.55469C13.9648 8.31968 13.6592 8.20217 13.4023 8.01945C13.1745 7.8575 12.9755 7.6585 12.8136 7.43074C12.6308 7.17376 12.5133 6.86825 12.2783 6.25722L10.8332 2.49984Z"
                        stroke="#4338ca"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-xs text-indigo-600">
                      {items[currentIndex].name} may be interested in upgrading
                      expresso machines for her in-store coffee shop
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-end text-xs gap-2">
                    <button className="outline-none px-2 py-[0.2rem] border-[1px] border-gray-200 bg-white rounded-[0.3rem] flex flex-row items-center justify-start gap-1 text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="bi bi-pen"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                      </svg>
                      <span>Edit</span>
                    </button>
                    <button className="outline-none px-2 py-[0.2rem] bg-indigo-700 text-white font-normal rounded-[0.3rem] border-[1px] border-indigo-700 flex flex-row items-center justify-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-send rotate-[45deg]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                      </svg>
                      <span> Approve and send</span>
                    </button>
                  </div>
                </div>

                <div className="border-l-2 border-b-[3px] border-gray-100 mt-5 text-xs">
                  {tabs.map((tab: any, index: number) => (
                    <button
                      key={index}
                      className={`flex-1 snap-center outline-none py-2 mx-3 text-center ${
                        activeTab === index
                          ? "border-b-[2px] border-blue-400"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {activeTab == 0 ? (
                  <div className="p-3">
                    <p>Engage</p>
                  </div>
                ) : (
                  <>
                    <div className="p-3 mt-4 shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] rounded-xl relative">
                      <div className="w-[2em] h-[2.5em] bg-white absolute top-0 right-2 grid place-content-center rounded-xl">
                        {" "}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
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
                      <div className="bg-gradient-to-r from-blue-100/60 to-blue-50/80 rounded-md p-4 text-xs">
                        <h4 className="text-indigo-600 font-medium">
                          Why i picked this lead
                        </h4>
                        <div className="mt-2 space-y-0">
                          <div className="flex flex-row items-center justify-start gap-1">
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Cum, ipsam. Asperiores, ratione.
                            </p>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-1">
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Cum, ipsam. Asperiores, ratione.
                            </p>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-1">
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Cum, ipsam. Asperiores, ratione.
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-row items-center justify-start gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                          <div className="px-4 py-3 shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] rounded-lg bg-white">
                            <div className="flex flex-row items-center justify-start gap-2 text-xs w-[10rem]">
                              <div className="w-10 h-10 relative bg-blue-400 rounded-full"></div>
                              <div className="flex flex-col items-start justify-start gap-1">
                                <h5 className="font-normal">Decision maker</h5>
                                <p className="text-indigo-500 font-semibold">
                                  Yes
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] rounded-lg bg-white">
                            <div className="flex flex-row items-center justify-start gap-2 text-xs w-[10rem]">
                              <div className="w-10 h-10 relative bg-green-400 rounded-full"></div>
                              <div className="flex flex-col items-start justify-start gap-1">
                                <h5 className="font-normal">
                                  Potential deal value
                                </h5>
                                <p className="text-indigo-500 font-semibold">
                                  $1M
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] rounded-lg bg-white">
                            <div className="flex flex-row items-center justify-start gap-2 text-xs w-[10rem]">
                              <div className="w-10 h-10 relative bg-yellow-400 rounded-full"></div>
                              <div className="flex flex-col items-start justify-start gap-1">
                                <h5 className="font-normal">Intent</h5>
                                <p className="text-indigo-500 font-semibold">
                                  High
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-row flex-wrap gap-3 items-center justify-between text-[0.8em]">
                        <div className="flex flex-row items-center justify-start gap-1">
                          <div className="bg-gray-100 px-[0.4rem] py-[0.4rem] rounded-md">
                            {" "}
                            <svg
                              height="0.8em"
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
                                  <stop offset="0%" stopColor="#FFB657"></stop>
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
                                  <stop offset="50%" stopColor="#F2598A"></stop>
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
                          </div>
                          <div className="bg-gray-100 px-[0.25rem] py-[0.1rem] rounded-md text-gray-500 flex flex-row items-center justify-start gap-1">
                            <svg
                              height="0.8em"
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
                                  <stop offset="0%" stopColor="#FFB657"></stop>
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
                                  <stop offset="50%" stopColor="#F2598A"></stop>
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
                            <span>1</span>
                            <span>D365 sales</span>
                          </div>
                          <div className="bg-gray-100 px-[0.25rem] py-[0.1rem] rounded-md text-gray-500">
                            +2
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-3">
                          <div className="bg-gray-100 px-[0.4rem] py-[0.2rem] rounded-md text-gray-500">
                            AI generated content may be incorrect
                          </div>

                          <div className="flex flex-row items-center justify-start gap-2">
                            <div className="w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-hand-thumbs-up w-full h-full"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                              </svg>
                            </div>
                            <div className="w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-hand-thumbs-down w-full h-full"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 mt-4 shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] rounded-xl relative">
                      <div className="flex flex-row items-center justify-between mb-2">
                        <p className="font-semibold">
                          About {items[currentIndex].name}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-chevron-down w-3 h3"
                          viewBox="0 0 14 14"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      </div>
                      <p className="text-xs">{items[currentIndex].about}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-row flex-wrap items-center justify-between lg:gap-0 gap-3 text-[0.7em]">
              <div className="text-gray-600 flex flex-row items-center justify-start gap-4">
                <span>
                  Showing {currentIndex + 1} of {totalItems}
                </span>
                <div className="w-[1px] h-5 bg-gray-300"></div>
                <span className="text-indigo-600">Show all</span>
              </div>
              <div className="absolute lg:bottom-6 bottom-8 left-[50%] -translate-x-[50%] sm:w-[4rem] w-[2.5rem] flex flex-row items-center justify-between gap-1">
                <div className="w-[5px] h-[5px] rounded-full bg-gray-400 cursor-pointer"></div>
                <div className="w-[5px] h-[5px] rounded-full bg-gray-400 cursor-pointer"></div>
                <div className="w-[5px] h-[5px] rounded-full bg-gray-400 cursor-pointer"></div>

                <div
                  className={`absolute w-6 h-[5px] rounded-full bg-blue-400 ${
                    currentIndex === 0 && "left-0"
                  } ${currentIndex === 1 && "left-[50%] -translate-x-[50%]"} ${
                    currentIndex === 2 && "right-0"
                  }`}
                ></div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-hand-thumbs-up w-full h-full"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                  </svg>
                </div>
                <div className="w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-hand-thumbs-down w-full h-full"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePopUp;
