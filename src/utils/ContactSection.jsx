import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ContactSection = () => {
    return (
        <section id="contact" className="border-t border-gray-300 dark:border-gray-700 relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 w-full max-w-[1600px] mx-auto text-zinc-900 dark:text-white transition-colors duration-300 overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto z-10 relative">

                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <span className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-2 inline-block">
                        Get In Touch
                    </span>
                    <h2 className="text-center text-3xl sm:text-4xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300">
                        Let's Connect
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                        Have a project in mind or just want to say hi? Reach out directly through any of the channels below.
                    </p>
                </div>

                {/* Info Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">

                    {/* Email Card */}
                    <a
                        href="mailto:cutsography@gmail.com"
                        className="group p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-sky-500/50 transition-all duration-300 flex items-center justify-between gap-3 shadow-sm hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <div className="p-2.5 sm:p-3.5 shrink-0 rounded-xl bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                                <EmailIcon className="text-xl sm:text-2xl" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] sm:text-xs font-semibold uppercase mb-0.5 tracking-wider text-zinc-400">Email Me</p>
                                <p className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors truncate">
                                    cutsography@gmail.com
                                </p>
                            </div>
                        </div>
                        <ArrowOutwardIcon className="text-zinc-400 group-hover:text-sky-500 transition-colors text-sm shrink-0" />
                    </a>

                    {/* Phone / WhatsApp Card */}
                    <a
                        href="tel:+917639745890"
                        className="group p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-sky-500/50 transition-all duration-300 flex items-center justify-between gap-3 shadow-sm hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <div className="p-2.5 sm:p-3.5 shrink-0 rounded-xl bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                                <PhoneIcon className="text-xl sm:text-2xl" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] sm:text-xs font-semibold uppercase mb-0.5 tracking-wider text-zinc-400">Phone / WhatsApp</p>
                                <p className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors truncate">
                                    +91 76397 45890
                                </p>
                            </div>
                        </div>
                        <ArrowOutwardIcon className="text-zinc-400 group-hover:text-sky-500 transition-colors text-sm shrink-0" />
                    </a>

                    {/* Instagram Card */}
                    <a
                        href="https://www.instagram.com/cutsography"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-sky-500/50 transition-all duration-300 flex items-center justify-between gap-3 shadow-sm hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <div className="p-2.5 sm:p-3.5 shrink-0 rounded-xl bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                                <InstagramIcon className="text-xl sm:text-2xl" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] sm:text-xs font-semibold uppercase mb-0.5 tracking-wider text-zinc-400">Instagram</p>
                                <p className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors truncate">
                                    @cutsography
                                </p>
                            </div>
                        </div>
                        <ArrowOutwardIcon className="text-zinc-400 group-hover:text-sky-500 transition-colors text-sm shrink-0" />
                    </a>

                    {/* LinkedIn Card */}
                    <a
                        href="https://www.linkedin.com/in/rishikesh-r-57ab68373"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-sky-500/50 transition-all duration-300 flex items-center justify-between gap-3 shadow-sm hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <div className="p-2.5 sm:p-3.5 shrink-0 rounded-xl bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                                <LinkedInIcon className="text-xl sm:text-2xl" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] sm:text-xs font-semibold uppercase mb-0.5 tracking-wider text-zinc-400">LinkedIn</p>
                                <p className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors truncate">
                                    Rishikesh R
                                </p>
                            </div>
                        </div>
                        <ArrowOutwardIcon className="text-zinc-400 group-hover:text-sky-500 transition-colors text-sm shrink-0" />
                    </a>

                </div>

                {/* Location Footer Bar */}
                <div className="mt-6 sm:mt-8 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
                    <LocationOnIcon className="text-sky-500 text-lg sm:text-xl shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 leading-normal">
                        Based in <span className="text-zinc-900 dark:text-white font-bold">Chennai, India</span> — Available worldwide for remote work
                    </span>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;