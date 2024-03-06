import React from 'react'
import { X } from 'lucide-react'

export default function FormHeader({title}) {
  return (
    <div className="flex item-center justify-between py-6 px-12 bg-slate-50 text-slate-800 dark:text-slate-50 rounded-lg shadow dark:bg-slate-700">
        <h2 className='text-xl font-semibold'>{title}</h2>
        <button className=''>
          <X />
        </button>
      </div>
  )
}
