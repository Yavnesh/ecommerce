import React from 'react'
import SmallCard from './smallCard'
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react'

function SmallCards () {
    const orderStats = [
        {
            title: "Today Order",
            sales: 1100,
            iconBg: "bg-green-600",
            icon: ShoppingCart,
        },
        {
            title: "Orders Pending",
            sales: 200,
            iconBg: "bg-blue-600",
            icon: Loader2,
        },
        {
            title: "Order Processing",
            sales: 120,
            iconBg: "bg-orange-600",
            icon: RefreshCcw,
        },
        {
            title: "Order Delivered",
            sales: 500,
            iconBg: "bg-purple-600",
            icon: CheckCheck,
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
        {
            orderStats.map((data, i) => {
                return(
                    <SmallCard data={data} />
                )
            })
        }
        
    </div>
  )
}

export default SmallCards