/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import Outlook from "@/public/assets/icons/outlook.svg";
import { popUpItem } from "@/shared/popUpData";
import Select from "react-select";

interface IPopUp {
  cancel: () => void;
}

const PopUp = (props: IPopUp) => {
  const [emails, setEmails] = useState<any>([]);
  const emailList = [
    { value: "purchasing@contoso.com", label: "purchasing@contoso.com" },
    { value: "mixon@contoso.com", label: "Mixon@contoso.com" },
    { value: "deli@contoso.com", label: "deli@contoso.com" },
    { value: "jameswilliams@contoso.com", label: "jameswilliams@contoso.com" },
    { value: "sarahwalker@contoso.com", label: "sarahwalker@contoso.com" },
    { value: "biancamills@contoso.com", label: "biancamills@contoso.com" },
  ];

  const handleEmailsAdded = (evt: any) => {
    setEmails(Array.isArray(evt) ? evt.map((x) => x.value) : []);
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
          <div className="w-full sm:p-6 p-3 bg-white cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-[44rem]">
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

            <div className="mt-6 space-y-4">
              <div className="flex flex-row items-center justify-start gap-2">
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
                <h1 className="test-sm font-semibold">Agent skill</h1>
              </div>
              <div className="shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.3)] bg-white sm:p-4 p-3 rounded-md text-sm">
                <div className="flex flex-row items-center justify-between mb-4">
                  <p className="font-semibold">
                    Check if on-hand inventory will allow all sales order to
                    ship without delay
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up w-4 h-4"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                    />
                  </svg>
                </div>

                <div className="flex flex-row items-start justify-start gap-2 lg:flex-wrap whitespace-nowrap snap-x snap-mandatory mx:auto overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                  {popUpItem.map((item, index) => (
                    <Fragment key={index}>
                      <div
                        className={`${
                          item.icon !== ""
                            ? "flex flex-row items-center justify-start gap-1 bg-blue-200/35 text-blue-500 font-medium px-[6px] py-[2px] rounded-full"
                            : "py-[2px]"
                        }`}
                      >
                        {item.icon !== "" ? (
                          <div className="w-4 h-4">{item.icon}</div>
                        ) : null}
                        <div className="">{item.text}</div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="w-[1.2em] h-[1.2em]">
                  <Image
                    src={Outlook}
                    alt="Outlook"
                    priority={true}
                    unoptimized={true}
                    width={50}
                    height={50}
                    className="w-full h-full"
                  />
                </div>
                <h2 className="test-sm font-semibold">Enable email access</h2>
              </div>
              <p className="text-sm my-3">
                Allow the agent to access email inboxes to read mail from known
                vendors
              </p>

              <div className="flex lg:flex-row flex-col flex-wrap items-start justify-between lg:gap-0 gap-3 text-sm">
                <div className="lg:w-[81%] w-full">
                  <Select
                    options={emailList}
                    placeholder="Enter emails"
                    value={emailList.filter((obj: any) =>
                      emails.includes(obj.value)
                    )} // set selected values
                    onChange={handleEmailsAdded} // assign onChange function
                    isMulti
                    isClearable
                    menuPlacement="bottom"
                    maxMenuHeight={140}
                    styles={{
                      control: (baseStyles: any) => ({
                        ...baseStyles,
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db",
                        boxShadow: "none",
                        "&:hover": {
                          border: "1px solid #818BFC",
                        },
                        fontSize: "1em",
                        width: "100%",
                      }),
                    }}
                  />
                </div>
                <button className="outline-none lg:w-[17%] sm:w-[30%] md:w-[28%] w-[50%] py-[0.55rem] bg-blue-600 text-white font-medium rounded-md">
                  Allow access
                </button>
              </div>
            </div>

            <div className="mt-28">
              <div className="flex flex-row items-center justify-end text-sm gap-3">
                <button className="outline-none px-3 py-[0.3rem] bg-gray-100 text-gray-300 rounded-md border-[1px] border-gray-100">
                  Activate
                </button>
                <button
                  onClick={props.cancel}
                  className="outline-none px-3 py-[0.3rem] bg-white font-semibold rounded-md border-[1px] border-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
