/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from "react";
import { tableData as initialData } from "@/shared/tableData";

const Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filteredData, setFilteredData] = useState(initialData);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = initialData.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(query)
      )
    );
    setFilteredData(filtered);
  };

  // Handle sorting
  const handleSort = (column: string) => {
    const newOrder =
      sortedColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortedColumn(column);
    setSortOrder(newOrder);

    const sorted = [...filteredData].sort((a: any, b: any) => {
      const valueA = a[column].toString().toLowerCase();
      const valueB = b[column].toString().toLowerCase();

      if (newOrder === "asc") return valueA > valueB ? 1 : -1;
      if (newOrder === "desc") return valueA < valueB ? 1 : -1;
      return 0;
    });

    setFilteredData(sorted);
  };

  return (
    <div className="my-6 bg-white sm:p-4 px-2 py-2">
      <div className="relative lg:w-[30%] w-full mb-6">
        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={handleSearch}
          className="block w-full mt-1 outline-none border-[1px] bg-white border-[#D4DCF1] focus:border-blue-400 px-4 lg:py-[0.4rem] py-[0.5rem] rounded-md placeholder:text-gray-500 placeholder:font-medium sm:placeholder:text-sm placeholder:text-[0.84em]"
          required
          placeholder="Sort, filter and search with Copilot"
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-4 z-[5] text-gray-600">
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
                <stop offset="24.7%" stopColor="#0588F7" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="lobe-icons-copilot-fill-5"
                x1="83.507%"
                x2="83.453%"
                y1="-6.106%"
                y2="21.131%"
              >
                <stop offset="5.8%" stopColor="#F8ADFA"></stop>
                <stop offset="70.8%" stopColor="#A86EDD" stopOpacity="0"></stop>
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
      </div>
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] my-3">
        <table className="table-auto overflow-x-auto w-full divide-y divide-gray-100 text-sm">
          <thead>
            <tr className="text-[#9CA4AB] flex flex-row items-center justify-between mb-3 gap-4">
              {["name", "topic", "status", "created_at"].map((column) => (
                <th
                  key={column}
                  onClick={() =>
                    handleSort(column as keyof (typeof initialData)[0])
                  }
                  className={`${
                    column === "topic"
                      ? "w-52 text-start font-semibold flex flex-row items-center justify-start gap-2 cursor-pointer"
                      : "w-40 text-start font-semibold flex flex-row items-center justify-start gap-2 cursor-pointer"
                  }`}
                >
                  {column.charAt(0).toUpperCase() + column.slice(1)}

                  {/* Icons for Ascending and Descending */}
                  <span className="flex flex-row gap-1">
                    {/* Ascending Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`bi bi-chevron-up w-4 h-4 ${
                        sortedColumn === column && sortOrder === "asc"
                          ? "block"
                          : "hidden"
                      }`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                      />
                    </svg>

                    {/* Descending Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`bi bi-chevron-down w-4 h-4 ${
                        sortedColumn === column && sortOrder === "desc"
                          ? "block"
                          : "hidden"
                      }`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-[0.9em] divide-y divide-gray-100">
            {filteredData.map((data, index) => (
              <Fragment key={index}>
                <tr className="flex flex-row items-center justify-between py-[0.73rem] gap-3">
                  <td className="w-40 text-start">
                    <p className="font-medium flex flex-row items-center justify-start gap-2">
                      <input type="checkbox" />
                      <span className="text-blue-500">{data.name}</span>
                    </p>
                  </td>
                  <td className="w-52 text-start text-[#737373]">
                    {data.topic}
                  </td>
                  <td
                    className={`w-40 text-start ${
                      data.status === "Success"
                        ? "text-[#34CAA5]"
                        : data.status === "Failed"
                        ? "text-[#ED544E]"
                        : "text-yellow-400"
                    }`}
                  >
                    {data.status}
                  </td>
                  <td className="w-40 text-start">{data.created_at}</td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
