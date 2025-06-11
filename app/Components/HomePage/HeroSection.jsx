'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] lg:h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white overflow-hidden px-4">

            {/* Background Abstract Gradient */}
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 opacity-30 rounded-full blur-[120px] z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                    Unleash Your Creativity with <span className="text-pink-400">AI-Powered Blogs</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    Create, Edit & Explore intelligent blog content with the help of cutting-edge AI. Empower your ideas and share your thoughts with the world.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <motion.a
                        href="/posts"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
                    >
                        Explore Blogs
                    </motion.a>

                    <motion.a
                        href="/create"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-pink-500 text-pink-400 font-semibold py-3 px-8 rounded-full shadow-lg transition"
                    >
                        Write New Blog
                    </motion.a>
                </div>
            </motion.div>

        </section>
    );
}
