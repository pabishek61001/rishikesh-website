// import React from "react";
// import { useEffect, useRef, useCallback, useMemo } from "react";
// import SplitText from "../../ReactBits/SplitText/SplitText";
// import { motion } from "framer-motion";
// import Threads from '../../ReactBits/Threads/Threads';
// import { Box } from "@mui/material";
// import GradientText from '../../ReactBits/GradientText/GradientText';
// import ProfileCard from '../../ReactBits/ProfileCard/ProfileCard';



// const Hero = () => {
//   const handleAnimationComplete = () => {
//     console.log("All letters animated!");
//   };

//   return (
//     <Box sx={{ minHeight: { xs: '70vh', md: "70vh" }, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", py: { xs: 15, md: 15 } }}>

//       <style>
//         {`
//   @keyframes float1 {
//     0%, 100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-20px);
//     }
//   }

//   @keyframes float2 {
//     0%, 100% {
//       transform: translate(0, 0);
//     }
//     50% {
//       transform: translate(10px, -15px);
//     }
//   }

//   @keyframes float3 {
//     0%, 100% {
//       transform: translate(0, 0);
//     }
//     50% {
//       transform: translate(-10px, 10px);
//     }
//   }

//   .float-circle {
//     position: absolute;
//     border-radius: 9999px;
//     opacity: 0.2;
//     z-index: 0;
//     pointer-events: none;
//   }

//   .circle1 {
//     width: 40px;
//     height: 40px;
//     background-color: #3b82f6; /* blue-500 */
//     top: 80px;
//     left: 60px;
//     animation: float1 6s ease-in-out infinite;
//   }

//   .circle2 {
//     width: 30px;
//     height: 30px;
//     background-color: #ec4899; /* pink-500 */
//     bottom: 120px;
//     right: 80px;
//     animation: float2 7s ease-in-out infinite;
//   }

//   .circle3 {
//     width: 20px;
//     height: 20px;
//     background-color: #a855f7; /* fuchsia-500 */
//     top: 50%;
//     left: 70%;
//     animation: float3 5s ease-in-out infinite;
//   }
// `}
//       </style>
//       <div className="float-circle circle1" />
//       <div className="float-circle circle2" />
//       <div className="float-circle circle3" />



//       <motion.div
//         className="relative max-w-4xl w-full text-center z-10 flex flex-col items-center"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >

//         <h2 className="text-6xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-blue-300">
//           Rishikesh
//         </h2>

//         <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-800 dark:text-zinc-200 bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-fuchsia-500">
//           Designer & Video Editor
//         </h2>

//         <p className="mt-5 max-w-xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
//           Crafting visuals that speak louder than words — every frame tells a story, every design sparks emotion.
//         </p>

//         <Box
//           mt={4}
//           display="flex"
//           flexDirection={{ xs: "row", lg: "row" }}
//           justifyContent="center"
//           alignItems="center"
//           gap={2}
//           width="100%"
//         >
//           <button className="px-3 py-3 cursor-pointer text-lg rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-white transition hover:scale-105 shadow-lg w-full sm:w-auto text-center">
//             Lets Talk
//           </button>
//           <button className="px-3 py-3 cursor-pointer text-lg rounded-xl border border-zinc-800 text-zinc-900 dark:border-white dark:text-white transition hover:bg-zinc-100 dark:hover:bg-zinc-900 w-full sm:w-auto text-center">
//             View Portfolio
//           </button>
//         </Box>


//       </motion.div>
//     </Box>
//   );
// };

// export default Hero;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const images = [
  "https://img.freepik.com/free-vector/watercolor-hand-drawn-wedding-youtube-channel-art_23-2149035653.jpg",
  "https://img.freepik.com/premium-psd/wedding-invitation-watercolor-flowers-with-text_131310-1354.jpg",
  "https://img.freepik.com/free-vector/wedding-invitation-template-design_52683-108823.jpg",
  "https://img.freepik.com/free-vector/watercolor-wedding-planner-landing-page-template_23-2149302606.jpg",
  "https://img.freepik.com/premium-vector/traditional-royal-wedding-invitation-card-design-with-bride-groom-welcoming-illustration_13329-575.jpg",
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="min-h-screen px-6 md:px-20 py-20 flex items-center justify-center text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Static Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-black dark:text-white mb-6 leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Rishikesh
            </span>
          </h1>
          <p className="text-black dark:text-gray-300 text-lg mb-8">
            A passionate video editor and visual designer. I transform your vision into stunning visuals—from cinematic edits to modern graphic storytelling..
          </p>

          <Box
            mt={4}
            display="flex"
            flexDirection={{ xs: "row", lg: "row" }}
            justifyContent={{ xs: "center", md: "left" }}
            // alignItems="center"
            gap={2}
          >
            <button className="px-6 w-[300px] py-3 cursor-pointer text-lg rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-white transition hover:scale-105 shadow-md hover:shadow-violet-500/50 duration-300"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  // behavior: 'smooth',
                })
              }>
              Let’s Talk
            </button>
          </Box>
        </div>

        {/* Right: Image Carousel */}
        <div className="relative rounded-3xl overflow-hidden  ">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`Work ${idx + 1}`}
                  className="w-full h-auto bg-transparent object-cover xs:object-contain rounded-3xl transition duration-500 ease-in-out"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
