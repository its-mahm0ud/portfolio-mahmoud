import React from 'react'
import { FaHtml5, FaReact, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
export default function Skills() {
    const skills = [
        { Icon: FaHtml5, label: "HTML", level: "95%", color: "text-gray-500", hoverColor: "group-hover:text-orange-500 max-sm:text-orange-500" },
        { Icon: FaCss3Alt, label: "CSS", level: "90%", color: "text-gray-500", hoverColor: "group-hover:text-blue-500 max-sm:text-blue-500" },
        { Icon: FaJs, label: "JavaScript", level: "88%", color: "text-gray-500", hoverColor: "group-hover:text-yellow-400 max-sm:text-yellow-400" },
        { Icon: FaReact, label: "React", level: "90%", color: "text-gray-500", hoverColor: "group-hover:text-cyan-400 max-sm:text-cyan-400" },
        { Icon: SiNextdotjs, label: "Next.js", level: "85%", color: "text-gray-500", hoverColor: "group-hover:text-black max-sm:ttext-black" },
        { Icon: SiTailwindcss, label: "TailwindCSS", level: "90%", color: "text-gray-500", hoverColor: "group-hover:text-sky-400 max-sm:text-sky-400" },
    ];

    return (
        <section id="skills" className="py-16">
            <div data-aos="zoom-in" data-aos-mirror="true" data-aos-duration="1000" className="container">
                <h2 className=" font-bold mb-3 text-4xl text-center max-sm:text-3xl bg-gradient-to-r from-hoverElment to-thBackGround bg-clip-text text-transparent">My Skills</h2>
                <p className="text-gray-400 max-w-xl text-center max-sm:px-1 mx-auto mb-5">
                    I continuously learn and explore these technologies to sharpen my skills and stay ahead in modern web development.
                </p>
                <div className="max-w-5xl gap-3 py-2 mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-col-5 md:grid-cols-6 text-white  text-center">
                    {skills.map(({ Icon, label, level, color, hoverColor }) => (
                        <div key={label}
                            className="group hover:shadow-2xl py-5 bg-sBackGround rounded-4xl transition-all flex flex-col items-center" >
                            <Icon className={`text-6xl mb-4 transition-all ease-in-out    ${color} ${hoverColor}`} />
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-hoverElment to-thBackGround bg-clip-text text-transparent "> {label}</h3>
                            <p className="text-sm bg-gradient-to-r from-hoverElment to-thBackGround bg-clip-text text-transparent ">{level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
