"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect  } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineModeEdit } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import { CiSaveDown2 } from "react-icons/ci";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { RiArrowUpDownLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import MemberManage from "./MemberManage";


const Panel = () => {
  const [groupName, setGroupName] = useState("Creative Sleepers Cell");
  const [isEditing, setIsEditing] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState(["harm", "pay", "dummy", "sleepers", "epeda", "mattress",]);

  const handleInputChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission on Enter key press
      handleAddTag();
    }
  };

  const handleDeleteTag = (tagIndex) => {
    const updatedTags = tags.filter((_, index) => index !== tagIndex);
    setTags(updatedTags);
  };


  const [openPopup, setOpenPopup] = useState(null); // Track the currently open popup

  // Toggle function for popup one
  const togglePopup = (id) => {
    if (openPopup === id) {
      setOpenPopup(null); // Close the popup if it's already open
    } else {
      setOpenPopup(id); // Open the selected popup
    }
  };



  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'americas', label: 'Americas' },
    { value: 'dach', label: 'DACH' },
    { value: 'south-europe', label: 'South Europe' },
  ];

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm('');
  };


  const handleClear = () => {
    setSelectedOption(null);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mt-14 sm:mt-0 px-2">
          <Image
            src="/14.png"
            alt="Group Profile"
            width={50}
            height={50}
            className="rounded-full border-2 border-gray-400"
          />
          <div>
            <div className="flex items-center gap-2">
              {isEditing ? (
                <input
                  type="text"
                  value={groupName}
                  onChange={handleInputChange}
                  className="text-[16px] font-medium text-[#1A1A1A] border rounded-lg px-2 outline-none"
                />
              ) : (
                <h1 className="text-[16px] font-medium text-[#1A1A1A]">{groupName}</h1>
              )}
              {isEditing ? (
                <button onClick={handleSaveClick}><CiSaveDown2 className="text-[25px] text-[#6C6C6C]" /></button>
              ) : (
                <button onClick={handleEditClick}><MdOutlineModeEdit className="text-[20px] text-[#6C6C6C]" /></button>
              )}
            </div>
            <h3 className="text-[14px] font-light">Create date: 19 Jun 2024</h3>
          </div>
      </div>
      
      {/* Group type */}
      <div className="pt-2 px-2">
        <p className="py-2 text-[14px] font-medium text-[#1A1A1A]">Group type</p>
        <h2 className="w-full p-2 bg-[#F3F3F3] text-[14px] border border-[#DBDBDB] outline-none rounded-md">Data Team</h2>
      </div>

      {/* Purpose */}
      <div className="pt-2 px-2">
        <p className="py-2 text-[14px] font-medium text-[#1A1A1A]">Purpose</p>
        <textarea
          type="text"
          cols={1}
          rows={3}
          placeholder="Connecting people and ideas but also making sure they go to sleep afterwards"
          className="w-full p-2 bg-[#F3F3F3] text-[14px] border-[#DBDBDB] border outline-none rounded-md resize-none placeholder:text-[14px]"
        />
      </div>
      
      {/* Parent Group */}
      <div className="relative w-full pt-2 px-2">
      <p className="py-2 text-[14px] font-medium text-[#1A1A1A]">Parent Group</p>
        <div
          className="p-2 bg-[#F3F3F3] text-[14px] font-normal border-[#DBDBDB] border outline-none rounded-md cursor-pointer"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption.label : 'Select...'}
        </div>
        {isOpen && (
         <div>
           <div className="absolute z-10 w-[96%] sm:w-[98%] mt-1 bg-white border border-[#DBDBDB] rounded-xl">
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="py-1.5 px-2 border w-[97%] my-2 mx-2 border-[#DBDBDB] outline-none rounded-xl"
              placeholder="Search..."
            />
            <ul className="overflow-y-auto mx-2 mb-2">
              {filteredOptions.map(option => (
                <li
                  key={option.value}
                  className="py-1.5 px-2 hover:bg-[#F3F3F3] rounded-lg text-[14px] cursor-pointer"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
            <button className="px-4 pt-2 mb-2 w-full border-t border-[#DBDBDB] text-left flex items-center gap-2 text-[14px]" onClick={handleClear}><RxCross2 />Clear</button>
          </div>
         </div>
        )}
      </div>

      {/* Group responsible for */}
      <div className="pt-2 px-2">
        <p className="py-2 text-[14px] font-medium text-[#1A1A1A]">Group responsible for</p>
        <input
          type="text"
          placeholder="Add a tag..."
          value={tagInput}
          onChange={handleTagInputChange}
          onKeyDown={handleKeyDown}
          className="w-full p-2 bg-[#F3F3F3] text-[14px] border-[#DBDBDB] border outline-none rounded-md"
        />
        <div className="flex flex-wrap gap-2 py-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-[14px] text-[#1A1A1A] cursor-pointer bg-[#F3F3F3] rounded-lg py-1 px-3"
            >
              <span>{tag}</span>
              <button onClick={() => handleDeleteTag(index)}>
                <RxCross2 className=""/>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Unfulfilled Positions */}
      <div className="text-[14px] pt-2 px-2">
        <p className="text-[14px] font-medium text-[#1A1A1A]">Unfulfilled Positions (3)</p>
        <div className=" pt-3 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <button className="text-gray-600 text-2xl flex items-center justify-center border rounded-full border-dashed border-gray-600 w-8 h-8">
              +
            </button>
            <div>
              <p className="text-[#1A1A1A] font-medium text-[14px]">Assign Group Member</p>
              <p className="text-[#1A1A1A] font-normal text-[13px]">Data team#2 - #Strategist</p>
            </div>
          </div>
          <button className="text-red-600">Delete</button>
        </div>
        <div className=" pt-3 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <button className="text-gray-600 text-2xl flex items-center justify-center border rounded-full border-dashed border-gray-600 w-8 h-8">
              +
            </button>
            <div>
              <p className="text-[#1A1A1A] font-medium text-[14px]">Assign Group Member</p>
              <p className="text-[#1A1A1A] font-normal text-[13px]">Data team#4 - #Developer</p>
            </div>
          </div>
          <button className="text-red-600">Delete</button>
        </div>
        <div className=" pt-3 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <button className="text-gray-600 text-2xl flex items-center justify-center border rounded-full border-dashed border-gray-600 w-8 h-8">
              +
            </button>
            <div>
              <p className="text-[#1A1A1A] font-medium text-[14px]">Assign Group Member</p>
              <p className="text-[#1A1A1A] font-normal text-[13px]">Data team#0 - #Executive</p>
            </div>
          </div>
          <button className="text-red-600">Delete</button>
        </div>

        <button className="text-[#0057D6] py-3 gap-3">
          <div className="flex items-center gap-3">
            <p className="text-[14px]">+</p>
            <p className="pt-1 text-[14px] font-normal">Add new position</p>
          </div>
        </button>
      </div>

      {/* Members */}
      <div className="flex flex-col border border-gray-200 bg-white w-full shadow-md rounded-lg relative">
        <div className="flex-1 w-full">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="bg-[#F3F3F3] leading-normal">
                <th className="py-2 px-6 text-left font-semibold text-[14px] text-[#6C6C6C]">Member</th>
                <th className="py-2 px-6 text-left font-semibold text-[14px] text-[#6C6C6C]">Position</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 font-light">
              {/* Data One */}
              <tr className="border-b border-gray-200">
                <td className="pt-7 pb-6 px-4 flex gap-2 items-center text-left whitespace-nowrap">
                  <Image src='/1.png' alt="Profile" width={30} height={30} className="rounded-full" />
                  <div>
                    <p className="text-[14px] text-[#1A1A1A] font-medium">Staff #142</p>
                    <p className="text-[12px] text-[#1A1A1A] font-normal">staff142@orgx.com</p>
                  </div>
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex justify-between text-[13px] font-medium">
                    Data team#1-#Specialist
                    {/* popup */}
                    <div className="relative inline-block">
                      <button onClick={() => togglePopup(1)} className="text-black cursor-pointer">
                        <TbDotsVertical />
                      </button>
                      {openPopup === 1 && (
                        <div className="absolute right-0 top-5 z-50 bg-white border border-gray-300 rounded-md shadow-lg">
                          <div className="py-2 p-0.5">                           
                            <ul>
                              <li className="flex items-center gap-2 text-[12px] cursor-pointer rounded-lg hover:bg-gray-200 px-3 py-1">
                                <RiArrowUpDownLine /> Change Member
                              </li>
                              <li className="flex items-center gap-2 text-[12px] cursor-pointer rounded-lg hover:bg-gray-200 px-3 py-1">
                                <RiArrowLeftRightFill />Change Position
                              </li>
                              <li className="flex items-center gap-2 text-[12px] cursor-pointer rounded-lg text-red-600 hover:bg-gray-200 px-3 py-1">
                                <RiDeleteBin6Line />Delete Position
                              </li>
                              <li className="flex items-center gap-2 text-[12px] cursor-pointer rounded-lg text-red-600 hover:bg-gray-200 px-3 py-1">
                                <RiDeleteBin6Line /> Delete Member
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>

              {/* Data Two */}
              <tr className="border-b border-gray-200">
                <td className="pt-7 pb-6 px-4 flex gap-2 items-center text-left whitespace-nowrap">
                  <Image src='/1.png' alt="Profile" width={30} height={30} className="rounded-full" />
                  <div>
                    <p className="text-[14px] text-[#1A1A1A] font-medium">Staff #142</p>
                    <p className="text-[12px] text-[#1A1A1A] font-normal">staff142@orgx.com</p>
                  </div>
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex justify-between text-[13px] font-medium">
                    Data team#1-#Specialist
                    {/* popup */}
                    <div className="relative inline-block">
                      <button onClick={() => togglePopup(2)} className="text-black cursor-pointer">
                        <TbDotsVertical />
                      </button>
                      {openPopup === 2 && (
                        <div className="absolute right-0 top-5 z-50 bg-white border border-gray-300 rounded-md shadow-lg">
                          <div className="py-2 p-0.5">                           
                            <ul>
                              <li className="flex items-center gap-2 text-[12px] cursor-pointer rounded-lg hover:bg-gray-200 px-3 py-1">
                                <RiArrowUpDownLine /> Change Member
                              </li>
                              <li className="flex items-center gap-2 text-[12px] cursor-pointer rounded-lg hover:bg-gray-200 px-3 py-1">
                                <RiArrowLeftRightFill />Change Position
                              </li>
                              <li className="flex items-center gap-2 text-[12px] cursor-pointer rounded-lg text-red-600 hover:bg-gray-200 px-3 py-1">
                                <RiDeleteBin6Line />Delete Position
                              </li>
                              <li className="flex items-center gap-2 text-[12px] cursor-pointer rounded-lg text-red-600 hover:bg-gray-200 px-3 py-1">
                                <RiDeleteBin6Line /> Delete Member
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button className="text-red-600 border border-red-600 py-2 px-4 rounded-lg my-3 mx-2 text-[13px]">
        Delete Group
      </button>

    </div>
  );
};

export default Panel;
