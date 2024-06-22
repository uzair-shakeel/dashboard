import Image from "next/image";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <div className="flex">
        <div className="min-w-[220px]">
          <SideBar/>
        </div>
        <div>
          <TopBar/>
          <div className="overflow-x-auto max-w-[1200px] w-full mx-auto pb-5">
            <table className="min-w-[1200px] border-b border-[#DBDBDB]">
              <thead className="bg-white">
                <tr className="text-[12px] text-[#6C6C6C] font-[400] leading-[15px]">
                  <th className="px-4 py-1 border-b border-t border-[#DBDBDB] text-start">
                    <div className="my-auto h-full flex items-center ">
                      <input type="checkbox" className="h-4 w-4 my-auto rounded-none mr-2"/>
                      Title
                    </div>
                  </th>
                  <th className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center gap-2">
                      <Image src="/assets/companies.svg" alt="Companies" width={17} height={17} />
                      Companies
                    </div>
                  </th>
                  <th className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center gap-2">
                      <Image src="/assets/tags.svg" alt="Tags" width={17} height={17} />
                      Tags
                    </div>
                  </th>
                  <th className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center gap-2">
                      <Image src="/assets/people.svg" alt="Prople" width={17} height={17} />
                      People
                    </div>
                  </th>

                  <th className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center gap-2">
                      <Image src="/assets/stage.svg" alt="Stage" width={17} height={17} />
                      Stage
                    </div>
                  </th>
                  <th className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center gap-2">
                    <Image src="/assets/date.svg" alt="Close Date" width={17} height={17} />
                      Close date
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[14px]">
                  <td className="px-4 py-1 border-b border-[#DBDBDB] h-full">
                    <div className="my-auto h-full flex items-center ">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Fashion Magazine
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      D
                    </span>
                    Dropbox
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">
                      Crypto
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/1.png"
                        alt="1"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Sally Potter
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Qualified</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Mar 31</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1 h-full">
                    <div className="my-auto h-full flex items-center">
                      <input type="checkbox" className="h-4 w-4 my-auto rounded-none mr-2"/>Fashion Magazine
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">D</span>Dropbox
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">Crypto</span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img src="/2.png" alt="2" className="rounded-full h-[25px] w-[25px] mr-2"/>Selena Delgado
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#D1930D] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Qualified</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Apr 08</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1 h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Website Design
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      L
                    </span>
                    Louis Vuitton
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      SAAS
                    </span>
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">AI</span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/3.png"
                        alt="3"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Jenny Wilson
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Proposal</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">May 14</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Inspired Magazine Design
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      A
                    </span>
                    Apple Inc.
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Tech
                    </span>
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">
                      Fintech
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/4.png"
                        alt="4"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Stacy Kreed
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Qualified</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Apr 28</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Paris Gallery
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      D
                    </span>
                    Dropbox
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">
                      Crypto
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/5.png"
                        alt="5"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Liam Steel
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Won</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Jun 17</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Fashion Magazine App
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      C
                    </span>
                    Circooles
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      SAAS
                    </span>
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">AI</span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/6.png"
                        alt="6"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Robert Fox
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Won</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Aug 23</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Yellow Dreams
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      S
                    </span>
                    Spotify
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Tech
                    </span>
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">
                      Fintech
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/7.png"
                        alt="7"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Matt Daemon
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">
                        Negotiation
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">May 19</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Catwalk Photoshoot
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      N
                    </span>
                    Nike Inc.
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      CS
                    </span>
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">Tech</span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/8.png"
                        alt="8"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Daniel Kieth
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Qualified</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Apr 27</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Summer Catalog
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      C
                    </span>
                    Centered
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Partnership
                    </span>
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">Saas</span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/9.png"
                        alt="9"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Sally Potter
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Qualified</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Sep 30</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Paris Gallery
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      C
                    </span>
                    Catalog
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Tech
                    </span>
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">AI</span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/10.png"
                        alt="10"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Liam Alexander
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Qualified</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Jul 14</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Summer Catalog
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      W
                    </span>
                    Wikipedia
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Crypto
                    </span>
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      AI
                    </span>
                    <span className="rounded-md  bg-[#F3F3F3] py-1 px-2">Tech</span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/11.png"
                        alt="11"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Dianne Russell
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">
                        Contact made
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Mar 31</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Website Design
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      A
                    </span>
                    Hourglass
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      B2B
                    </span>
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Saas
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/12.png"
                        alt="12"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Savannah Nguyen
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Qualified</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Jun 12</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Inspired Magazine Design
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      O
                    </span>
                    Oracle
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      e-commerce
                    </span>
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">Saas</span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/13.png"
                        alt="13"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Chris Stone
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">
                        Contact made
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Sep 19</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Inspired Photoshoot
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      Q
                    </span>
                    Qatalog
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Tech
                    </span>
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2">
                      Crypto
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/14.png"
                        alt="14"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Darrell Steward
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">
                        Contact made
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Mar 28</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Green Art Website
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      G
                    </span>
                    GitHub
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Gaming
                    </span>
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Tech
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/15.png"
                        alt="15"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Kristin Watson
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Lost</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Aug 24</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Online Store Design
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      S
                    </span>
                    Sound Cloud
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Partnership
                    </span>
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Saas
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/16.png"
                        alt="16"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Layla Green
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">
                        Negotiation
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Aug 14</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Paris Gallery
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      A
                    </span>
                    Asana
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Tech
                    </span>
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Fintech
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/17.png"
                        alt="17"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Nathan Wallace
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">
                        Negotiation
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Oct 23</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Green Art Website
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      S
                    </span>
                    Sony
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      CS
                    </span>
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Tech
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/18.png"
                        alt="18"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Darlene Robertson
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Qualified</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Mar 25</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      Website Design
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      M
                    </span>
                    Mercedes
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Crypto
                    </span>
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Saas
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/19.png"
                        alt="19"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Kate Sharma
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Qualified</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">July 11</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="px-4 py-1  h-full border-b border-t border-[#DBDBDB] ">
                    <div className="my-auto h-full flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 my-auto rounded-none mr-2"
                      />
                      App Design
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md bg-[#F3F3F3] py-1 px-2 mr-2">
                      H
                    </span>
                    Harley Davidson
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <span className="rounded-md mr-2 bg-[#F3F3F3] py-1 px-2">
                      Crypto
                    </span>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB]  h-full ">
                    <div className="flex items-center">
                      <img
                        src="/20.png"
                        alt="20"
                        className="rounded-full h-[25px] w-[25px] mr-2"
                      />
                      Sally Potter
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">
                    <div className="flex items-center ">
                      <span className="bg-[#33B9E3] h-[6px] w-[6px] mr-2 rounded-full"></span>
                      <p className="underline-offset-[3px] underline">Qualified</p>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-[#DBDBDB] ">Oct 19</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
