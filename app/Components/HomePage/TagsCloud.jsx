'use client';

import { Fade, Zoom } from 'react-awesome-reveal';
import { FaHashtag } from 'react-icons/fa';

const tags = [
    'Technology',
    'AI',
    'React.js',
    'Next.js',
    'JavaScript',
    'MongoDB',
    'Node.js',
    'Express',
    'Design',
    'Productivity',
    'Web Development',
    'Tutorials',
    'Inspiration',
];

export default function TagsCloud() {
    return (
        <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <Fade direction="down" triggerOnce>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-pink-400 drop-shadow-lg">
                        🔥 Explore Trending Topics
                    </h2>
                </Fade>

                <div className="flex flex-wrap justify-center gap-4">
                    {tags.map((tag, index) => (
                        <Zoom delay={index * 80} key={index}>
                            <a
                                href={`/tags/${tag.toLowerCase()}`}
                                className="flex items-center gap-2 bg-gradient-to-br from-pink-600 via-pink-400 to-pink-300 text-white hover:from-pink-500 hover:to-pink-500 transition-all duration-300 rounded-full px-6 py-3 text-base md:text-lg font-semibold shadow-xl cursor-pointer transform hover:scale-105"
                            >
                                <FaHashtag className="text-white" /> {tag}
                            </a>
                        </Zoom>
                    ))}
                </div>
            </div>
        </section>
    );
}
