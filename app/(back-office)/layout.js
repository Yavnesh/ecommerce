"use client"
import React, { useState } from 'react'
import Sidebar from '../components/backoffice/sidebar'
import Navbar from '../components/backoffice/navbar'

export default function Layout({children}) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className='flex'>
        {/* sidebar */}
        <Sidebar showSidebar = {showSidebar} setShowSidebar = {setShowSidebar} />
        
        <div className='lg:ml-60 ml-0 flex-grow bg-slate-100 min-h-screen'>
            {/* header */}
            <Navbar setShowSidebar = {setShowSidebar} showSidebar = {showSidebar} />
            <main className='p-8 bg-slate-50 dark:bg-slate-900 text-slate-50 mt-16 min-h-screen'>
                {children}
            </main>
            {/* main */}
        </div>
    </div>
  )
}

