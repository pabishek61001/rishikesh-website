import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import { VolumeUp, VolumeOff } from "@mui/icons-material";

// Software Icons
import ps from "../images/icons/ps.png";
import dr from "../images/icons/dr.png";
import ae from "../images/icons/ae.png";
import ai from "../images/icons/ai.png";
import canva from "../images/icons/canva.png";
import pr from "../images/icons/premierepro.png";

// Hero Work Video Samples (Cloudinary URLs)
const heroWork = [
  {
    id: 1,
    title: "Cinematic Video Editing",
    tag: "Featured Reel",
    src: "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/10.mp4",
  },
  {
    id: 2,
    title: "Commercial Ad Design",
    tag: "Featured Reel",
    src: "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/1.mp4",
  },
  {
    id: 3,
    title: "Visual Storytelling",
    tag: "Featured Reel",
    src: "https://github.com/pabishek61001/rishikesh-website/releases/download/v1.0.0/8.mp4",
  },
];

const tools = [
  { name: "Photoshop", icon: ps },
  { name: "Illustrator", icon: ai },
  { name: "After Effects", icon: ae },
  { name: "DaVinci Resolve", icon: dr },
  { name: "Canva", icon: canva },
  { name: "Premiere Pro", icon: pr },
];

const HeroSection = () => {
  const [activeWork, setActiveWork] = useState(heroWork[0]);
  const [isMuted, setIsMuted] = useState(true);
  const mainVideoRef = useRef(null);

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const toggleAudio = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSelectWork = (item) => {
    setActiveWork(item);
    // Keep audio state consistent when switching videos
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = isMuted;
    }
  };

  return (
    <section id="home" className="relative w-full  mt-20 px-2 md:px-12 lg:px-20 py-12 lg:py-16 rounded-3xl overflow-hidden bg-zinc-200 dark:bg-zinc-950 transition-colors duration-300  ">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-14 items-center z-10 relative">

        {/* Left Column: Content Section */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 dark:bg-violet-900/10 border border-violet-500/20 text-violet-600 dark:text-violet-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            Available for Projects
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-zinc-900 dark:text-zinc-300 mb-6 leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 dark:from-violet-300 dark:to-blue-300">
              Rishikesh
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-zinc-900 dark:text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
            A passionate video editor and visual designer. I transform your vision into stunning visuals—from cinematic edits to modern graphic storyteller.
          </p>

          {/* Software Stack Icons */}
          <div className="mb-8 w-full">
            <p className="text-[11px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold mb-3">
              creator tech stack
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4">
              {tools.map((tool, idx) => (
                <div
                  key={tool.name}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="group relative p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300 hover:scale-105 sm:hover:scale-110 shadow-sm shrink-0"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 sm:px-2.5 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Box
            display="flex"
            justifyContent={{ xs: "center", lg: "flex-start" }}
            width="100%"
          >
            <button
              onClick={handleScrollToBottom}
              className=" w-50 sm:w-50 px-8 py-3.5 cursor-pointer text-base font-bold rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 active:scale-95"
            >
              Let’s Talk
            </button>
          </Box>
        </div>

        {/* Right Column: Interactive Video Showcase Grid */}
        <div className="lg:col-span-6 w-full flex flex-col gap-4">

          {/* Main Active Featured Video Canvas */}
          <div className="relative group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl transition-all duration-500">
            {/* Ambient Backlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl blur-xl opacity-20 dark:opacity-30 group-hover:opacity-50 transition duration-500" />

            <div className="relative overflow-hidden aspect-[16/10] bg-zinc-900">
              <video
                key={activeWork.src}
                ref={mainVideoRef}
                src={activeWork.src}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-contain"
              />

              {/* Overlay Glass Tag */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                {activeWork.tag}
              </div>

              {/* Mute/Unmute Control Button */}
              <button
                onClick={toggleAudio}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-grey-900 transition-all duration-300 shadow-md cursor-pointer"
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isMuted ? (
                  <VolumeOff fontSize="small" />
                ) : (
                  <VolumeUp fontSize="small" />
                )}
              </button>

              {/* Title Strip */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white pointer-events-none">
                {/* <h3 className="text-xs font-normal text-gray-400">{activeWork.title}</h3> */}
              </div>
            </div>
          </div>

          {/* Clickable Video Selector Thumbnails */}
          <div className="grid grid-cols-3 gap-3">
            {heroWork.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectWork(item)}
                className={`relative rounded-xl overflow-hidden aspect-[16/10] border transition-all duration-300 cursor-pointer bg-zinc-900 ${activeWork.id === item.id
                  ? "border-white scale-105 shadow-lg"
                  : "border-transparent opacity-50 hover:opacity-100 hover:scale-[1.02]"
                  }`}
              >
                {/* Wrapper container ensures absolute sizing control */}
                <div className="absolute inset-0 w-full h-full">
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover pointer-events-none block"
                  />
                </div>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;