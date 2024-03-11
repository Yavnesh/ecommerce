"use client"
import FormHeader from '@/app/components/backoffice/formHeader'
import ImageInput from '@/app/components/backoffice/formInputs/imageInput'
import SubmitButton from '@/app/components/backoffice/formInputs/submitButton'
import TextAreaInput from '@/app/components/backoffice/formInputs/textAreaInput'
import TextInput from '@/app/components/backoffice/formInputs/textInput'
import { makePostRequest } from '@/lib/apiRequest'
import GenerateSlug from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState()
  const [loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm()
  async function onSubmit(data){
    const slug = GenerateSlug(data.title)
      data.slug = slug;
      data.imageUrl = imageUrl;
      console.log(data)
      makePostRequest(
        setLoading, 'api/categories', data, 'Category', reset
      );
  }

  return (
    <div>
      <FormHeader title={"New Category"} />
      {/* -id, -title, -slug, -description, -image */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl --4 bg-white border border-gray-200 rounded-lg shadow px-3 sm:px-6 md:px-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3' >
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput label={"Category Title"} name="title" register={register} errors={errors} />
        <TextAreaInput label={"Category Description"} name="description" register={register} errors={errors} />
        <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='categoryImageUploader' label="Categories Image" />
        </div>
      <SubmitButton className="" isLoading={loading} buttonTitle="Create Category" loadingButtonTitle="Creating Category Please Wait..." />
      </form>
    </div>
  )
}

