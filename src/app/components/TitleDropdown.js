import { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';

const TitleDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Title');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className='relative inline-block text-left'>
            <button
                className='flex items-center w-[126px] justify-between gap-[6px] bg-[#F3F3F3] px-[9px] py-[5px] rounded-[8px] text-[#111111]'
                onClick={toggleDropdown}
            >
                <div className='flex items-center gap-[6px]'>
                    <Image src='/assets/title.svg' alt='Location' width={15} height={15} />
                    <span className='text-[14px] leading-[17px] font-normal'>{selectedOption}</span>
                </div>
                <IoIosArrowDown className=' text-[12px]' />
            </button>

            {isOpen && (
                <div className='absolute mt-2 w-[126px] rounded-[8px] bg-white shadow-lg z-30'>
                    <ul className='py-1'>
                        <li className='px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]' onClick={() => handleOptionClick('Title 1')}>Title 1</li>
                        <li className='px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]' onClick={() => handleOptionClick('Title 2')}>Title 2</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TitleDropdown;
