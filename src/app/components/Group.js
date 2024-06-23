'use client'
import Image from "next/image";
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineModeEdit } from "react-icons/md";

const Group = () => {
  const [groupName, setGroupName] = useState('Creative Sleepers Cell');
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  return (
    <div className="bg-white shadow-2xl border-l border-stone-300 h-[100vh] w-[600px] absolute top-0 right-0">
              {/* Close Button  */}
              <div className="relative p-3">
                  <button className="absolute right-3 top-3 border rounded-full  text-xl p-1 hover:bg-gray-100 transition duration-300"><RxCross2 /></button>
                  <div className="flex items-center gap-2">
                    <Image src='/14.png' alt="Group Profile" width={50} height={50} className="rounded-full border-2 border-gray-400" />
                    <div>
                    <div className='flex items-center gap-2'>
                      {isEditing ? (
                        <input
                          type="text"
                          value={groupName}
                          onChange={handleInputChange}
                          className='text-[14px]'
                        />
                        ) : (
                          <h1>{groupName}</h1>
                        )}
                        {isEditing ? (
                          <button onClick={handleSaveClick}>Save</button>
                        ) : (
                          <button onClick={handleEditClick}><MdOutlineModeEdit /></button>
                        )}
                    </div>
                      <h3>Create date: 19 Jun 2024</h3>
                    </div>
                  </div>
              </div>
          </div>
  )
}

export default Group