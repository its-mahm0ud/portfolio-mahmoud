import React from 'react'
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import socialAppProject from '../assets/socialApp.png'
import CartOfProject from './CartOfProject';
import NoteApp from '../assets/NoteApp.png'
import Bookmaker from '../assets/BookMaker.png'
import Landing1 from '../assets/LandingPage1.png'
import Landing2 from '../assets/LandingPage2.png'
import Menify from '../assets/Menify.png'
import WeatherApp from '../assets/WeatherApp.png'

export default function Projects() {
    return (
        <section id='projects'>
            <div data-aos="fade-up" data-aos-mirror="true" data-aos-duration="1000"  className='container md:px-38 min-h-screen ' id='projects'>
                <div className='flex flex-col gap-4  mb-10'>
                    <h2 className="font-bold text-4xl text-center max-sm:text-3xl bg-gradient-to-r from-hoverElment to-thBackGround bg-clip-text text-transparent">All My Projects</h2>
                    <p className="text-gray-400 max-w-xl text-center max-sm:px-1 mx-auto ">
                        A selection of projects that highlight my frontend skills and passion for building modern web experiences.
                    </p>
                </div>
                <div className="flex w-full flex-col">
                    <Tabs
                        aria-label="Options"
                        variant="solid"
                        color="primary"
                        className="mx-auto rounded-full bg-black/90 p-1"
                        classNames={{
                            tabList: "gap-2 rounded-full bg-black/90 p-1",
                            cursor: "rounded-full bg-gradient-to-r from-purple-500 to-indigo-600",
                            tabContent: "group-data-[selected=true]:text-white",

                        }}
                    >
                        <Tab key="all" title="All">
                            <Card >
                                <CardBody className='bg-bgProjects' >
                                    <div className='w-full flex flex-wrap'>
                                        <CartOfProject src={socialAppProject} altSrc={"SocialMediaAppImage"} title={"Social Media App(GlowUp)"} demo={"glowup-lemon.vercel.app"} href={"https://glowup-lemon.vercel.app/"} />
                                        <CartOfProject src={NoteApp} altSrc={"NoteAppImage"} title={"Note App"} demo={"take-note-ebon.vercel.app"} href={"https://take-note-ebon.vercel.app/"} />
                                        <CartOfProject src={Menify} altSrc={"MealifyImage"} title={"Mealify"} demo={"mealify-restaurant-ruddy.vercel.app"} href={"https://mealify-restaurant-ruddy.vercel.app/"} />
                                        <CartOfProject src={WeatherApp} altSrc={"WeatherAppImage"} title={"Weather App"} demo={"weather-app-nine-eta-92.vercel.app"} href={"https://weather-app-nine-eta-92.vercel.app/"} />
                                        <CartOfProject src={Bookmaker} altSrc={"BookmakerImage"} title={"Bookmaker App"} demo={"bookmarker-eight.vercel.app"} href={"https://bookmarker-eight.vercel.app/"} />
                                        <CartOfProject src={Landing1} altSrc={"landingPageOneImage"} title={"Personal Landing Page"} demo={"daniels-landing-page.vercel.app"} href={"https://daniels-landing-page.vercel.app/"} />
                                        <CartOfProject src={Landing2} altSrc={"landingPageTwoImage"} title={"Personal Landing Page"} demo={"devfolio-landing-page.vercel.app"} href={"https://devfolio-landing-page.vercel.app/"} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>

                        <Tab key="next" title="Next.Js">
                            <Card>
                                <CardBody className='bg-bgProjects'>
                                    <div className=' w-full flex flex-wrap'>
                                        <h1 className='text-white'>Coming Soon</h1>
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>

                        <Tab key="react" title="React">
                            <Card>
                                <CardBody className='bg-bgProjects'>
                                    <div className=' w-full flex flex-wrap'>
                                        <CartOfProject src={socialAppProject} altSrc={"SocialMediaAppImage"} title={"Social Media App(GlowUp)"} demo={"glowup-lemon.vercel.app"} href={"https://glowup-lemon.vercel.app/"} />
                                        <CartOfProject src={NoteApp} altSrc={"NoteAppImage"} title={"Note App"} demo={"take-note-ebon.vercel.app"} href={"https://take-note-ebon.vercel.app/"} />
                                        <CartOfProject src={Menify} altSrc={"MealifyImage"} title={"Mealify"} demo={"mealify-restaurant-ruddy.vercel.app"} href={"https://mealify-restaurant-ruddy.vercel.app/"} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>

                        <Tab key="js" title="JS">
                            <Card>
                                <CardBody className='bg-bgProjects'>
                                    <div className=' w-full flex flex-wrap'>
                                        <CartOfProject src={WeatherApp} altSrc={"WeatherAppImage"} title={"Weather App"} demo={"weather-app-nine-eta-92.vercel.app"} href={"https://weather-app-nine-eta-92.vercel.app/"} />
                                        <CartOfProject src={Bookmaker} altSrc={"BookmakerImage"} title={"Bookmaker App"} demo={"bookmarker-eight.vercel.app"} href={"https://bookmarker-eight.vercel.app/"} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="htmlcss" title="HTML&CSS">
                            <Card>
                                <CardBody className='bg-bgProjects'>
                                    <div className='w-full flex flex-wrap'>
                                        <CartOfProject src={Landing1} altSrc={"landingPageOneImage"} title={"Personal Landing Page"} demo={"daniels-landing-page.vercel.app"} href={"https://daniels-landing-page.vercel.app/"} />
                                        <CartOfProject src={Landing2} altSrc={"landingPageTwoImage"} title={"Personal Landing Page"} demo={"devfolio-landing-page.vercel.app"} href={"https://devfolio-landing-page.vercel.app/"} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>

                </div>
            </div>
        </section>
    )
}
