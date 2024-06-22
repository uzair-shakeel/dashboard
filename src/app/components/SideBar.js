import React from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import Link from 'next/link';



const SideBar = () => {
  return (
    <div className='lg:border-r border-l-2 lg:border-l-0 border-[#E8E8E8] h-full p-3 w-full relative'>
      <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center gap-1'>
        <Image src='/assets/profile.svg' alt='Profile' width={24} height={24} />
        <h2 className='text-[14px] leading-[17px] font-medium'>Sally Potter</h2>
        <IoIosArrowDown className='text-[15px] cursor-pointer'/>
      </div>

      {/* Search & Inbox & Tasks */}
      <div className='mt-[30px] flex flex-col gap-0.5 ml-1'>
        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal'>
          <Image src='/assets/search.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          Search
        </div>
        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center justify-between gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal'>
          <div className='flex items-center gap-[10px]'>
            <Image src='/assets/inbox.svg' alt='Search' width={15} height={15} className='cursor-pointer' />Inbox
          </div>
          <h2 className='text-[#636363] text-[12px] leading-[14.52px] font-normal'>46</h2>
        </div>
        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal'>
          <Image src='/assets/tasks.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          Tasks
        </div>
      </div>

      {/* Deals */}
      <div className='mt-[30px] flex flex-col gap-0.5'>
        <div className='flex items-center gap-[10px] hover:bg-[#F3F3F3] transition duration-500 rounded-lg h-[29px] px-[5px] text-black text-[14px] leading-[17px] font-medium'>
          <Image src='/assets/deals.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          Deals
        </div>

        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center justify-between gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal'>
          <div className='flex items-center gap-[10px]'>
            <Image src='/assets/company.svg' alt='Search' width={15} height={15} className='cursor-pointer' />Companies
          </div>
          <h2 className='text-[#636363] text-[12px] leading-[14.52px] font-normal'>18 </h2>
        </div>

        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center justify-between gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal'>
          <div className='flex items-center gap-[10px]'>
            <Image src='/assets/user.svg' alt='Search' width={15} height={15} className='cursor-pointer' />People
          </div>
          <h2 className='text-[#636363] text-[12px] leading-[14.52px] font-normal'>12</h2>
        </div>

        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal'>
          <Image src='/assets/dots.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          More
        </div>
      </div>

      {/* Collections */}
      <div className='mt-[30px] flex flex-col gap-0.5 ml-1'>
        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center justify-between gap-[10px] text-[#656565] text-[14px] leading-[17px] font-normal'>
          Collections
          <Image src='/assets/dots.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
        </div>

        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 mt-[5px] flex items-center gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal cursor-pointer'>
          <Image src='/assets/product.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          Products
        </div>
        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal cursor-pointer'>
          <Image src='/assets/my-deals-flow.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          My deals flow
        </div>
        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal cursor-pointer'>
          <Image src='/assets/support.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          Support
        </div>
        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal cursor-pointer'>
          <Image src='/assets/sales.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          Sales
        </div>
        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal cursor-pointer'>
          <Image src='/assets/operations.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          Operations
        </div>
        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal cursor-pointer'>
          <Image src='/assets/partner-team.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          Partner team
        </div>
        <div className='hover:bg-[#F3F3F3] rounded-lg h-[29px] px-[5px] transition duration-500 flex items-center gap-[10px] text-[#161616] text-[14px] leading-[17px] font-normal cursor-pointer'>
          <Image src='/assets/quality.svg' alt='Search' width={15} height={15} className='cursor-pointer' />
          Quality
        </div>
      </div>

      {/* Footer */}
      <div className='mt-[250px]'>
        <div className='border border-[#E8E8E8] w-[204px] rounded-[10px] h-[53px] p-[10px] mb-[20px]'>
          <div className='flex items-center gap-2 mb-[6px]'>
            <Image src='/assets/progress.svg' alt='progress' width={15} height={15} />
            <h2 className='text-[14px] leading-[17px] font-medium'>Adding sample data</h2>
          </div>
          <h4 className='text-[#2F2F2F] text-[12px] leading-[15px]'>28 of 50 created</h4>
        </div>
        <div>
          <h2 className='flex items-center gap-1'><AiOutlinePlus /> Invite teammates</h2>
          <div className='flex items-center justify-between pt-3 pb-2'>
            <Link href='/' className='w-[28px] h-[28px] flex items-center justify-center hover:bg-[#F3F3F3] rounded-lg transition duration-500'>
              <Image src='/assets/setting.svg' alt='Logo' width={18} height={18} className='cursor-pointer '/>
            </Link>
            <Link href='/' className='w-[28px] h-[28px] flex items-center justify-center hover:bg-[#F3F3F3] rounded-lg transition duration-500'>
              <Image src='/assets/star.svg' alt='Logo' width={18} height={18} className='cursor-pointer '/>
            </Link>
            <Link href='/' className='w-[28px] h-[28px] flex items-center justify-center hover:bg-[#F3F3F3] rounded-lg transition duration-500'>
              <Image src='/assets/question.svg' alt='Logo' width={18} height={18} className='cursor-pointer '/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar