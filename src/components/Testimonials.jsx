import React from "react";

const testimonials = [
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
            "Created a Invitation Design for my Marriage , Within few mins team gave many Options to choose. Appreciate his  patience in listening to the requirements and fulfilled all my inputs, at reasonable cost.",
        image: "https://avatar.iran.liara.run/public/boy",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-zinc-100 dark:bg-zinc-900 py-16 mx-auto sm:px-6 md:px-20 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                What Clients Say
            </h2>

            {/* Scrollable only on xs, grid on md+ */}
            <div className="md:grid md:grid-cols-auto gap-6 md:gap-8 overflow-hidden">
                <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory md:overflow-visible pb-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="snap-start shrink-0 w-[85vw] sm:w-[300px] md:w-auto bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                                “{testimonial.quote}”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Testimonials;
