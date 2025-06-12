'use client';

import { Fade } from 'react-awesome-reveal';
import { FaMagic, FaRobot, FaUsers } from 'react-icons/fa';

export default function FeaturesSection() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] text-pink-300">
            <div className="max-w-7xl mx-auto text-center">
                <Fade direction="down" triggerOnce>
                    <h2 className="text-5xl font-extrabold mb-16 text-pink-400 drop-shadow-lg">
                        ✨ Platform Features
                    </h2>
                </Fade>

                <div className="grid gap-16 md:grid-cols-3">
                    <Fade direction="up" cascade triggerOnce>
                        <div className="p-8 bg-[#0f172a] rounded-2xl shadow-lg">
                            <FaMagic className="text-5xl text-pink-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-bold mb-4">AI-Powered Writing</h3>
                            <p className="text-gray-300">Generate summaries, suggest tags & enhance your content with the power of AI.</p>
                        </div>

                        <div className="p-8 bg-[#0f172a] rounded-2xl shadow-lg">
                            <FaRobot className="text-5xl text-pink-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-bold mb-4">Auto Tagging</h3>
                            <p className="text-gray-300">AI suggests the most relevant tags to boost discoverability and SEO automatically.</p>
                        </div>

                        <div className="p-8 bg-[#0f172a] rounded-2xl shadow-lg">
                            <FaUsers className="text-5xl text-pink-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
                            <p className="text-gray-300">Engage with other creators. Like, comment, follow, and grow your audience easily.</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}
