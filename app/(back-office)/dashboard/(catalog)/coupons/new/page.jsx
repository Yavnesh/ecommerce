"use client"
import FormHeader from '@/app/components/backoffice/formHeader'
import SubmitButton from '@/app/components/backoffice/formInputs/submitButton'
import TextInput from '@/app/components/backoffice/formInputs/textInput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateCouponCode } from '@/lib/generateCouponCode'
import GenerateSlug from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCoupon() {
    const [loading, setLoading] = useState(false)
    const [couponCode, setCouponCode] = useState()
    const {register, reset, watch, handleSubmit, formState:{errors}} = useForm()
    async function onSubmit(data){
        const couponCode = generateCouponCode(data.title, data.expiryDate)
      const slug = GenerateSlug(data.title)
      data.couponCode = couponCode;
      console.log(data)
      makePostRequest(
        setLoading, 'api/coupons', data, 'Coupon', reset
      );
    }
  
    return (
        <div>
        <FormHeader title={"New Coupon"} />
        {/* -id, -title, -code, -expiry date */}
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl --4 bg-white border border-gray-200 rounded-lg shadow px-3 sm:px-6 md:px-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3' >
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label={"Coupon Title"} name="title" register={register} errors={errors} />
          {/* <TextInput label={"Coupon Code"} name="couponCode" register={register} errors={errors} className="w-full" /> */}
          <TextInput label={"Coupon Expiry"} name="expiryDate" type='date' register={register} errors={errors} className="w-full" />
        </div>
        <SubmitButton className="" isLoading={loading} buttonTitle="Create Coupon" loadingButtonTitle="Creating Coupon Please Wait..." />
        </form>
      </div>
  )
}
