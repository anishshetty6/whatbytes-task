import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function PageHeader() {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-900">
      <Link href={'/skills'}>
        <img src='https://cdn.prod.website-files.com/65cb431fbaab685eab1f5470/65cb445e7204d21122a75be0_WHATBYTESLOGO.png' className='h-6 top-4' alt="WhatBytes" />
      </Link>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>WB</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default PageHeader