import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

import videoEditingImg from "../images/serviceThumbnails/Video_editing.png";
import adsBannerImg from "../images/serviceThumbnails/Ads_banner.png";
import bannerImg from "../images/serviceThumbnails/banners.png";
import posterImg from "../images/serviceThumbnails/poster.png";
import thumbnailImg from "../images/serviceThumbnails/Thumnail.png";
import weddingCardImg from "../images/serviceThumbnails/wedding_cards.png";

const services = [
    {
        title: "Video Editing",
        description: "Cinematic cuts, reels, promotional videos, and engaging storytelling edits tailored for high impact.",
        image: videoEditingImg,
        link: "/portfolio/video-editing",
    },
    {
        title: "Posters",
        description: "Eye-catching event, promotional, and brand posters designed to grab immediate visual attention.",
        image: posterImg,
        link: "/portfolio/posters",
    },
    {
        title: "Banners",
        description: "High-resolution header and cover designs optimized for YouTube, LinkedIn, and websites.",
        image: bannerImg,
        link: "/portfolio/banners",
    },
    {
        title: "Ad-Banners",
        description: "Conversion-focused promotional banner graphics crafted for digital marketing and social media campaigns.",
        image: adsBannerImg,
        link: "/portfolio/ad-banners",
    },
    {
        title: "Wedding Cards",
        description: "Elegantly customized digital wedding invitations and celebratory cards for your special moments.",
        image: weddingCardImg,
        link: "/portfolio/wedding-cards",
    },
    {
        title: "Thumbnails",
        description: "High-CTR YouTube thumbnails engineered with bold typography and vibrant visual hierarchy.",
        image: thumbnailImg,
        link: "/portfolio/thumbnails",
    },
];

const ServiceSection = () => {
    const navigate = useNavigate();

    return (
        <section id="services" className="relative py-16 px-2 md:px-6  max-w-[1600px] text-zinc-900 dark:text-white transition-colors duration-300">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className=" mx-auto z-10 relative">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400 font-bold mb-2 inline-block">
                        My Expertise
                    </span>
                    <h2 className="text-center text-4xl mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300">
                        What I Do</h2>

                </div>

                {/* Services Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(service.link)}
                            className="group relative bg-zinc-200 dark:bg-[#101828] dark:hover:bg-[#0c1322] p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-gray-400 dark:hover:border-blue-900 shadow-sm transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                        >
                            <div>
                                {/* Thumbnail Frame */}
                                <div className="mb-5 overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800 aspect-square flex items-center justify-center">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-400 group-hover:text-blue-500 dark:group-hover:text-zinc-100 transition-colors duration-200 mb-2">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-zinc-600 dark:text-zinc-500 text-xs lg:text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>

                            {/* Action Link */}
                            <div className="pt-4 border-t border-zinc-400 dark:border-zinc-700/60 flex items-center justify-between text-sm font-semibold text-grey-600 dark:text-gray-400 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-200">
                                <span>Explore Showcase</span>
                                <div className="p-1.5 rounded-full bg-blue-500/10 group-hover:bg-blue-800 group-hover:text-white transition-all duration-300">
                                    <ArrowForward className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceSection;