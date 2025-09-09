import React from 'react'
import photo from '../assets/Image-Mahmoud.jpg'

import TypeIt from "typeit-react";
export default function Hero() {
    return (

        <section id="hero">

            <div className="container md:px-38 ">
                <div className="w-full min-h-screen flex flex-col md:flex-row items-center max-sm:items-start text-white">
                    {/* Text*/}
                    <div data-aos="fade-right" data-aos-duration="1000" className="  w-full md:w-1/2  order-2 md:order-1 flex flex-col gap-4 ">
                        <p className="text-4xl text-thBackGround max-sm:mt-4 ">I am Mahmoud</p>
                        <h1 className="text-5xl max-sm:text-3xl bg-gradient-to-r from-hoverElment to-thBackGround bg-clip-text text-transparent"><TypeIt options={{ loop: "true" }} >FrontEnd Developer</TypeIt></h1>
                        <p className="text-gray-400 max-w-xl leading-relaxed max-sm:px-1">
                            Frontend Developer specializing in React.js & Next.js. Passionate about building responsive, user-friendly web applications. Currently seeking opportunities to grow and contribute as a frontend developer .
                        </p>
                        {/* Buttons */}
                        <div data-aos="fade-up" data-aos-duration="1000" className='flex gap-2'>
                            <button className=' cursor-pointer text-hoverElment hover:bg-hoverButtom hover:text-white transition-all ease-in-out border-1 border-hoverElment px-5 py-3  rounded-4xl w-fit'>Download CV<i className="fa-solid fa-download" /></button>
                            <a target='_blank' aria-label="LinkedIn Profile" href="https://www.linkedin.com/in/mahmoud-mohamed-a15559353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='text-hoverElment border-1 border-hoverElment w-12 h-12  rounded-full hover:bg-hoverButtom hover:text-white  transition-all ease-in-out flex justify-center items-center'><i className="fa-brands fa-linkedin-in  " /></a>
                            <a target='_blank' aria-label="GitHub Profile" href="https://github.com/its-mahm0ud" className='text-hoverElment border-1 border-hoverElment w-12 h-12  rounded-full hover:bg-hoverButtom hover:text-white  transition-all ease-in-out flex justify-center items-center'><i className="fa-brands fa-github " /></a>
                            <a target='_blank' aria-label="Email" href="mailto:mahmoud.mohamed.farouk.dev@gmail.com" className='text-hoverElment border-1 border-hoverElment w-12 h-12  rounded-full hover:bg-hoverButtom hover:text-white  transition-all ease-in-out flex justify-center items-center'><i className="fa-solid fa-envelope" /></a>
                            <a target='_blank' aria-label="WhatsApp" rel="noopener noreferrer" href="https://wa.me/201095170599" className='text-hoverElment border-1 border-hoverElment w-12 h-12  rounded-full hover:bg-hoverButtom hover:text-white  transition-all ease-in-out flex justify-center items-center'><i className="fa-brands fa-whatsapp" /></a>
                        </div>
                    </div>
                    {/* Image */}
                    <div data-aos="fade-left" className="order-1 md:order-2 w-2/2 md:w-1/2">
                        <div className=' relative  inline-block'>
                            <div className="absolute hidden md:block  md:-inset-4  rounded-full bg-hoverElment opacity-50 blur-3xl animate-pulse"></div>
                            <img

                                src={photo}
                                alt="ImageMahmoud"
                                className="md:rotate-6 hover:rotate-0 transition-transform duration-500 ease-in-out md:w-3/4   border-4 border-blue-900 rounded-full  object-contain mx-auto"
                            />
                            
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>

    )
}
