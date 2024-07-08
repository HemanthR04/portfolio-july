'use client'
import React from 'react'
import { motion } from "framer-motion"

const projectDetails = [
    {
        title: 'App Directory',
        description: 'This is a project description',
        link: ''
    },
    {
        title: 'Blendr',
        description: 'This is a project description',
        link: ''
    },
    {
        title: 'Manoah',
        description: 'This is a project description',
        link: ''
    },
    {
        title: 'Jankal',
        description: 'This is a project description',
        link: ''
    },

]


const ProjectCard = () => {
    return (
        <>

            {
                projectDetails.map((project, index) => (
                    <motion.div
                    whileHover={{ rotate: 1 }}
                        key={index} className='w-full md:min-w-[780px]  h-[260px] md:h-[440px] rounded-xl bg-secondary flex flex-col justify-end my-2'>
                        <motion.div 
                        whileHover={{ x: 20}}
                        className='py-2 my-2 text-primary'>
                            <h1 className=' font-sans font-bold text-xl md:text-5xl md:px-4 '>{project.title}</h1>
                            
                        </motion.div>
                    </motion.div>
                ))
            }
        </>

    )
}

export default ProjectCard