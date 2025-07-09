import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactSection from '../utils/ContactSection';
import { ArrowBack } from "@mui/icons-material";




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

//  Build the portfolioData object
const portfolioData = {
    "video-editing": {
        videos: [
            "https://youtube.com/shorts/SMQYWfxzICg?feature=share",
            // "https://youtube.com/shorts/JSX9sln-0Yw?feature=share",
            "https://youtube.com/shorts/-uDommedfGo?feature=share",
            "https://youtube.com/shorts/JP8nwkyfkmM?feature=share",
            "https://youtube.com/shorts/E30NfWfwrvU?feature=share",
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
                    {images.length > 0 && (

                        <button
                            onClick={() => setActiveTab('images')}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border cursor-pointer transition 
                        ${activeTab === 'images'
                                    ? ' bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300 text-white dark:text-black'
                                    : 'bg-transparent border-gray-400 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                                }`}
                        >
                            Images
                        </button>
                    )}
                    {videos.length > 0 && (
                        <button
                            onClick={() => setActiveTab('videos')}
                            className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer border transition 
                        ${activeTab === 'videos'
                                    ? ' bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300 text-white dark:text-black'
                                    : 'bg-transparent border-gray-400 text-gray-400 hover:border-blue-400 hover:text-blue-400'
                                }`}
                        >
                            Videos
                        </button>
                    )}
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto columns-2 md:columns-3 lg:columns-4 xl:columns-3 gap-5 space-y-0">


                    {activeTab === 'images' && images.length > 0 ?

                        images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Portfolio ${idx + 1}`}
                                onClick={() => {
                                    setModalOpen(true);
                                    setModalContent({ type: "image", src: img });
                                }}
                                className="cursor-pointer w-full break-inside-avoid rounded-lg mb-3 transform transition duration-500 ease-in-out "
                            />
                        ))
                        :
                        <h2 className='text-center text-zinc-500'>
                            {/* Currently no Images & Videos! */}
                        </h2>
                    }

                    {activeTab === 'videos' &&
                        videos.map((vid, idx) => {
                            const embedUrl = vid.replace("shorts/", "embed/");
                            return (
                                <iframe
                                    key={idx}
                                    src={embedUrl}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full aspect-video rounded-lg mb-2"
                                    onClick={() => {
                                        setModalOpen(true);
                                        setModalContent({ type: "video", src: embedUrl });
                                    }}
                                ></iframe>
                            );
                        })

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
