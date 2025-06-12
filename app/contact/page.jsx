'use client';

import { Fade, Zoom } from 'react-awesome-reveal';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-24 px-5 md:px-10 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <Fade direction="down"   >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-pink-400 drop-shadow-lg">
                        Get in Touch with <span className="text-yellow-300">K-Blogify</span>
                    </h1>
                </Fade>

                <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center lg:justify-around ">

                    {/* Contact Info */}
                    <Fade direction="left" className='w-1/2'>
                        <div className="flex-1 bg-gradient-to-tr from-[#1e293b] via-[#334155] to-[#475569] p-10 rounded-3xl shadow-xl border border-pink-500">
                            <h2 className="text-3xl font-bold mb-8 text-yellow-300">Contact Information</h2>
                            <div className="space-y-6 text-lg text-gray-300">
                                <div className="flex items-center gap-4">
                                    <FaEnvelope className="text-pink-400 text-2xl" />
                                    <span className="break-all">support@kblogify.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaPhone className="text-pink-400 text-2xl" />
                                    +880-123-456-789
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaMapMarkerAlt className="text-pink-400 text-2xl" />
                                    Dhaka, Bangladesh
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="mt-10 flex gap-6">
                                <a href="#" className="p-4 bg-pink-500 rounded-full hover:bg-pink-600 transition shadow-lg">
                                    <FaFacebookF className="text-xl" />
                                </a>
                                <a href="#" className="p-4 bg-pink-500 rounded-full hover:bg-pink-600 transition shadow-lg">
                                    <FaTwitter className="text-xl" />
                                </a>
                                <a href="#" className="p-4 bg-pink-500 rounded-full hover:bg-pink-600 transition shadow-lg">
                                    <FaLinkedinIn className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </Fade>

                    {/* Contact Form */}
                    <Fade direction="right" className='w-full'>
                        <div className="flex-1 bg-gradient-to-tr from-[#334155] via-[#475569] to-[#64748b] p-10 rounded-3xl shadow-xl border border-pink-500 ">
                            <h2 className="text-3xl font-bold mb-8 text-yellow-300">Send us a Message</h2>
                            <form className="space-y-6 ">
                                <div>
                                    <label className="block mb-2 text-gray-300 font-semibold">Name</label>
                                    <input type="text" className="w-full p-4 rounded-xl bg-[#1e293b] text-white focus:outline-none focus:ring-4 focus:ring-pink-500 transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-gray-300 font-semibold">Email</label>
                                    <input type="email" className="w-full p-4 rounded-xl bg-[#1e293b] text-white focus:outline-none focus:ring-4 focus:ring-pink-500 transition-all" placeholder="you@example.com" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-gray-300 font-semibold">Message</label>
                                    <textarea className="w-full p-4 rounded-xl bg-[#1e293b] text-white focus:outline-none focus:ring-4 focus:ring-pink-500 transition-all" rows="5" placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transition text-white text-lg shadow-lg">
                                    🚀 Send Message
                                </button>
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}
