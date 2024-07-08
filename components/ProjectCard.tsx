'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

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
            {projectDetails.map((project, index) => (
                <motion.div
                   
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                   transition={{ duration: 0.3 }}
                    key={index} className='mx-auto w-[380px] md:w-[580px]  h-full md:h-[390px] rounded-xl bg-secondary flex flex-col justify-start my-2'>
                    <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 0.98 }}>
                        <div className='w-full rounded-t-xl overflow-hidden'>
                            <Image src={'/assets/chanel1.png'} alt='Chanel' width={1000} height={100} className='w-full'></Image>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ x: 20 }}
                        className='py-2 my-2 text-primary '>
                        <h1 className='font-sans font-bold text-xl md:text-xl md:px-4 px-4'>{project.title}</h1>
                    </motion.div>
                </motion.div>
            ))}
        </>
    )
}

export default ProjectCard