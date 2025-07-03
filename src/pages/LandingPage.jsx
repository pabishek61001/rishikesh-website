import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header';
import AboutSection from '../utils/AboutSection';
import ServiceSection from '../utils/ServiceSection';
import ContactSection from '../utils/ContactSection';
import Testimonials from '../components/Testimonials';

const sections = [
    { id: "home", color: "bg-zinc-100 dark:bg-zinc-900 ", text: <Hero /> },
    { id: "about", color: "bg-white dark:bg-zinc-900", text: <AboutSection /> },
    { id: "services", color: "bg-zinc-100 dark:bg-zinc-900", text: <ServiceSection /> },
    { id: "testimonials", color: "bg-white dark:bg-zinc-900", text: <Testimonials /> },
    { id: "contact", color: "bg-zinc-100 dark:bg-zinc-900", text: <ContactSection /> },

];

const LandingPage = () => {
    return (

        <div className=" transition-colors duration-300">
            <Header />
            {sections.map(section => (


                section.id !== "testimonials" ?
                    <section
                        key={section.id}
                        id={section.id}
                        className={`flex items-center justify-center ${section.color} px-6`}
                    >

                        {section.text}

                    </section>
                    :
                    <section
                        key={section.id}
                        id={section.id}
                        className={` ${section.color} px-6`}
                    >
                        {section.text}
                    </section>


            ))}

        </div>

    )
}

export default LandingPage