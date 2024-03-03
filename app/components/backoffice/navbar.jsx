import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeSwitcherBtn from '../ui/ThemeSwitcherBtn'


function Navbar ({setShowSidebar, showSidebar}) {
  return (
    <div className='flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50 h-20 px-8 py-8 fixed top-0 w-full z-50 pr-[20rem]'>
        {/* Icon */}
        <button onClick={() => setShowSidebar(!showSidebar)} className='text-green-600'><AlignJustify /></button>
        {/* 3 Icons */}
        <div className="flex space-x-3">
            <ThemeSwitcherBtn />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
                <Bell className='text-green-600' />
                <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">20</div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-white dark:bg-slate-800 rounded-xl py-2 px-4 pr-8 mr-12'>
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className='flex items-center space-x-2'>
                  <Image src='/images/profile.jpg' alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                </div>
                <div className='flex flex-col px-4'>
                  <p>Profile updated successfully</p>
                  <div className='flex items-center space-x-2'>
                    <p className='bg-green-700 px-2 py-0.5 text-white rounded-full text-sm'>Success</p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <div className='flex items-center space-x-2'>
                  <Image src='/images/profile.jpg' alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                </div>
                <div className='flex flex-col px-4'>
                  <p>Profile updated successfully</p>
                  <div className='flex items-center space-x-2'>
                    <p className='bg-green-700 px-2 py-0.5 text-white rounded-full text-sm'>Success</p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <div className='flex items-center space-x-2'>
                  <Image src='/images/profile.jpg' alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                </div>
                <div className='flex flex-col px-4'>
                  <p>Profile updated successfully</p>
                  <div className='flex items-center space-x-2'>
                    <p className='bg-green-700 px-2 py-0.5 text-white rounded-full text-sm'>Success</p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <div className='flex items-center space-x-2'>
                  <Image src='/images/profile.jpg' alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                </div>
                <div className='flex flex-col px-4'>
                  <p>Profile updated successfully</p>
                  <div className='flex items-center space-x-2'>
                    <p className='bg-green-700 px-2 py-0.5 text-white rounded-full text-sm'>Success</p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button>
                  <Image src='/images/profile.jpg' alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-white dark:bg-slate-800 rounded-xl py-2 px-4 pr-8 mr-12'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            
        </div>
    </div>
  )
}

export default Navbar