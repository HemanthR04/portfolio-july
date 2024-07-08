import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
    return (
        <div className='w-full h-16 flex items-center justify-between '>
            <div className='mx-4'>
                <Link href={'/'}><h1 className='text-2xl font-bold tracking-tighter px-2'>HR</h1></Link>
            </div>
        </div>
    )
}

export default NavigationBar