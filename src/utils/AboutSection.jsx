import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className=" text-black dark:text-white py-10 px-4 md:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Right (Optional Image or Animation placeholder) */}
                <div className="flex justify-center">
                    <img
                        src="https://img.freepik.com/free-photo/serious-young-man-with-headphones_23-2147747799.jpg"
                        alt="Rishikesh Illustration"
                        className="w-80 md:w-100 rounded-2xl shadow-lg"
                    />
                </div>

                {/* Left (Text) */}
                <div>
                    <h2 className="text-4xl mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300 ">
                        About Me</h2>
                    <p className="text-lg leading-relaxed  text-black dark:text-gray-300 mb-6">
                        Hey there! I'm <span className="text-xl mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-blue-300">Rishikesh</span> — a passionate video editor and visual designer with a creative mind and a keen eye for detail. I specialize in creating stunning visuals that tell powerful stories.
                    </p>
                    <p className="text-lg leading-relaxed text-black dark:text-gray-300">
                        From cinematic video edits to engaging social media content and sleek branding designs, I transform raw ideas into compelling visuals that connect with your audience.
                        Whether you're a brand, influencer, or business, I can help bring your vision to life through visual magic.
                    </p>
                </div>


            </div>
        </section>
    );
};

export default AboutSection;
