'use client';

import Image from 'next/image';
import { Fade, Zoom } from 'react-awesome-reveal';

export default function AboutSection() {
    return (
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Abstract Background Gradient Circles */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 opacity-20 rounded-full blur-[150px] z-0"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-400 opacity-20 rounded-full blur-[150px] z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Image */}
                <Zoom  >
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                        <Image
                            src="/logo.png"
                            alt="About K-Blogify"
                            width={400}
                            height={400}
                            className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            priority
                        />
                    </div>
                </Zoom>

                {/* Text Content */}
                <Fade direction="right"  >
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-5xl font-extrabold mb-6 text-pink-400 drop-shadow-lg">
                            About K-Blogify
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            <span className="font-semibold text-white">K-Blogify</span> is your modern, AI-powered blogging platform — built for creators like you!
                            Our intelligent writing assistant helps you brainstorm, write smarter, summarize content, and add SEO-optimized tags effortlessly.
                        </p>
                        <p className="text-md text-gray-400 mb-8">
                            Whether you're a tech blogger, storyteller, or hobbyist — K-Blogify empowers your creativity with an intuitive interface, real-time previews, and a supportive community.
                        </p>

                        <div className="flex justify-center md:justify-start gap-6">
                            <a
                                href="/create"
                                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                            >
                                Start Writing
                            </a>
                            <a
                                href="/posts"
                                className="border border-pink-400 text-pink-400 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-pink-600 hover:text-white"
                            >
                                Explore Blogs
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
}
