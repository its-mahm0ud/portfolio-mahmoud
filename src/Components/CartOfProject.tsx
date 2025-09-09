import { CardBody } from '@heroui/react'
import React from 'react'


export default function CartOfProject({ src, title, demo, altSrc, href }) {
    return (

        <div className=' relative mx-auto p-3 w-full md:w-1/2 group'>
            <img src={src} className='w-full h-full rounded-4xl' alt={altSrc} />
            <div className=" md:opacity-0 md:translate-y-4 group-hover:translate-y-0 duration-300  group-hover:opacity-100 transition-all ease-in-out  absolute bottom-12 right-3 left-3  max-sm:bottom-3 w-[90%] bg-gradient-to-r mx-auto from-purple-500 to-indigo-600 text-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-semibold"><i className=" mr-1 max-sm:rotate-0 rotate-180 group-hover:rotate-0  transition-all ease-in-out delay-100 duration-400 fa-solid fa-up-right-from-square" />{title}</h3>
                <a className=" cursor-pointer max-sm:text-purple-950 hover:text-purple-950 transition-all ease-in-out text-sm text-white/80 mt-2" href={href}><i className="mr-1 fa-solid fa-link" />{demo}</a>
            </div>
        </div>
    )
}
