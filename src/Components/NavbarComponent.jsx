import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, } from "@heroui/react";
import photo from '../assets/Image-Mahmoud.jpg'
import { useState, useEffect } from "react";


export default function NavbarComponent() {
    const [activeSection, setActiveSection] = useState("hero");





    useEffect(() => {
        const sections = document.querySelectorAll("section"); // تأكد إن كل سيكشن ليه id مطابق للـ href
        const handleScroll = () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 50) { // 60 ممكن تغيرها حسب حجم navbar
                    current = section.getAttribute("id");
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);




    return (
        <Navbar disableAnimation isBordered className="py-3  bg-linear-to-r from-fBackGround to-sBackGround">


            <NavbarBrand >
                <img className="w-8 h-8 rounded-full " src={photo} alt="" />
                <h1 className="font-bold text-2xl ms-1 text-transparent bg-clip-text
               bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
               animate-gradient">
                    &lt;Mahmoud/&gt;
                </h1>

            </NavbarBrand>



            <NavbarContent className="hidden sm:flex gap-8" justify="start">
                <NavbarItem>
                    <Link className={`text-white hover:text-blue-300 relative before:absolute before:h-0.5 before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:bg-hoverElment before:bottom-0 ${activeSection === "hero" ? "before:w-full text-blue-300 " : ""}`} href="#hero">Me</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={`text-white hover:text-blue-300 relative before:absolute before:h-0.5 before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:bg-hoverElment before:bottom-0 ${activeSection === "projects" ? "before:w-full text-blue-300 " : ""}`} href="#projects">Progects</Link>
                </NavbarItem>
                <NavbarItem >
                    <Link className={`text-white hover:text-blue-300 relative before:absolute before:h-0.5 before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:bg-hoverElment before:bottom-0 ${activeSection === "skills" ? "before:w-full text-blue-300 " : ""}`} href="#skills">Skills</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={`text-white hover:text-blue-300 relative before:absolute before:h-0.5 before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:bg-hoverElment before:bottom-0 ${activeSection === "contact" ? "before:w-full text-blue-300 " : ""}`} href="#contact">Contact</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="sm:hidden text-white" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>


            <NavbarMenu className="bg-linear-to-b from-fBackGround to-sBackGround" justify="center">
                <NavbarMenuItem className="mt-10">
                    <Link className={`text-white hover:text-blue-300 relative before:absolute before:h-0.5 before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:bg-hoverElment before:bottom-0 ${activeSection === "hero" ? "before:w-full text-blue-300 " : ""}`} href="#hero">Me</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="mt-3">
                    <Link className={`text-white hover:text-blue-300 relative before:absolute before:h-0.5 before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:bg-hoverElment before:bottom-0 ${activeSection === "projects" ? "before:w-full text-blue-300 " : ""}`} href="#projects">Projects</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="mt-3">
                    <Link className={`text-white hover:text-blue-300 relative before:absolute before:h-0.5 before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:bg-hoverElment before:bottom-0 ${activeSection === "skills" ? "before:w-full text-blue-300 " : ""}`} href="#skills">Skills</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="mt-3">
                    <Link className={`text-white hover:text-blue-300 relative before:absolute before:h-0.5 before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:bg-hoverElment before:bottom-0 ${activeSection === "contact" ? "before:w-full text-blue-300 " : ""}`} href="#contact">Contact</Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
