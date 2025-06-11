'use client';

import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-300 py-10 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left: Logo and Copyright */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-pink-400 mb-2">K-Blogify</h2>
                    <p className="text-sm">&copy; {new Date().getFullYear()} K-Blogify. All rights reserved.</p>
                </div>

                {/* Middle: Navigation Links */}
                <nav className="flex gap-8 flex-wrap justify-center">
                    <a href="/" className="hover:text-pink-400 transition">Home</a>
                    <a href="/posts" className="hover:text-pink-400 transition">Blogs</a>
                    <a href="/create" className="hover:text-pink-400 transition">Write</a>
                    <a href="/about" className="hover:text-pink-400 transition">About</a>
                    <a href="/contact" className="hover:text-pink-400 transition">Contact</a>
                </nav>

                {/* Right: Social Icons */}
                <div className="flex gap-6 text-xl text-gray-400 hover:text-pink-400 transition">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:youremail@example.com" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
}
