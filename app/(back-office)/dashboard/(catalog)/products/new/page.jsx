"use client"
import FormHeader from '@/app/components/backoffice/formHeader'
import ArrayItemInput from '@/app/components/backoffice/formInputs/arrayItemInput'
import ImageInput from '@/app/components/backoffice/formInputs/imageInput'
import SubmitButton from '@/app/components/backoffice/formInputs/submitButton'
import TextAreaInput from '@/app/components/backoffice/formInputs/textAreaInput'
import TextInput from '@/app/components/backoffice/formInputs/textInput'
import { makePostRequest } from '@/lib/apiRequest'
import GenerateSlug from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState()
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
    {
      id: 4,
      title: "Category 4",
    },
  ]
  const [loading, setLoading] = useState(false)
  
  const [tags, setTags] = useState(["tag1", "tag2"])
  const {register, reset, handleSubmit, formState:{errors}} = useForm()
  async function onSubmit(data){
    // -id, -title, -slug, -description, -image/images[], -sku, -barcode, -productPrice,-salePrice, -category, -tags[]
    const slug = GenerateSlug(data.title)
      data.slug = slug;
      data.imageUrl = imageUrl;
      data.tags = tags;
      console.log(data)
      makePostRequest(
        setLoading, 'api/products', data, 'Product', reset
      );
  }

  return (
    <div>
      <FormHeader title={"New Product"} />
      {/* -id, -title, -slug, -description, -image/images[], -sku, -barcode, -productPrice,-salePrice, -category, -tags[] */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl --4 bg-white border border-gray-200 rounded-lg shadow px-3 sm:px-6 md:px-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3' >
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput label={"Product Title"} name="title" register={register} errors={errors} />
        <TextInput label={"Product SKU"} name="sku" register={register} errors={errors} />
        <TextInput label={"Product Barcode"} name="barcode" register={register} errors={errors} />
        <TextInput label={"Product Price"} name="productPrice" register={register} errors={errors} type='number' />
        <TextInput label={"Product Sale Price"} name="salePrice" register={register} errors={errors} type='number' />
        {/* <SelectInput label='Select Category' name="categoryId" register={register} errors={errors} className='w-full' options={categories} /> */}
        <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='productImageUploader' label="Product Image" />
        {/* tags */}
        <ArrayItemInput setTags={setTags} tags={tags} />
        <TextAreaInput label="Product Description" name="description" register={register} errors={errors} />
        </div>
      <SubmitButton className="" isLoading={loading} buttonTitle="Create Product" loadingButtonTitle="Creating Product Please Wait..." />
      </form>
    </div>
  )
}

