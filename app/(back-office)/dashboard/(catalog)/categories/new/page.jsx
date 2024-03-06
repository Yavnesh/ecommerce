"use client"
import FormHeader from '@/app/components/backoffice/formHeader'
import SubmitButton from '@/app/components/backoffice/formInputs/submitButton'
import TextAreaInput from '@/app/components/backoffice/formInputs/textAreaInput'
import TextInput from '@/app/components/backoffice/formInputs/textInput'
import GenerateSlug from '@/lib/generateSlug'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function NewCategory() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  async function onSubmit(data){
    const slug = GenerateSlug(data.title)
    data.slug = slug;
    console.log(data)
  }
  return (
    <div>
      <FormHeader title={"New Category"} />
      {/* -id, -title, -slug, -description, -image */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl --4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3' >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label={"Category Title"} name="title" register={register} errors={errors} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextAreaInput label={"Category Description"} name="description" register={register} errors={errors} />
      </div>
      <SubmitButton isLoading={false} buttonTitle="Create Category" loadingButtonTitle="Creating Category Please Wait..." />
      </form>
    </div>
  )
}

