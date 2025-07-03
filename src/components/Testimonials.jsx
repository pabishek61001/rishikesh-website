import React from "react";

const testimonials = [
    {
        name: "Anjali Sharma",
        role: "Content Creator",
        quote:
            "Rishikesh's edits brought my videos to life! Super clean, super fast, and very professional.",
        image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
        name: "Arjun Mehta",
        role: "Startup Founder",
        quote:
            "Amazing visuals and sharp storytelling. Highly recommend for any brand videos or promo work.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sarah Lee",
        role: "Wedding Planner",
        quote:
            "We loved the wedding invites and edits! Creative and elegant — just what we needed.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Anjali Sharma",
        role: "Content Creator",
        quote:
            "Rishikesh's edits brought my videos to life! Super clean, super fast, and very professional.",
        image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
        name: "Arjun Mehta",
        role: "Startup Founder",
        quote:
            "Amazing visuals and sharp storytelling. Highly recommend for any brand videos or promo work.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sarah Lee",
        role: "Wedding Planner",
        quote:
            "We loved the wedding invites and edits! Creative and elegant — just what we needed.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
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
