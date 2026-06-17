import { ArrowForward } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import videoEditingImg from "../images/serviceThumbnails/Video_editing.png";
import adsBannerImg from "../images/serviceThumbnails/Ads_banner.png";
import bannerImg from "../images/serviceThumbnails/banners.png";
import posterImg from "../images/serviceThumbnails/poster.png";
import thumbnailImg from "../images/serviceThumbnails/thumnail.png";
import weddingCardImg from "../images/serviceThumbnails/wedding_cards.png";

const services = [
    {
        title: "Video Editing",
        description: "Cinematic cuts, reels, promotional videos, and storytelling edits tailored for impact.",
        image: videoEditingImg, // Local image import
        link: "/portfolio/video-editing",
    },
    {
        title: "Posters ",
        description: "Unique and memorable logos that represent your brand identity.",
        image: posterImg,
        link: "/portfolio/posters",
    },
    {
        title: "Banners",
        description: "Designs and edits optimized for Instagram, YouTube, and other platforms.",
        image: bannerImg,
        link: "/portfolio/banners",
    },
    {
        title: "Ad-Banners",
        description: "Consistent visual language for your brand—from color palettes to typefaces.",
        image: adsBannerImg,
        link: "/portfolio/ad-banners",
    },
    {
        title: "Wedding Cards",
        description: "Dynamic animated visuals for intros, explainers, and transitions.",
        image: weddingCardImg,
        link: "/portfolio/wedding-cards",
    },
    {
        title: "Thumbnails",
        description: "Unique and memorable logos that represent your brand identity.",
        image: thumbnailImg,
        link: "/portfolio/thumbnails",
    },
];


const ServiceSection = () => {

    const navigate = useNavigate();

    return (
        <section id="services" className=" text-white py-20 md:px-20">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-center text-4xl mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300">
                    What I Do</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-blue-500/30 transition duration-300 border border-gray-800 hover:border-blue-400 cursor-pointer"
                            onClick={() => navigate(service.link)} // Navigate on card click
                        >
                            <div className="mb-4">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-100 h-auto object-contain rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-blue-300 outline-2 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                            <button
                                className="btn btn-primary mt-5 item-right"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent parent div click
                                    navigate(service.link);
                                }}
                            >
                                View All <ArrowForward />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceSection;
