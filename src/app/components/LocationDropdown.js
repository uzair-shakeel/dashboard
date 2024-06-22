"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io';

const LocationDropdown = () => {
    const [isLocation, setIsLocation] = useState(false);
    const [selectedLocation, setSelectedOption] = useState('Location');

    const locationDropdown = () => {
      setIsLocation(!isLocation);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsLocation(false);
    };
  return (
    <div>
      <div className="relative inline-block text-left">
        <button className="flex items-center gap-[6px] w-[126px] bg-[#F3F3F3] px-[9px] py-[5px] rounded-[8px] text-[#111111]" onClick={locationDropdown} >
          <Image src="/assets/location.svg" alt="Location" width={15} height={15}/>
          <span className="text-[14px] leading-[17px] font-normal">
            {selectedLocation}
          </span>
          <IoIosArrowDown className="ml-[12px] text-[12px]" />
        </button>

        {isLocation && (
          <div className="absolute mt-2 w-[126px] rounded-[8px] bg-white shadow-lg z-30">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]"onClick={() => handleOptionClick("Option 1")}>Option 1</li>
              <li className="px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]"onClick={() => handleOptionClick("Option 2")}>Option 2</li>
              <li className="px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]"onClick={() => handleOptionClick("Option 3")}>Option 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationDropdown;
