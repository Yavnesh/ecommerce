import React from 'react'
import { Plus } from "lucide-react";
import Link from "next/link";
import Heading from "@/app/components/backoffice/heading";

export default function PageHeader({heading, linkTitle, href}) {
  return (
    <div className="flex items-center justify-between py-4 mb-4">
      {/* header */}
      <Heading title={heading} />
      <Link className="space-x-3 text-white bg-green-600 hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-600/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-600/55 me-2 mb-2" href={href}>
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  )
}
