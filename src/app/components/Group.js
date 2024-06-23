"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineModeEdit } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import { CiSaveDown2 } from "react-icons/ci";


const Group = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [groupName, setGroupName] = useState("Creative Sleepers Cell");
  const [isEditing, setIsEditing] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([
    "harm",
    "pay",
    "dummy",
    "sleepers",
    "epeda",
    "mattress",
  ]);

  const handlePopoverToggle = (event) => {
    const rect = event.target.getBoundingClientRect();
    const position = {
      top: rect.top + window.pageYOffset + 10, // Adjust as per your UI design
      right: rect.right + window.pageXOffset - 1, // Adjust as per your UI design
    };
    setPopoverPosition(position);
    setPopoverVisible(!popoverVisible);
  };

  const Popover = () => (
    <div className="absolute z-10 bg-white shadow-md rounded-lg p-2 right-[7%]">
      <ul>
        <li className="cursor-pointer rounded-lg hover:bg-gray-200 px-4 py-2">
          Change Member
        </li>
        <li className="cursor-pointer rounded-lg hover:bg-gray-200 px-4 py-2">
          Change Position
        </li>
        <li className="cursor-pointer rounded-lg text-red-600 hover:bg-gray-200 px-4 py-2">
          Delete Position
        </li>
        <li className="cursor-pointer rounded-lg text-red-600 hover:bg-gray-200 px-4 py-2">
          Delete Member
        </li>
      </ul>
    </div>
  );

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
                  className="text-[16px] font-semibold w-[150px] border rounded-sm px-2 outline-none"
                />
              ) : (
                <h1 className="text-[16px] font-semibold">{groupName}</h1>
              )}
              {isEditing ? (
                <button onClick={handleSaveClick}><CiSaveDown2 className="text-[25px]" /></button>
              ) : (
                <button onClick={handleEditClick}><MdOutlineModeEdit className="text-[20px]" /></button>
              )}
            </div>
            <h3 className="text-[14px] font-light">Create date: 19 Jun 2024</h3>
          </div>
      </div>
      
      {/* Group type */}
      <div className="pt-3 px-2">
        <p className="py-2 text-[13px] font-semibold">Group type</p>
        <input
          type="text"
          placeholder="Data Team"
          className="w-full p-2 bg-[#f9fcfd] text-[13px] border-gray-400 border outline-none rounded-md"
        />
      </div>

      {/* Purpose */}
      <div className="pt-3 px-2">
        <p className="py-2 text-[13px] font-semibold">Purpose</p>
        <textarea
          type="text"
          cols={1}
          rows={3}
          placeholder="Connecting people and ideas but also making sure they go to sleep afterwards"
          className="w-full p-2 bg-[#f9fcfd] text-[13px] border-gray-400 border outline-none rounded-md"
        />
      </div>
      
      {/* Parent Group */}
      <div className="pt-3 px-2">
        <p className="py-2 text-[13px] font-semibold">Parent Group</p>
        <select
          placeholder="select..."
          className="w-full p-2 bg-[#f9fcfd] text-[13px] border-gray-400 border outline-none rounded-md"
        >
          <option>I dont know</option>
          <option>What</option>
          <option>to Write</option>
        </select>
      </div>

      {/* Group responsible for */}
      <div className="pt-3 px-2">
        <p className="py-2 text-[13px] font-semibold">Group responsible for</p>
        <input
          type="text"
          placeholder="Add a tag..."
          value={tagInput}
          onChange={handleTagInputChange}
          onKeyDown={handleKeyDown}
          className="w-full p-2 bg-[#f9fcfd] text-[13px] border-gray-400 border outline-none rounded-md"
        />
        <div className="flex flex-wrap gap-2 py-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-[13px] text-purple-800 cursor-pointer bg-purple-200 rounded-lg py-1 px-3"
            >
              <span>{tag}</span>
              <button onClick={() => handleDeleteTag(index)}>
                <RxCross2 />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Unfulfilled Positions */}
      <div className="text-[13px] pt-3 px-2">
        <p className="font-bold">Unfulfilled Positions (3)</p>
        <div className=" pt-3 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <button className="text-gray-600 text-2xl flex items-center justify-center border rounded-full border-dashed border-gray-600 w-10 h-10">
              +
            </button>
            <div>
              <p className="font-semibold">Assign Group Member</p>
              <p className="text-gray-600">Data team#2 - #Strategist</p>
            </div>
          </div>
          <button className="text-red-600">Delete</button>
        </div>
        <div className=" pt-3 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <button className="text-gray-600 text-2xl flex items-center justify-center border rounded-full border-dashed border-gray-600 w-10 h-10">
              +
            </button>
            <div>
              <p className="font-semibold">Assign Group Member</p>
              <p className="text-gray-600">Data team#4 - #Developer</p>
            </div>
          </div>
          <button className="text-red-600">Delete</button>
        </div>
        <div className=" pt-3 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <button className="text-gray-600 text-2xl flex items-center justify-center border rounded-full border-dashed border-gray-600 w-10 h-10">
              +
            </button>
            <div>
              <p className="font-semibold">Assign Group Member</p>
              <p className="text-gray-600">Data team#0 - #Executive</p>
            </div>
          </div>
          <button className="text-red-600">Delete</button>
        </div>

        <button className="text-purple-600  py-3   gap-3">
          <div className="flex items-center gap-3">
            <p className="text-xl ">+</p>
            <p className="pt-1">Add new position</p>
          </div>
        </button>
      </div>

      {/* Members */}
      <div className="flex flex-col border border-gray-200 bg-white w-full shadow-md rounded-lg overflow-hidden">
        <div className="flex-1 overflow-x-auto w-full">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="bg-gray-200 text-gray-600  leading-normal">
                <th className="py-3 px-6 text-left">Member</th>
                <th className="py-3 px-6 text-left">Position</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 font-light">
              {/* Data One */}
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-8 px-4 flex gap-2 items-center text-left whitespace-nowrap">
                  <Image src='/1.png' alt="Profile" width={40} height={40} className="rounded-full" />
                  <div>
                    <p className="text-[14px] font-semibold">Staff #142</p>
                    <p className="text-[12px]">staff142@orgx.com</p>
                  </div>
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex justify-between text-[13px] font-medium">
                    Data team#1-#Specialist
                    <TbDotsVertical className="text-black cursor-pointer" />
                  </div>
                </td>
              </tr>
              {/* Data Two */}
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-8 px-4 flex gap-2 items-center  text-left whitespace-nowrap">
                  <Image src='/1.png' alt="Profile" width={40} height={40} className="rounded-full" />
                  <div>
                    <p className="text-[14px] font-semibold">Staff #142</p>
                    <p className="text-[12px]">staff142@orgx.com</p>
                  </div>
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex justify-between text-[13px] font-medium">
                    Data team#1-#Specialist
                    <TbDotsVertical className="text-black cursor-pointer" />
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

export default Group;
