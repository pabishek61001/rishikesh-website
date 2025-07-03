import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ContactSection from '../utils/ContactSection';
import { ArrowBack } from "@mui/icons-material";

const portfolioData = {
    "video-editing": {
        images: [
            "https://img.freepik.com/free-photo/gamer-streaming-live_23-2151948254.jpg",
            "https://img.freepik.com/free-photo/young-man-editing-footage_23-2149102784.jpg",
            "https://img.freepik.com/free-photo/man-working-on-computer_23-2147789376.jpg",
        ],
        videos: [
            "https://www.w3schools.com/html/mov_bbb.mp4",
            "https://www.w3schools.com/html/movie.mp4",
        ],
    },
    "posters": {
        images: [
            "https://img.freepik.com/premium-psd/red-december-month-struggle-awareness-against-aids-hiv-other-stis-social-media-editable_1267017-1133.jpg",
            "https://img.freepik.com/free-photo/poster-design-template_53876-116497.jpg",
        ],
        videos: [],
    },
    "banners": {
        images: [
            "https://img.freepik.com/free-vector/profile-picture-design_742173-13745.jpg",
            "https://img.freepik.com/free-photo/modern-banner-template_23-2148994267.jpg",
        ],
        videos: [],
    },
    "ad-banners": {
        images: [
            "https://img.freepik.com/premium-psd/cursos-militares-curso-preparatorio-military-courses-preparatory-course_927563-1756.jpg",
            "https://img.freepik.com/premium-photo/promotional-banner-mockup_93675-131616.jpg",
        ],
        videos: [],
    },
    "wedding-cards": {
        images: [
            "https://img.freepik.com/premium-vector/modern-wedding-invitation-card-design_13329-2263.jpg",
            "https://img.freepik.com/free-vector/hand-drawn-wedding-invitation_23-2148912930.jpg",
            "https://img.freepik.com/free-photo/youth-vintage-vector-graphic-concept_53876-13843.jpg",
            "https://img.freepik.com/free-vector/wedding-invitation-template-design_52683-108823.jpg",
        ],
        videos: [
            "https://www.w3schools.com/html/movie.mp4",
        ],
    },
    "thumbnails": {
        images: [
            "https://img.freepik.com/premium-psd/red-december-month-struggle-awareness-against-aids-hiv-other-stis-social-media-editable_1267017-1133.jpg",
            "https://img.freepik.com/free-photo/poster-design-template_53876-116497.jpg",
        ],
        videos: [],
    },
};


const PortfolioShowcase = () => {
    const { title } = useParams();
    const [activeTab, setActiveTab] = useState('images');

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ type: "", src: "" });


    const section = portfolioData[title];
    const images = section?.images || [];
    const videos = section?.videos || [];

    if (!section) {
        return (
            <div className="text-center py-20 text-gray-400 min-h-screen bg-zinc-900">
                <h1 className="text-3xl font-bold text-red-400">No portfolio found</h1>
            </div>
        );
    }

    return (
        <section>
            <div className="flex items-center justify-between px-4 md:px-10 py-4 bg-white dark:bg-zinc-900  dark:border-zinc-700">

                {/* Left: Logo + Text */}
                <div className="flex items-center gap-3">
                    <h1 className="text-xl font-semibold text-zinc-800 dark:text-white">RCS</h1>
                </div>

                {/* Right: Back Button */}
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                    <ArrowBack fontSize="small" />
                    Back
                </button>
            </div>

            <section className="bg-white py-20 px-4 md:px-10 dark:bg-zinc-900 text-white min-h-screen">
                <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 p-6">
                    {title.replace(/-/g, ' ').toUpperCase()}
                </h1>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('images')}
                        className={`px-5 py-2 rounded-full text-sm font-semibold border cursor-pointer transition 
                        ${activeTab === 'images'
                                ? ' bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300 text-black'
                                : 'bg-transparent border-gray-400 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                            }`}
                    >
                        Images
                    </button>
                    {videos.length > 0 && (
                        <button
                            onClick={() => setActiveTab('videos')}
                            className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer border transition 
                        ${activeTab === 'videos'
                                    ? ' bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300 text-black'
                                    : 'bg-transparent border-gray-400 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                                }`}
                        >
                            Videos
                        </button>
                    )}
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto columns-2 md:columns-3 lg:columns-4 xl:columns-3 gap-1 space-y-0">
                    {activeTab === 'images' &&
                        images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Portfolio ${idx + 1}`}
                                onClick={() => {
                                    setModalOpen(true);
                                    setModalContent({ type: "image", src: img });
                                }}
                                className="w-full break-inside-avoid rounded-lg transition-transform duration-300 mb-1"
                            />
                        ))
                    }

                    {activeTab === 'videos' &&
                        videos.map((vid, idx) => (
                            <video
                                onClick={() => {
                                    setModalOpen(true);
                                    setModalContent({ type: "video", src: vid });
                                }}
                                autoPlay
                                key={idx}
                                className="w-full break-inside-avoid rounded-lg transition-transform duration-300 mb-1"
                            >
                                <source src={vid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ))
                    }
                </div>
            </section>

            {modalOpen && (
                <div
                    className="fixed inset-0 z-50  backdrop-blur-sm flex items-center justify-center px-4"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden max-w-4xl w-full max-h-[90vh] p-4 animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-3 right-3 text-zinc-600 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 text-2xl font-bold transition"
                        >
                            &times;
                        </button>

                        {/* Content */}
                        {modalContent.type === "image" ? (
                            <img
                                src={modalContent.src}
                                alt="Full View"
                                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                            />
                        ) : (
                            <video
                                src={modalContent.src}
                                controls
                                autoPlay
                                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                            />
                        )}
                    </div>
                </div>
            )}



            <ContactSection />
        </section>
    );
};

export default PortfolioShowcase;
