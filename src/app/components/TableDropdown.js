import { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const TableDropdown = () => {
    const [isTableOpen, setIsTableOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Table');

    const toggleDropdown = () => {
        setIsTableOpen(!isTableOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsTableOpen(false);
    };

    return (
        <div className='relative inline-block text-left'>
            <button
                className='flex items-center gap-[6px] text-[14px] pr-[9px] py-[5px] leading-[17px] font-normal text-[#111111]'
                onClick={toggleDropdown}
            >
                <Image src="/assets/table.svg" alt="Icon" width={15} height={15} />
                {selectedOption}
                {isTableOpen ? <IoIosArrowUp width={15} height={15} /> : <IoIosArrowDown width={15} height={15} />}
            </button>

            {isTableOpen && (
                <div className='absolute mt-2 w-[126px] rounded-[8px] bg-white shadow-lg z-30'>
                    <ul className='py-1'>
                        <li className='px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]' onClick={() => handleOptionClick('Table 1')}>Table 1</li>
                        <li className='px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]' onClick={() => handleOptionClick('Table 2')}>Table 2</li>
                        <li className='px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]' onClick={() => handleOptionClick('Table 3')}>Table 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TableDropdown;
