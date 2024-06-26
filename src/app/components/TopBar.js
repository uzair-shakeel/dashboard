"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdMenu } from "react-icons/md";
import LocationDropdown from './LocationDropdown';
import ContainDropdown from './ContainDropdown';
import TitleDropdown from './TitleDropdown';
import TableDropdown from './TableDropdown';
import SideBar from './SideBar';



const TopBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [isFilter, setIsFilter] = useState(false);

    const filterDropdown = () => {
        setIsFilter(!isFilter);
    };

  return (
    <div className='px-4'>
        <div className='h-[53px] flex items-center justify-between'>
            <h2 className='text-[#1A1A1A] text-[18px] leading-[21.78px] font-medium'>Deals</h2>
            <div className='sm:flex hidden items-center gap-3'>
                <h3 className='text-[#0E0E0E] text-[14px] leading-[17px] font-normal'>Shared with timeless</h3>
                <Image src='/assets/t.svg' alt='T' height={24} width={24} />
                <Image src='/assets/users.svg' alt='T' height={24} width={62} className='ml-1' />
                <button className='flex items-center gap-2 min-w-[100px] h-[29px] border border-[#DBDBDB] rounded-lg py-[6px] px-[8px] text-[14px] font-normal leading-[17px] '>
                    <Image src='/assets/all-apps.svg' alt='All Apps' width={15} height={15}  />
                    All apps
                </button>
                <button className='flex items-center gap-2 bg-[#171717] text-white min-w-[100px] h-[29px] border border-[#DBDBDB] rounded-lg py-[6px] px-[8px] text-[14px] font-normal leading-[17px] '>
                    <GoPlus className='text-[15px] text-white' />Add deal
                </button>
            </div>
            <div className='relative lg:hidden block'>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='z-50 relative'><MdMenu className='text-[30px] mt-1'/></button>
                <div className={`absolute right-[-20px] top-[-10px] z-40 bg-white w-80 ${isSidebarOpen ? '' : 'hidden'}`}>
                    <SideBar/>
                </div>
            </div>
        </div>

        {/* Filters etc... */}
        <div className='flex flex-col sm:flex-row items-center gap-4 justify-between py-5 md:pt-1 md:pb-3'>
            <div className='flex items-center gap-[6px]'>
                {/* Table */}
                <TableDropdown/>

                {/* Filter */}
                <div className='relative'>
                    <button
                        className='cursor-pointer relative flex items-center gap-[6px] hover:bg-[#F3F3F3] transition duration-300 rounded-lg text-[14px] px-[9px] py-[5px] leading-[17px] font-normal text-[#111111]'
                        onClick={filterDropdown}
                    >
                        <Image src='/assets/filter.svg' alt='Icon' width={15} height={15} />
                        Filter
                    </button>

                    {isFilter && (
                        <div className='shadow-custom bg-white absolute py-[12px] px-[14px] top-8 sm:left-[-100px] md:left-0 rounded-2xl border border-[#DDDDDD] z-20'>
                            <div className='flex flex-wrap sm:flex-nowrap items-center gap-2'>
                                <h3 className='ml-[16px] text-[#3C3C3C] text-[14px] leading-[17px] font-normal'>Where</h3>
                                <div className='flex flex-wrap sm:flex-nowrap items-center gap-2'>
                                    {/* Location Dropdown */}
                                    <LocationDropdown/>

                                    {/* Contain Dropdown */}
                                    <ContainDropdown/>

                                    <input type='text' placeholder='San Francisco' className=' w-[140px] border border-[#131313] px-2 rounded-lg outline-none placeholder:text-[#131313] placeholder:text-[14px]'/>
                                    <button>
                                        <Image src='/assets/dots.svg' alt='Dots' width={19} height={19} className='min-w-[19px] min-h-[19px] sm:block hidden' />
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-wrap sm:flex-nowrap md:items-center gap-2 mt-2 mb-3'>
                                <button className='flex flex-wrap sm:flex-nowrap items-center gap-[4px] bg-[#F3F3F3] px-[8px] py-[5px] rounded-[8px] text-[#111111]'>
                                    <span className='text-[14px] leading-[17px] font-normal'>And</span>
                                    <IoIosArrowDown className='text-[12px]'/>
                                </button>

                                {/* Title Dropdown */}
                                <TitleDropdown/>

                                {/* Contain Dropdown */}
                                <ContainDropdown/>

                                <input type='text' placeholder='Value' className='bg-[#F3F3F3] w-[140px] px-2 rounded-lg outline-none placeholder:text-[#6F6F6F] placeholder:text-[14px]'/>
                                <button>
                                    <Image src='/assets/dots.svg' alt='Dots' width={19} height={19} className='min-h-[19px] min-w-[19px] sm:block hidden' />
                                </button>
                            </div>

                            <div className='flex sm:flex-row flex-col gap-4 items-center justify-between'>
                                <button className='flex items-center text-[#101010] text-[14px] leading-[17px] font-normal'>
                                    <GoPlus className='text-[17px]' />Add filter
                                </button>
                                <button className='text-[#101010] text-[14px] leading-[17px] font-normal'>Delete filter</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sort */}
                <button className='flex items-center gap-[6px] hover:bg-[#F3F3F3] transition-all duration-300 rounded-lg text-[14px] px-[9px] py-[5px] leading-[17px] font-normal text-[#111111]'>
                    <Image src='/assets/sort.svg' alt='Icon' width={15} height={15} />
                    Sort
                </button>

                {/* Shared */}
                <button className='flex items-center gap-[6px] hover:bg-[#F3F3F3] rounded-lg transition-all duration-300 px-[9px] py-[5px] text-[14px] leading-[17px] font-normal text-[#0057D6]'>
                    <Image src='/assets/shared.svg' alt='Icon' width={15} height={15} />
                    Shared
                </button>
            </div>
            <div className='flex items-center gap-4'>
                <button className='flex items-center gap-[6px] text-[14px] leading-[17px] font-normal text-[#111111]'><GoPlus className='text-[15px]'/>Save as new view</button>
                <button className='flex items-center gap-[6px] text-[14px] leading-[17px] font-normal text-[#111111]'>
                    <Image src='/assets/Icon.svg' alt='Icon' width={15} height={15} />
                </button>
                <button className='text-[#111111]'>
                    <Image src='/assets/dots.svg' alt='Icon' width={15} height={15} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default TopBar