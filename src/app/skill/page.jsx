import React from 'react'
import PageHeader from '@/components/PageHeader'
import Test from '@/components/Test'
import QuickStats from '@/components/QuickStats'
import Overview from '@/components/Overview'
import Syllabus from '@/components/Syllabus'
import Questions from '@/components/Questions'

function Skillspage() {


    return (
        <>

            <PageHeader />
            <h2 className='ml-4 mt-4'>Skill Test</h2>
            <div className='flex flex-col sm:flex-row gap-5 flex-grow'>
                <div>
                    <Test />
                    <QuickStats />
                    <Overview />
                </div>
                <div>
                    <div><Syllabus/></div>
                    <div><Questions/></div>
                </div>
            </div>

        </>
    )
}

export default Skillspage