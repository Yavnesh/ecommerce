import { Layers, ShoppingCart } from 'lucide-react'
import React from 'react'

function SmallCard ({data}) {
    const {title, sales, iconBg, icon:Icon} = data;
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4">
        <div className="flex space-x-4">
            <div className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}>
                <Icon className='' />
            </div>
            <div className=''>
                <p>{title}</p>
                <h3 className='text-2xl font-bold'>{sales}</h3>
            </div>            
        </div>
    </div>
  )
}

export default SmallCard