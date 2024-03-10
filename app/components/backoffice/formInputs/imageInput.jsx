import { UploadDropzone } from "@uploadthing/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

export default function ImageInput({
    label,
    imageUrl = '',
    setImageUrl,
    className = 'col-span-full',
    endpoint = 'imageUploader',
}) {
  return (
    <div className={className}>
        <div className="flex items-center my-2 justify-between">
            <label htmlFor="category-image" className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2">{label}</label>
            {imageUrl && (
                <button onClick={()=>setImageUrl("")} type="button" className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-5 py-2 px-4">
                    <Pencil className="w-5 h-5" />
                    <span>Change Image</span>
                </button>
            )}
        </div>
        {imageUrl ? (
            <Image src={imageUrl} alt="item-image" width={1000} height={667} className="w-full h-64 object-contain" />
        ): (
            <UploadDropzone endpoint={endpoint} 
            onClientUploadComplete={(res) => {
                setImageUrl(res[0].url);
                // Do something with the response
                toast.success("Upload Complete")
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                // Do something with the error.
                toast.error("Upload Failed")
                alert(`ERROR! ${error.message}`);
              }}
            />
        )}
    </div>
  )
}
