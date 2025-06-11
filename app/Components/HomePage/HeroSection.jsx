'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-[80vh] lg:h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white overflow-hidden px-6 md:px-12 lg:px-24 py-12">

            {/* Background Abstract Gradient */}
            <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 opacity-30 rounded-full blur-[140px] z-0"></div>

            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 flex-1 text-center lg:text-left max-w-xl"
            >
                <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                    Unleash Your Creativity with <span className="text-pink-400">AI-Powered Blogs</span>
                </h1>
                <p className="text-md sm:text-lg  text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
                    Create, Edit & Explore intelligent blog content with the help of cutting-edge AI. Empower your ideas and share your thoughts with the world.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                    <motion.a
                        href="/posts"
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition duration-300"
                    >
                        Explore Blogs
                    </motion.a>

                    <motion.a
                        href="/create"
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-pink-500 text-pink-400 font-semibold py-3 px-10 rounded-full shadow-lg transition duration-300 hover:bg-pink-600 hover:text-white"
                    >
                        Write New Blog
                    </motion.a>
                </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 flex-1 max-w-full mb-12 lg:mb-0"
            >
                <Image
                    src="/banner.png"
                    alt="AI blogging illustration"
                    width={600}
                    height={400}
                    className="object-cover"
                    priority
                />
            </motion.div>
        </section>
    );
}
