import React from 'react'
import Sidebar from '../components/backoffice/sidebar'
import Navbar from '../components/backoffice/navbar'

export default function Layout({children}) {
  return (
    <div className='flex'>
        {/* sidebar */}
        <Sidebar />
        
        <div className='w-full ml-60'>
            {/* header */}
            <Navbar />
            <main className='p-8 bg-slate-50 dark:bg-slate-900 text-slate-50 mt-16 min-h-screen'>
                {children}
            </main>
            {/* main */}
        </div>
    </div>
  )
}

