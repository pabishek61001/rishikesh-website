import React from "react";
import { Star } from "@mui/icons-material";

const testimonials = [
    {
        name: "Kaviya",
        role: "Makeup artist",
        quote:
            "I'm completely satisfied with the editing work. I absolutely loved the final video! Your editing style is so creative, and every detail was put together beautifully. The transitions, pacing, and overall aesthetic were on point, making the reel look even more engaging and premium. Definitely a 5/5 ⭐⭐⭐⭐⭐ from me. Your creativity and editing skills truly stand out. Highly recommended! ✨👏",
        image: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Pragadeesh",
        role: "Event Management",
        quote:
            "Working with Rishikesh was an absolute pleasure! He perfectly understood our vision and delivered a clean, engaging, and high-quality video edit on time. His attention to detail and creative storytelling really elevated our content. Highly recommend him for anyone looking for a skilled and reliable video editor!",
        image: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Arjun",
        role: "Influencer",
        quote:
            "One of the best editors I’ve worked with! Fast, creative, and understands what clicks with the audience. My videos have never looked this good.",
        image: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Venkatesh",
        role: "Event Management",
        quote:
            "I reached out to Rishikesh to design a wedding e-invitation, and he absolutely nailed it! The design was elegant, modern, and exactly what we had in mind. He even made last-minute changes without any hesitation. Everyone loved the final invite — it looked premium and unique!.",
        image: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Vishi",
        role: "Corporate MD",
        quote:
            "Rishikesh created a few ad banners for our brand, and the quality was just amazing. The color combinations, layout, and overall balance looked super professional. He really understands how to make a design eye-catching without overdoing it. Great experience working with him!.",
        image: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Surya",
        role: "Startup Founder",
        quote:
            "Amazing visuals and sharp storytelling. Highly recommend for any brand videos or promo work.",
        image: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Abishek",
        role: "E-Commerce Owner",
        quote:
            "I had an amazing experience working with Rishikesh! I just shared my rough idea, and he turned it into a clean, creative video that looked way more professional than I expected. He’s quick to respond, open to feedback, and his edits really bring the story to life. Definitely going to work with him again.",
        image: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Vivek",
        role: "Client",
        quote:
            "Created a Invitation Design for my Marriage , Within few mins team gave many Options to choose. Appreciate his patience in listening to the requirements and fulfilled all my inputs, at reasonable cost.",
        image: "https://avatar.iran.liara.run/public/boy",
    },
];

const Testimonials = () => {
    return (
        <section className="relative py-16 px-2 sm:px-8 lg:px-16 max-w-[1600px] mx-auto text-zinc-900 dark:text-white transition-colors duration-300">
            {/* Background Ambient Glows */}
            <div className="hidden lg:block absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-2 inline-block">
                        Client Feedback
                    </span>
                    <h2 className="text-center text-4xl mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-300 dark:to-blue-300">
                        What Clients Say
                    </h2>
                </div>

                {/* Desktop: Masonry Columns | Mobile: Smooth Horizontal Scroll */}
                <div className="flex md:block overflow-x-auto md:overflow-visible gap-4 md:columns-2 lg:columns-3 md:gap-6 space-y-0 md:space-y-6 snap-x snap-mandatory pb-6 md:pb-0 scrollbar-none">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="snap-start shrink-0 w-[80vw] sm:w-[320px] md:w-auto break-inside-avoid mb-0 md:mb-6 group relative bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80  shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Rating Stars & Accent Quote Icon */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="text-sm sm:text-base" />
                                        ))}
                                    </div>
                                    <span className="text-3xl font-serif text-sky-500/20 dark:text-sky-400/20 leading-none select-none">
                                        “
                                    </span>
                                </div>

                                {/* Quote Text */}
                                <p className="text-zinc-800 dark:text-zinc-300 text-sm leading-relaxed mb-6 italic">
                                    “{testimonial.quote}”
                                </p>
                            </div>

                            {/* Client Info Header */}
                            <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                                <div className="relative">
                                    <img
                                        src={
                                            "https://i.pinimg.com/736x/96/e2/a7/96e2a7d987ce19f693d39f131cda092a.jpg"
                                        }
                                        alt={testimonial.name}
                                        className="w-11 h-11 rounded-full object-cover border border-gray-50 group-hover:border-gray-500 transition-colors duration-300"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-blue-300 transition-colors duration-200">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;