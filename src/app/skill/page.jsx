import Link from 'next/link'
import React from 'react'
import PageHeader from '@/components/PageHeader'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Test from '@/components/Test'
import QuickStats from '@/components/QuickStats'


function Skillspage() {


    return (
        <>

            <PageHeader />
            <h3 className='ml-4 mt-4'>Skill Test</h3>
            <div className='flex flex-col sm:flex-row gap-5 w-full'>
                <div>
                    <div className='m-4'>
                        <Test />
                    </div>
                    <QuickStats />

                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>

                    </Card>

                </div>
                <div>right</div>
            </div>

        </>
    )
}

export default Skillspage