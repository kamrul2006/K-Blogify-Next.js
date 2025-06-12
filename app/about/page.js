'use client';

import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import Image from 'next/image';
import { FaRobot, FaMagic, FaUsers, FaRocket, FaLightbulb, FaCogs } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <main className="bg-[#0f172a] text-white font-tinos">
            {/* Header Section */}
            <section className="relative pt-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] text-center">
                <Fade direction="down"   >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-pink-400 mb-6 drop-shadow-lg">About K-Blogify</h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Where creativity meets artificial intelligence — powering the future of blogging.
                    </p>
                </Fade>
            </section>

            {/* Who We Are */}
            <section className="pt-5 pb-10 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#334155] via-[#475569] to-[#64748b]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <Zoom   >
                        <div className="flex-1">
                            <Image src="/logo.png" alt="About K-Blogify" width={500} height={500} className="rounded-2xl mx-auto" />
                        </div>
                    </Zoom>
                    <Fade direction="right"   >
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold text-pink-400 mb-6">Who We Are</h2>
                            <p className="text-lg text-gray-300 mb-4">
                                K-Blogify is a next-generation blogging platform that empowers creators, writers, and businesses with AI-powered tools for intelligent content creation.
                            </p>
                            <p className="text-lg text-gray-300">
                                From idea generation to publishing — we simplify the entire journey, letting you focus on what you do best: creating amazing content.
                            </p>
                        </div>
                    </Fade>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-10 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] text-center">
                <Slide direction="left"   >
                    <h2 className="text-4xl font-bold text-pink-400 mb-10">Our Mission 🚀</h2>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                        Our mission is to democratize content creation for everyone — whether you're a seasoned writer or just getting started.
                        We harness the power of artificial intelligence to make blogging faster, smarter, and more enjoyable.
                    </p>
                </Slide>
            </section>

            {/* Why Choose Us */}
            <section className="py-10 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#334155] via-[#475569] to-[#64748b]">
                <div className="max-w-7xl mx-auto">
                    <Fade direction="down"   >
                        <h2 className="text-4xl font-bold text-center text-pink-400 mb-16">Why Choose K-Blogify?</h2>
                    </Fade>

                    <div className="grid gap-16 md:grid-cols-3">
                        <Zoom cascade   >
                            <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg text-center">
                                <FaMagic className="text-5xl text-pink-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4">AI-Powered Writing</h3>
                                <p className="text-gray-300">Let AI help you brainstorm, write, summarize, and suggest perfect tags effortlessly.</p>
                            </div>

                            <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg text-center">
                                <FaRocket className="text-5xl text-pink-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Lightning Fast Publishing</h3>
                                <p className="text-gray-300">Streamlined publishing experience with instant previews, SEO suggestions & auto-tagging.</p>
                            </div>

                            <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg text-center">
                                <FaUsers className="text-5xl text-pink-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
                                <p className="text-gray-300">Build your audience, collaborate, comment, like, and grow your influence with ease.</p>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </section>

            {/* AI Features Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569]">
                <div className="max-w-7xl mx-auto">
                    <Fade direction="down"   >
                        <h2 className="text-4xl font-bold text-center text-pink-400 mb-16">AI-Powered Features</h2>
                    </Fade>

                    <div className="grid gap-16 md:grid-cols-3">
                        <Zoom cascade   >
                            <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg text-center">
                                <FaRobot className="text-5xl text-pink-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Smart Summarization</h3>
                                <p className="text-gray-300">Automatically summarize lengthy posts into concise, shareable snippets.</p>
                            </div>

                            <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg text-center">
                                <FaLightbulb className="text-5xl text-pink-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Content Suggestions</h3>
                                <p className="text-gray-300">Get intelligent suggestions on improving your content structure and readability.</p>
                            </div>

                            <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg text-center">
                                <FaCogs className="text-5xl text-pink-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Auto Tagging & SEO</h3>
                                <p className="text-gray-300">Boost your discoverability with AI-powered keyword extraction & SEO optimization.</p>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] text-center rounded-3xl mt-5">
                <Fade direction="up"   >
                    <h2 className="text-4xl font-extrabold text-pink-500 mb-8">Ready to start your AI-powered blogging journey?</h2>
                    <a
                        href="/signup"
                        className="text-white mt-4 bg-pink-500 font-semibold py-4 px-12 rounded-full text-xl shadow-lg  hover:bg-pink-600 transition hover:scale-105"
                    >
                        Join K-Blogify Now 🚀
                    </a>
                </Fade>
            </section>
        </main>
    );
}
