import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactSection = () => {
    return (

        <section className="min-h-screen text-black dark:text-white bg-white dark:bg-zinc-900  px-6 md:px-20 py-20 flex items-center justify-center">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">


                {/* Right Side - Info */}
                <div>
                    <h2 className="text-4xl mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300">
                        Let's Connect
                    </h2>
                    <p className="text-black dark:text-gray-400 mb-10">
                        Have a project in mind or just want to say hi? Reach out via any of the ways below.
                    </p>

                    <div className="space-y-5">
                        <div className="flex items-center gap-4">
                            <EmailIcon className="text-blue-400" />
                            <span className="text-black dark:text-gray-300">cutsography@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <PhoneIcon className="text-blue-400" />
                            <span className="text-black dark:text-gray-300">+91 76397 45890</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <LocationOnIcon className="text-blue-400" />
                            <span className="text-black dark:text-gray-300">Chennai, India</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <InstagramIcon className="text-blue-400" />
                            <a
                                href="https://instagram.com/rishikesh"
                                className="text-black dark:text-gray-300 hover:text-blue-400 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @rishi.cuts
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <LinkedInIcon className="text-blue-400" />
                            <a
                                href="https://www.linkedin.com/in/rishikesh-r-57ab68373"
                                className="text-black dark:text-gray-300 hover:text-blue-400 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                linkedin.com/in/rishikesh
                            </a>
                        </div>
                    </div>
                </div>

                {/* Left Side - Image */}
                <div className="flex justify-center">
                    <img
                        src="https://img.freepik.com/premium-photo/website-creator-concept-illustration_776674-870769.jpg"
                        alt="Contact Rishikesh"
                        className="w-72 md:w-96 h-[500px] rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
