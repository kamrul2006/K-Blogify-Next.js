'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

export default function HeroSection() {
    return (
        <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-[90vh] lg:h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white overflow-hidden px-6 md:px-12 lg:px-24 py-16">

            {/* Decorative Background */}
            <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 opacity-20 rounded-full blur-[150px] z-0"></div>
            <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-tr from-blue-500 via-pink-500 to-purple-400 opacity-20 rounded-full blur-[150px] z-0"></div>

            {/* Left Content */}
            <div className="relative z-10 flex-1 text-center lg:text-left max-w-2xl">
                <Fade direction="down"  >
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                        Unleash Your Creativity with <span className="text-pink-400">AI-Powered Blogs</span>
                    </h1>
                </Fade>

                <Fade direction="up" delay={200}  >
                    <p className="text-md  text-gray-300 mb-5 max-w-xl mx-auto lg:mx-0">
                        Create, Edit & Explore intelligent blog content with the help of cutting-edge AI. Empower your ideas and share your thoughts with the world. Let technology fuel your inspiration.
                    </p>
                </Fade>

                <Fade direction="up" delay={400}  >
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                        <motion.a
                            href="/posts"
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
                        >
                            Explore Blogs
                        </motion.a>

                        <motion.a
                            href="/create"
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-pink-500 text-pink-400 font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 hover:bg-pink-600 hover:text-white"
                        >
                            Write New Blog
                        </motion.a>
                    </div>
                </Fade>
            </div>

            {/* Right Image with Zoom Effect */}
            <Zoom delay={300}>
                <div className="relative z-10 flex-1 max-w-full mb-12 lg:mb-0">
                    <Image
                        src="/banner.png"
                        alt="AI blogging illustration"
                        width={600}
                        height={400}
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>
            </Zoom>
        </section>
    );
}
