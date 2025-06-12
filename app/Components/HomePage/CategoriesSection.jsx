'use client';

import { Zoom } from 'react-awesome-reveal';

const categories = ['AI', 'React.js', 'Next.js', 'MERN', 'Full Stack', 'Node.js', 'Blogging', 'SEO', 'Content Writing'];

export default function CategoriesSection() {
    return (
        <section className="py-20 px-6 md:px-12  bg-gradient-to-br from-[#334155] via-[#475569] to-[#64748b]">
            <div className="max-w-7xl mx-auto text-center">
                <Zoom triggerOnce>
                    <h2 className="text-5xl font-extrabold mb-12 text-pink-400 drop-shadow-lg">
                        🔖 Categories
                    </h2>
                </Zoom>

                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((cat, index) => (
                        <span
                            key={index}
                            className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110"
                        >
                            {cat}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
