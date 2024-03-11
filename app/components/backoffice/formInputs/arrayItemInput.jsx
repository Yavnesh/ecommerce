"use client"
import { Plus, X } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function ArrayItemInput({setTags, tags}) {
  const [tag, setTag] = useState("")
  const [showTagForm, setShowSetForm] = useState(false)
  function addTag(){
    if(tag.trim() != ""){
        setTags([...tags, tag])
        setTag("")
    }else{
        toast.error("Enter valid tag")
    }
  }

  function removeTag(index){
    const newTags = [...tags];
    newTags.splice(index,1)
    setTags(newTags)
  }
  return (
    <div className='sm:col-span-2'>
        {
            showTagForm ? (
                <div className="flex items-center mx-auto">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
                            </svg>
                        </div>
                        <input value={tag} onChange={(e)=>setTag(e.target.value)} type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Create Tags..." />
                    </div>
                    <button onClick={addTag} type="button" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <Plus className='w-4 h-4 me-2' />
                        Add
                    </button>
                    <button onClick={()=> setShowSetForm(false)} type="button" className="inline-flex items-center py-3 px-3 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        <X className='w-4 h-4' />
                    </button>
                </div>
            ) : (
                <div>
                    <button type='button' onClick={() => setShowSetForm(true)} className='flex items-center space-x-3 text-slate-800 dark:text-slate-300 py-2 px-4'>
                        <Plus />
                        <span>Add Tags</span>
                    </button>
                </div>
            )
        }
        <div className="flex flex-wrap gap-8 mt-4">
            {
                tags.map((item, i) => {
                    return(
                        <div key={i} className="flex space-x-2 items-center px-4 py-2 dark:bg-slate-600 dark:text-slate-300 bg-slate-200 text-slate-800 rounded-lg cursor-pointer">
                            <p>{item}</p>
                            <button onClick={() => removeTag(i)} type="button"><X className='w-4 h-4' /></button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
