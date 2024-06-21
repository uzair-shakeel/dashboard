import Image from "next/image";

export default function Home() {
  const rows = Array.from({ length: 25 }, (_, index) => index + 1);
  const columns = [
    "Column 1",
    "Column 2",
    "Column 3",
    "Column 4",
    "Column 5",
    "Column 6",
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dummy Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr className="text-[12px] text-[#6C6C6C] font-[400]  leading-[15px]">
              <th className="px-4 py-1 border border-gray-300 text-start">
                Title
              </th>
              <th className="px-4 py-1 border border-gray-300 ">Companies</th>
              <th className="px-4 py-1 border border-gray-300 ">Tags</th>
              <th className="px-4 py-1 border border-gray-300 ">People</th>
              <th className="px-4 py-1 border border-gray-300 ">Stage</th>
              <th className="px-4 py-1 border border-gray-300 ">Close date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[14px]">
              <td className="px-4 py-1  h-full flex items-center">
                <div className="my-auto h-full ">
                  <input
                    type="checkbox"
                    className="h-4 w-4 my-auto rounded-none mr-2"
                  />
                  Fashion Magazine
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                  D
                </span>
                Dropbox
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2">
                  Crypto
                </span>
              </td>
              <td className="px-4 py-1 flex items-center h-full ">
                <img
                  src="/1.png"
                  alt="1"
                  className="rounded-full h-[25px] w-[25px] mr-2"
                />
                Sally Potter
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <div className="flex items-center ">
                  <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                  <p className="underline-offset-[3px] underline">Qualified</p>
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">Mar 31</td>
            </tr>
            <tr className="text-[14px]">
              <td className="px-4 py-1  h-full flex items-center">
                <div className="my-auto h-full ">
                  <input
                    type="checkbox"
                    className="h-4 w-4 my-auto rounded-none mr-2"
                  />
                  Fashion Magazine
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                  D
                </span>
                Dropbox
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2">
                  Crypto
                </span>
              </td>
              <td className="px-4 py-1 flex items-center h-full ">
                <img
                  src="/1.png"
                  alt="1"
                  className="rounded-full h-[25px] w-[25px] mr-2"
                />
                Selena Delgado
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <div className="flex items-center ">
                  <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                  <p className="underline-offset-[3px] underline">Qualified</p>
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">Apr 08</td>
            </tr>
            <tr className="text-[14px]">
              <td className="px-4 py-1 border border-gray-300 h-full flex items-center">
                <div className="my-auto h-full ">
                  <input
                    type="checkbox"
                    className="h-4 w-4 my-auto rounded-none mr-2"
                  />
                  Website Design
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                  L
                </span>
                Louis Vuitton
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] mr-2 py-1 px-2">
                  SAAS
                </span>
                <span className="rounded-md  bg-[#F3F3F3] py-1 px-2">AI</span>
              </td>
              <td className="px-4 py-1 grid grid-cols-2 border border-gray-300 items-center h-full ">
                <img
                  src="/1.png"
                  alt="1"
                  className="rounded-full h-[25px] w-[25px] mr-2"
                />
                Jenny Wilson
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <div className="flex items-center ">
                  <span className="bg-[#D1930D] h-[6px] w-[6px] mr-2 rounded-full"></span>
                  <p className="underline-offset-[3px] underline">Proposal</p>
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">May 14</td>
            </tr>
            <tr className="text-[14px]">
              <td className="px-4 py-1  h-full flex items-center">
                <div className="my-auto h-full ">
                  <input
                    type="checkbox"
                    className="h-4 w-4 my-auto rounded-none mr-2"
                  />
                  Fashion Magazine
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                  D
                </span>
                Dropbox
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2">
                  Crypto
                </span>
              </td>
              <td className="px-4 py-1 flex items-center h-full ">
                <img
                  src="/1.png"
                  alt="1"
                  className="rounded-full h-[25px] w-[25px] mr-2"
                />
                Sally Potter
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <div className="flex items-center ">
                  <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                  <p className="underline-offset-[3px] underline">Qualified</p>
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">Mar 31</td>
            </tr>
            <tr className="text-[14px]">
              <td className="px-4 py-1  h-full flex items-center">
                <div className="my-auto h-full ">
                  <input
                    type="checkbox"
                    className="h-4 w-4 my-auto rounded-none mr-2"
                  />
                  Fashion Magazine
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                  D
                </span>
                Dropbox
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2">
                  Crypto
                </span>
              </td>
              <td className="px-4 py-1 flex items-center h-full ">
                <img
                  src="/1.png"
                  alt="1"
                  className="rounded-full h-[25px] w-[25px] mr-2"
                />
                Sally Potter
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <div className="flex items-center ">
                  <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                  <p className="underline-offset-[3px] underline">Qualified</p>
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">Mar 31</td>
            </tr>
            <tr className="text-[14px]">
              <td className="px-4 py-1  h-full flex items-center">
                <div className="my-auto h-full ">
                  <input
                    type="checkbox"
                    className="h-4 w-4 my-auto rounded-none mr-2"
                  />
                  Fashion Magazine
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                  D
                </span>
                Dropbox
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <span className="rounded-md bg-[#F3F3F3] py-1 px-2">
                  Crypto
                </span>
              </td>
              <td className="px-4 py-1 flex items-center h-full ">
                <img
                  src="/1.png"
                  alt="1"
                  className="rounded-full h-[25px] w-[25px] mr-2"
                />
                Sally Potter
              </td>
              <td className="px-4 py-1 border border-gray-300 ">
                <div className="flex items-center ">
                  <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                  <p className="underline-offset-[3px] underline">Qualified</p>
                </div>
              </td>
              <td className="px-4 py-1 border border-gray-300 ">Mar 31</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
