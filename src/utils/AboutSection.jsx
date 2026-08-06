import React from 'react';
import portfolioImg from '../images/profile/portfolio.png';
import VerifiedIcon from "@mui/icons-material/Verified";
import BrushIcon from "@mui/icons-material/Brush";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const AboutSection = () => {
    return (
        <section id="about" className="relative py-12 lg:py-30 px-2 md:px-6 text-black dark:text-white  transition-colors duration-300 w-full max-w-[1600px] mx-auto">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 lg:gap-14 items-center z-10 relative">

                {/* Left (Image / Showcase Frame - 5 Columns) */}
                <div className="md:col-span-5 relative group">

                    <div className="relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
                        <img
                            src={portfolioImg}
                            alt="Rishikesh Illustration"
                            className="w-full h-full object-cover rounded-3xl transition duration-500 group-hover:scale-105"
                        />
                        {/* Floating Glassmorphism Badge */}
                        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-medium flex items-center justify-between">
                            <span className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-ping" />
                                Cutsography
                            </span>
                            <span className="text-zinc-400">Creative Studio</span>
                        </div>
                    </div>
                </div>

                {/* Right (Text - 7 Columns) */}
                <div className="md:col-span-7 flex flex-col justify-center">

                    <h2 className="text-4xl sm:text-5xl lg:text-4xl mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300">
                        About Me
                    </h2>

                    <p className="leading-relaxed  tracking-wide text-md lg:text-lg text-black dark:text-gray-300 mb-6">
                        Hey there! I'm{" "}
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 dark:from-violet-300 dark:to-blue-300">
                            Rishikesh
                        </span>{" "}
                        — the creative mind behind Cutsography. A passionate visual designer and video editor with a sharp eye for aesthetics and detail. Over the years, I’ve helped brands, businesses, and individuals bring their ideas to life through stunning posters, ad banners, thumbnails, wedding invitations, and promotional videos.
                    </p>

                    <p className="leading-relaxed tracking-wide text-md lg:text-lg text-black dark:text-gray-300 mb-6">
                        Whether you're launching a product, celebrating a special moment, or growing your online presence, I design visuals that not only look good — but speak to your audience.
                    </p>

                    <p className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300 italic">
                        "Every pixel matters. Every frame tells a story. Let’s create something unforgettable."
                    </p>

                    {/* Highlights Metric Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 mt-10">
                        {/* Quality Focused */}
                        <div className="flex items-center sm:flex-row sm:items-start gap-3.5 p-3 sm:p-0 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 sm:bg-transparent sm:dark:bg-transparent border border-zinc-200/50 dark:border-zinc-800/50 sm:border-none">
                            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-500 shrink-0">
                                <VerifiedIcon fontSize="small" />
                            </div>
                            <div>
                                <p className="text-xl sm:text-xl font-bold text-zinc-700 dark:text-slate-300 leading-tight">
                                    100%
                                </p>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider mt-0.5">
                                    Quality Focused
                                </p>
                            </div>
                        </div>

                        {/* Visuals & Edits */}
                        <div className="flex items-center sm:flex-row sm:items-start gap-3.5 p-3 sm:p-0 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 sm:bg-transparent sm:dark:bg-transparent border border-zinc-200/50 dark:border-zinc-800/50 sm:border-none">
                            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-500 shrink-0">
                                <BrushIcon fontSize="small" />
                            </div>
                            <div>
                                <p className="text-xl sm:text-xl font-bold text-zinc-700 dark:text-slate-300 leading-tight">
                                    Visuals
                                </p>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider mt-0.5">
                                    & Edits
                                </p>
                            </div>
                        </div>

                        {/* Tailored For Brands */}
                        <div className="flex items-center sm:flex-row sm:items-start gap-3.5 p-3 sm:p-0 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 sm:bg-transparent sm:dark:bg-transparent border border-zinc-200/50 dark:border-zinc-800/50 sm:border-none">
                            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-500 shrink-0">
                                <BusinessCenterIcon fontSize="small" />
                            </div>
                            <div>
                                <p className="text-xl sm:text-xl font-bold text-zinc-700 dark:text-slate-300 leading-tight">
                                    Tailored
                                </p>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider mt-0.5">
                                    For Brands
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;