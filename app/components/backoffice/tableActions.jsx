import React from 'react'
import { Download, Search, Trash2 } from "lucide-react";

export default function TableActions() {
  return (
        
      <div className="flex py-6 px-12 bg-slate-700 rounded-lg justify-between items-center gap-8">
        {/* export */}
        <button className="relative inline-flex items-center justify-center space-x-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
          <Download />
          <span>Export</span>  
        </button>
        {/* search */}
        <div class="flex-grow">
          <label hrmlFor="table-search" className="sr-only">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <Search />
              </div>
              <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full" placeholder="Search for items" />
          </div>
        </div>
        {/* bulk delete */}
        <button className="relative inline-flex items-center justify-center bg-red-600 text-white py-2.5 px-5 rounded-lg space-x-3"><Trash2 /><span>Bulk Delete</span></button>
      </div>
  );
}
