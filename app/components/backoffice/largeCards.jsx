import React from 'react'
import LargeCard from './largeCard'

function LargeCards () {
    const orderStats = [
        {
            period: "Today Orders",
            sales: 1100,
            color: "bg-green-600"
        },
        {
            period: "Yesterday Orders",
            sales: 500,
            color: "bg-blue-600"
        },
        {
            period: "This Month",
            sales: 1120,
            color: "bg-orange-600"
        },
        {
            period: "Last Month",
            sales: 5500,
            color: "bg-purple-600"
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
        {
            orderStats.map((item, i) => {
                return(
                    <LargeCard className="bg-green-600" data={item} key={i} />
                )
            })
        }
        
    </div>
  )
}

export default LargeCards