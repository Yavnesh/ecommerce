import React from 'react'

export default function TextInput({
    label, name, register, errors, isRequired= true, type="text", className="sm:col-span-2", defaultValue=""
}) {
  return (
    <div className={className}>
        <label htmlFor={name} className='block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2'>
            {label}
        </label>
        <div className='mt-2'>
            <input {...register(`${name}`, {required: isRequired})} type={type} name={name} id={name} defaultValue={defaultValue} autoComplete={name} className='block w-full rounded-md border-0 py-2 text-gray-900 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 palceholder:text-gray-400 focus:ring focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 dark:bg-transparent' placeholder={`Type the ${label.toLowerCase()}`} />
            {/* { errors[`${name}`] && (
                <span className='text-sm text-red-600'>{label} is required</span>
            )} */}
        </div>
    </div>
  )
}