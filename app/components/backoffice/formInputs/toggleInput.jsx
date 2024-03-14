import React from 'react'

export default function ToggleInput({register, label, name, trueStatus, falseStatus}) {
    console.log("register---->", name)
  return (
    <>
        <div className='w-full flex justify-between'>
            <h2 className='text-slate-900 dark:text-slate-300'>{label}</h2>
        
            <div className='flex' >
                
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox"  className="sr-only peer" {...register(`${name}`)} />
                    <div className="relative w-11 h-6 bg-slate-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-green-600"></div>
                    <span className='ml-3 text-sm font-medium text-slate-900 dark:text-slate-100'>
                        {name ? `${trueStatus}` : `${falseStatus}`}
                    </span>
                </label>
            </div>
        </div>
    </>
  )
}
