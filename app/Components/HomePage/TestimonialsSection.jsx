'use client';

import { Fade } from 'react-awesome-reveal';

const testimonials = [
    {
        name: 'John Doe',
        text: 'K-Blogify transformed my blogging game with AI-powered tools!',
    },
    {
        name: 'Sarah Smith',
        text: 'The auto-tagging & summary features saved me hours of work. Love it!',
    },
    {
        name: 'Mark Wilson',
        text: 'Finally found a platform that combines community and cutting-edge AI.',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569]">
            <div className="max-w-7xl mx-auto text-center">
                <Fade direction="down" triggerOnce>
                    <h2 className="text-5xl font-extrabold mb-16 text-pink-400 drop-shadow-lg">
                        💬 Testimonials
                    </h2>
                </Fade>

                <div className="grid md:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <Fade direction="up" delay={i * 200} triggerOnce key={i}>
                            <div className="p-8 bg-[#0f172a] rounded-2xl shadow-lg">
                                <p className="text-lg text-gray-300 mb-6">“{t.text}”</p>
                                <h4 className="text-pink-400 font-bold">{t.name}</h4>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
}
