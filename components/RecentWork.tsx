import React from 'react'
import ProjectCard from './ProjectCard'

const RecentWork = () => {
    return (
        <div className='w-full  bg-primary flex flex-col items-center justify-start '>
            <div className='my-24 md:my-12 text-center'>
                <h1 className=' font-sans font-bold text-5xl md:text-7xl tracking-[-3px]'>RECENT</h1>
                <h1 className=' text-5xl md:text-7xl font-serif font-semi '><span className='italic '> W</span>ORK</h1>
            </div>
            <div className='w-full flex flex-wrap'>
            <ProjectCard/>
            </div>
           
        </div>
    )
}

export default RecentWork