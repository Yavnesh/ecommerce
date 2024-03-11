"use client"
import { Boxes, ChevronDown, ChevronRight, LayoutGrid, LayoutList, LogOut, ScanSearch, Slack, Truck, Users2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"



export default function Sidebar ({showSidebar},{setShowSidebar}) {
  const pathName= usePathname()
  const [openMenu, setOpenMenu] = useState();
  const sidebarLinks = [
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders"
    },
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers"
    }
  ];
  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products"
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories"
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons"
    },
  ]
  return (
    <div className={showSidebar ? 'sm:block mt-20 sm:mt-0 dark:bg-slate-700 bg-white space-y-6 w-60 h-screen dark:text-slate-50 text-slate-800 fixed left-0 top-0 shadow-md' : 'hidden mt-20 sm:mt-0 sm:block dark:bg-slate-700 bg-white space-y-6 w-60 h-screen dark:text-slate-50 text-slate-800 fixed left-0 top-0 shadow-md'}>
        <Link className='px-6 text-2xl py-4' href="/dashboard" onClick={()=>setShowSidebar(false)}>E-Commerce</Link>
        <div className='space-y-3 flex flex-col mt-14'>
            <Link href="/dashboard" onClick={()=>setShowSidebar(false)} className={pathName==="/dashboard" ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600 text-green-600" : "flex items-center space-x-3 px-6 py-2"} >
              <LayoutGrid />
              <span>Dashboard</span>
            </Link>

            <Collapsible>
              <CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)}>
              <button className='flex items-center space-x-6 px-6 py-2 border-l-4 border-green-600'>
                <div className="flex items-center space-x-3">
                  <Slack />
                  <span>Catalog</span>
                </div>
                {
                  openMenu ? <ChevronDown /> : <ChevronRight />
                }
              </button>
              </CollapsibleTrigger>
              <CollapsibleContent className='px-2 py-2 dark:bg-slate-800 bg-slate-200 mx-6 rounded-md'>
              {
                catalogueLinks.map((item, i) => {
                  const Icon = item.icon;
                  return(
                    <Link key={i} onClick={()=>setShowSidebar(false)} href={item.href} className={pathName === item.href ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600 text-green-600" : "flex items-center space-x-3 px-6 py-2"}>
                      <Icon />
                      <span>{item.title}</span>
                    </Link>
                  );
                })
              }
              </CollapsibleContent>
            </Collapsible>


{/* <DropdownMenu>
  <DropdownMenuTrigger>
    
  </DropdownMenuTrigger>
  <DropdownMenuContent className='bg-white dark:bg-slate-800 rounded-xl py-2 px-4 pr-8 mr-12'>
    
  </DropdownMenuContent>
</DropdownMenu> */}



            
            {
              sidebarLinks.map((item,i) => {
                const Icon = item.icon
                return(
                  <Link key={i} onClick={()=>setShowSidebar(false)}  href={item.href} className={item.href==pathName ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600 text-green-600" : "flex items-center space-x-3 px-6 py-2"}>
                    <Icon />
                    <span>{item.title}</span>
                  </Link>
                );
              })
            }
            <div className="px-6 py-2">
              <button className='bg-green-600 rounded-md flex items-center space-x-3 px-6 py-2'>
                <LogOut />
                <span>Logout</span>
              </button>
            </div>
        </div>
    </div>
  )
}