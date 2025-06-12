'use client';

import { Fade } from 'react-awesome-reveal';

export default function NewsletterSection() {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#334155] via-[#475569] to-[#64748b]">
            <div className="max-w-4xl mx-auto text-center">
                <Fade direction="down" triggerOnce>
                    <h2 className="text-5xl font-extrabold mb-6 text-pink-400 drop-shadow-lg">📬 Stay Updated</h2>
                    <p className="text-lg text-gray-300 mb-10">
                        Subscribe to our newsletter to receive the latest blog posts and AI-powered writing tips directly to your inbox.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="py-3 border border-pink-300 px-6 rounded-full text-gray-900 w-full sm:w-96"
                        />
                        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                            Subscribe
                        </button>
                    </form>
                </Fade>
            </div>
        </section>
    );
}
