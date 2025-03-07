// "use client";
// import React from "react";
// import { SparklesCore } from "../ui/sparkles";
// import Link from "next/link";
// import { Typewriter } from 'react-simple-typewriter';

// export default function Hero() {
//     return (
//         <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//             <div className="w-full absolute inset-0 h-screen">
//                 <SparklesCore
//                     id="tsparticlesfullpage"
//                     background="transparent"
//                     minSize={0.6}
//                     maxSize={1.4}
//                     particleDensity={100}
//                     className="w-full h-full"
//                     particleColor="#FFFFFF"
//                 />
//             </div>
            
//             <h1 className="md:text-8xl text-4xl lg:text-7xl font-bold text-center text-white relative z-20">
//                 Free Resume Maker
//             </h1>

//             <div className="text-center text-slate-500 text-xl mt-4 relative z-20">
//                 <Typewriter
//                     words={['ATS Friendly', 'Smart Suggestions', 'Professional & Perfect']}
//                     loop={0}
//                     cursor
//                     cursorStyle='|'
//                     typeSpeed={10}
//                     deleteSpeed={10}
//                     delaySpeed={800}
//                 />
//             </div>

//             {/* Beam and additional sparkles container */}
//             <div className="w-[40rem] h-40 relative">
//                 {/* Beam gradients */}
//                 <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//                 <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//                 <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//                 <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//                 {/* Additional sparkles under text */}
//                 <SparklesCore
//                     background="transparent"
//                     minSize={0.4}
//                     maxSize={1}
//                     particleDensity={1200}
//                     className="w-full h-full"
//                     particleColor="#FFFFFF"
//                 />

//                 {/* Radial gradient mask */}
//                 <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//             </div>

//             <Link
//                 href="/builder"
//                 className="relative z-20 -mt-20 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
//             >
//                 Create Resume
//             </Link>
//         </div>
//     );
// }
"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="h-screen w-full flex flex-row bg-black overflow-hidden">
            {/* Section Preview (Gauche) */}
            <div
                className="w-1/2 relative flex items-center justify-center overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/resume.jpg')" }}

            >
                {/* Overlay pour assombrir un peu l'image */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Background Sparkles */}
                <div className="absolute inset-0 w-full h-full">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>

                {/* Texte & Animation */}
                <div className="absolute top-10 text-center text-white z-10">
                    <h1 className="text-3xl font-bold">Free Resume Maker</h1>
                    <p className="text-slate-300 text-xl mt-2">
                        <Typewriter
                            words={["ATS Friendly", "Smart Suggestions", "Professional & Perfect"]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={10}
                            deleteSpeed={10}
                            delaySpeed={800}
                        />
                    </p>
                </div>

                {/* Bouton placé plus bas */}
                <div className="absolute bottom-10 flex justify-center w-full z-10">
                    <Link
                        href="/builder"
                        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        Create Resume
                    </Link>
                </div>
            </div>

            {/* Section Login (Droite) */}
            <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-gray-900 relative z-10">
                <h1 className="text-4xl font-bold text-white mb-6">Login</h1>
                <form className="w-full max-w-sm space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="submit"
                        className="w-full p-3 rounded-md bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-gray-400 text-sm mt-4">
                    Don't have an account? <Link href="/register" className="text-indigo-400">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
