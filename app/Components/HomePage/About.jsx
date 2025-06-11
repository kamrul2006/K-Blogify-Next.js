'use client';

import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="bg-gradient-to-r from-[#1e293b] via-[#334155] to-[#475569] text-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Image */}
                <div className="flex-shrink-0   overflow-hidden mx-auto md:mx-0">
                    <Image
                        src="/logo.png"
                        alt="About K-Blogify"
                        width={400}
                        height={400}
                        className="object-cover "
                        priority
                    />
                </div>

                {/* Text Content */}
                <div className="max-w-xl text-center md:text-left">
                    <h2 className="text-4xl font-extrabold mb-4 text-pink-400">About K-Blogify</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        K-Blogify is your AI-powered blogging platform designed to help you unleash creativity,
                        write smarter, and connect with a community of passionate bloggers. Whether you're a beginner or an experienced writer,
                        our intelligent tools and sleek interface make content creation effortless and enjoyable.
                    </p>
                    <p className="text-gray-400">
                        Join us today to explore, create, and share amazing blog posts empowered by the latest AI technology.
                        Welcome to the future of blogging!
                    </p>
                </div>
            </div>
        </section>
    );
}
