import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const ContainDropdown = () => {
    const [isContain, setIsContain] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Contains');

    const containDropdown = () => {
      setIsContain(!isContain);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsContain(false);
    };

    return (
        <div className='relative inline-block text-left'>
            <button
                className='flex items-center w-[115px] gap-[6px] bg-[#F3F3F3] px-[9px] py-[5px] rounded-[8px] text-[#111111]'
                onClick={containDropdown}
            >
                <span className='text-[14px] leading-[17px] font-normal'>{selectedOption}</span>
                <IoIosArrowDown className='ml-[12px] text-[12px]' />
            </button>

            {isContain && (
                <div className='absolute mt-2 w-[110px] rounded-[8px] bg-white shadow-lg z-40'>
                    <ul className='py-1'>
                        <li 
                            className='px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]'
                            onClick={() => handleOptionClick('Contain 1')}
                        >
                            Contain 1
                        </li>
                        <li 
                            className='px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]'
                            onClick={() => handleOptionClick('Contain 2')}
                        >
                            Contain 2
                        </li>
                        <li 
                            className='px-4 py-2 hover:bg-[#F3F3F3] cursor-pointer text-[14px]'
                            onClick={() => handleOptionClick('Contain 3')}
                        >
                            Contain 3
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ContainDropdown;
