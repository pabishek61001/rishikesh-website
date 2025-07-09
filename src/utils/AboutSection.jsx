import React from 'react';
import portfolioImg from '../images/profile/portfolio.png';

const AboutSection = () => {
    return (
        <section id="about" className=" text-black dark:text-white py-10 px-4 md:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Right (Optional Image or Animation placeholder) */}
                <div>
                    <img
                        src={portfolioImg}
                        alt="Rishikesh Illustration"
                        className=" rounded-2xl object-cover"
                    />
                </div>

                {/* Left (Text) */}
                <div>
                    <h2 className="text-4xl mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300 ">
                        About Me</h2>
                    <p className="text-lg leading-relaxed  text-black dark:text-gray-300 mb-6">
                        Hey there! I'm <span className="text-xl mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-blue-300">Rishikesh</span> — the creative mind behind Cutsography. A passionate visual designer and video editor with a sharp eye for aesthetics and detail. Over the years, I’ve helped brands, businesses, and individuals bring their ideas to life through stunning posters, ad banners, thumbnails, wedding invitations, and promotional videos.
                    </p>
                    <p className="text-lg leading-relaxed text-black dark:text-gray-300">
                        Whether you're launching a product, celebrating a special moment, or growing your online presence, I design visuals that not only look good — but speak to your audience.
                    </p>
                    <p className="text-md font-medium text-transparent mt-4 bg-clip-text bg-gradient-to-r from-violet-300 to-blue-300">
                        "Every pixel matters. Every frame tells a story. Let’s create something unforgettable."
                    </p>
                </div>


            </div>
        </section>
    );
};

export default AboutSection;
