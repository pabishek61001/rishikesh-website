import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactSection from '../utils/ContactSection';
import { ArrowBack, InfoOutlined, PlayArrow } from "@mui/icons-material";

// ✅ Dynamically import all category images using relative paths
const videoEditingImages = import.meta.glob('../images/video-editing/*.{jpg,jpeg,png,svg}', {
    eager: true,
    import: 'default',
});

const posterImages = import.meta.glob('../images/poster/*.{jpg,jpeg,png,svg}', {
    eager: true,
    import: 'default',
});

const bannerImages = import.meta.glob('../images/banner/*.{jpg,jpeg,png,svg}', {
    eager: true,
    import: 'default',
});

const adBannerImages = import.meta.glob('../images/ad-banner/*.{jpg,jpeg,png,svg}', {
    eager: true,
    import: 'default',
});

const weddingCardImages = import.meta.glob('../images/wedding/*.{jpg,jpeg,png,svg}', {
    eager: true,
    import: 'default',
});

const thumbnailImages = import.meta.glob('../images/thumbnail/*.{jpg,jpeg,png,svg}', {
    eager: true,
    import: 'default',
});

// Build the portfolioData object with Cloudinary URLs
const portfolioData = {
    "video-editing": {
        videos: [
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/1.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/2.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/3.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/4.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/5.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/6.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/7.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/8.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/9.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/10.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/edit.11.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/edit.12.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/edit.13.mp4",
            "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/edit.14.mp4",


        ],
    },
    "posters": {
        images: Object.values(posterImages),
        videos: [],
    },
    "banners": {
        images: Object.values(bannerImages),
        videos: [],
    },
    "ad-banners": {
        images: Object.values(adBannerImages),
        videos: [],
    },
    "wedding-cards": {
        images: Object.values(weddingCardImages),
        videos: [],
    },
    "thumbnails": {
        images: Object.values(thumbnailImages),
        videos: [],
    },
};

const PortfolioShowcase = () => {
    const { title } = useParams();

    const section = portfolioData[title];
    const images = section?.images || [];
    const videos = section?.videos || [];

    const [activeTab, setActiveTab] = useState(images.length === 0 ? 'videos' : 'images');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ type: "", src: "" });

    if (!section) {
        return (
            <div className="text-center py-20 text-gray-400 min-h-screen bg-zinc-900">
                <h1 className="text-3xl font-bold text-red-400">No portfolio found</h1>
            </div>
        );
    }

    return (
        <section className="bg-white dark:bg-zinc-900 min-h-screen text-zinc-800 dark:text-white">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 md:px-10 py-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                    <h1 className="text-xl font-semibold text-zinc-800 dark:text-white">RCS</h1>
                </div>

                <button
                    onClick={() => window.history.back()}
                    className="cursor-pointer flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition"
                >
                    <ArrowBack fontSize="small" />
                    Back
                </button>
            </div>

            {/* Showcase Section */}
            <div className="py-12 px-4 md:px-10">
                <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 p-2">
                    {title ? title.replace(/-/g, ' ').toUpperCase() : 'PORTFOLIO'}
                </h1>

                {/* Tab Controls */}
                <div className="flex justify-center gap-4 mb-10">
                    {images.length > 0 && (
                        <button
                            onClick={() => setActiveTab('images')}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold border cursor-pointer transition-all duration-300 ${activeTab === 'images'
                                ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30 border-transparent'
                                : 'bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-blue-400 hover:text-blue-400'
                                }`}
                        >
                            Images ({images.length})
                        </button>
                    )}
                    {videos.length > 0 && (
                        <button
                            onClick={() => setActiveTab('videos')}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold border cursor-pointer transition-all duration-300 ${activeTab === 'videos'
                                ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30 border-transparent'
                                : 'bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-blue-400 hover:text-blue-400'
                                }`}
                        >
                            Videos ({videos.length})
                        </button>
                    )}
                </div>

                {/* Content Container */}
                <div className="max-w-7xl mx-auto">
                    {/* Images View */}
                    {activeTab === 'images' && images.length > 0 && (
                        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => {
                                        setModalOpen(true);
                                        setModalContent({ type: "image", src: img });
                                    }}
                                    className="group relative overflow-hidden rounded-xl bg-zinc-800 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                                >
                                    <img
                                        src={img}
                                        alt={`Portfolio ${idx + 1}`}
                                        loading="lazy"
                                        className="w-full h-auto object-cover rounded-xl"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Videos View (Cloudinary Native Autoplay Muted) */}
                    {activeTab === 'videos' && videos.length > 0 && (
                        <div>

                            {/* UI Info Note */}
                            {/* <div className="mb-6 p-4 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-300 flex items-start gap-3 backdrop-blur-md">
                                <InfoOutlined className="mt-0.5 shrink-0" fontSize="small" />
                                <p className="text-xs sm:text-xs leading-relaxed">
                                    Some video thumbnails may appear blank or empty due to high file quality and browser optimization. Simply <strong className="text-white">click on any video</strong> to view and play it completely with full controls.
                                </p>
                            </div> */}

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                                {videos.map((vid, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => {
                                            setModalOpen(true);
                                            setModalContent({ type: "video", src: vid });
                                        }}

                                        className="group relative bg-black rounded-xl overflow-hidden aspect-video lg:aspect-[16/10] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:scale-[1.02]"
                                    >
                                        <video
                                            src={vid}
                                            autoPlay={false}
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover rounded-xl"
                                        />

                                        {/* Hover Overlay with Play Icon */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                                            <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                                                <PlayArrow fontSize="large" />
                                            </div>
                                            <span className="text-xs font-semibold text-white tracking-wide uppercase">
                                                Click to Play with Sound
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    )}

                    {/* Empty State */}
                    {((activeTab === 'images' && images.length === 0) ||
                        (activeTab === 'videos' && videos.length === 0)) && (
                            <div className="text-center py-16 text-zinc-500">
                                <p className="text-lg">No content currently available in this tab.</p>
                            </div>
                        )}
                </div>
            </div>

            {/* Fullscreen Preview Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="relative bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex items-center justify-center p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-red-500 transition-colors duration-200 text-xl font-bold"
                        >
                            &times;
                        </button>

                        {/* Modal Content */}
                        <div className="w-full h-full flex items-center justify-center p-2">
                            {modalContent.type === "image" ? (
                                <img
                                    src={modalContent.src}
                                    alt="Full View"
                                    className="max-w-full max-h-[82vh] object-contain rounded-lg"
                                />
                            ) : (
                                <video
                                    key={modalContent.src} // Forcing re-mount ensures autoplay triggers with sound
                                    src={modalContent.src}
                                    controls
                                    muted={false}
                                    autoPlay
                                    playsInline
                                    className="max-w-full max-h-[82vh] object-contain rounded-lg rounded-b-none"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}

            <ContactSection />
        </section>
    );
};

export default PortfolioShowcase;