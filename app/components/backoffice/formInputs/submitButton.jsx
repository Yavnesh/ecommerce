import { Plus } from 'lucide-react'
import React from 'react'

export default function SubmitButton({isLoading=false, buttonTitle, loadingButtonTitle}) {
  return (
    <div className='sm:col-span-1'>
        { isLoading ? (
            <button disabled type='button' className='my-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-green-800 inline-flex items-center'>
                {/* <svg aria-hidden='true' role='status' className='inline w-4 h-4 mr-3 text-white animate-spin' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg' >
                    <path
                </svg> */}
                {loadingButtonTitle}
                {/* Saving {title} Please wait... */}
            </button>
        ): (
            <button type='submit' className='inline-flex items-center px-5 py-2.5 my-4 sm:my-6 text-base space-x-2 font-medium text-center text-white rounded-lg bg-slate-900 focus:ring-4 focus:ring-slate-200 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
                <Plus />
                <span>
                    {/* Save {title} */}
                    {buttonTitle}
                    </span>
            </button>
        )}
    </div>
  )
}
