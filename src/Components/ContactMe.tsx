import { Button, Input, Textarea } from '@heroui/react'
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";

export default function ContactMe() {
    // const formRef = useRef<HTMLFormElement>(null);

    // const sendEmail = (e:React.FormEvent) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm(
    //             "service_0u831a9",
    //             "template_fk8rpxi",
    //             "knWvDrkBHqvAoNrEW"
    //         )
    //         .then(
    //             (result) => {
    //                 console.log("Message Sent!", result.text);
    //                 alert("✅ Message sent successfully!");
    //             },
    //             (error) => {
    //                 console.log("Error:", error.text);
    //                 alert("❌ Something went wrong, try again!");
    //             }
    //         );
    // };




    return (

        <section id="contact" className="py-16">
            <div className="container md:px-38">
                <h2 className=" font-bold mb-3 text-4xl text-center max-sm:text-3xl bg-gradient-to-r from-hoverElment to-thBackGround bg-clip-text text-transparent">Contact Me</h2>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Form */}
                    <div data-aos="fade-right" data-aos-mirror="true" data-aos-duration="1000" className="rounded-2xl p-6 shadow-lg">
                        <form className="flex flex-col space-y-4">
                            <Input name="name" label="Name" type="text" required />
                            <Input name="email" label="Email" type="email" required />
                            <Textarea name="message" label="Description" placeholder="Enter your description" required />
                            <Button
                                type="submit"
                                className="bg-gradient-to-r from-fBackGround to-hoverElment text-white font-semibold rounded-lg py-3 hover:opacity-90 transition"
                            >
                                Send Message
                            </Button>
                        </form>

                    </div>
                    {/* Info */}
                    <div data-aos="fade-left" data-aos-mirror="true" data-aos-duration="1000" className=" rounded-2xl p-3 text-white space-y-10 shadow-lg">
                        <div className="flex items-center space-x-2">
                            <i className="fa-solid fa-envelope text-2xl text-hoverElment" />
                            <span className="text-sm md:text-lg">mahmoud.mohamed.farouk.dev@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fa-solid fa-phone text-2xl  text-hoverElment" />
                            <span className="text-sm md:text-lg">+20 109 517 0599</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fa-solid fa-location-dot text-2xl text-hoverElment" />
                            <span className="text-sm md:text-lg">Cairo, Egypt</span>
                        </div>
                    </div>


                </div>
            </div>
        </section>

    )
}
