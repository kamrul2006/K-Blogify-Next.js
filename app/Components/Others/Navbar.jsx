'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/posts', label: 'Posts' },
        { href: '/create', label: 'Write' },
        { href: '/about', label: 'About' },
    ];

    return (
        <nav className="bg-black/40 backdrop-blur-md text-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-3xl font-extrabold tracking-wide select-none drop-shadow-lg">
                    <span className="text-yellow-300">K</span>-Blogify
                </Link>

                {/* Desktop Menu - Centered Links */}
                <div className="hidden md:flex flex-1 justify-center space-x-12">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="
                relative
                text-lg font-medium
                text-white
                transition-colors duration-300
                hover:text-yellow-300
                after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-300 after:transition-[width] after:duration-300
                hover:after:w-full
              "
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Right Side Login Button */}
                <div className="hidden md:flex">
                    <button className="ml-6 bg-yellow-300 text-purple-800 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 select-none">
                        Log In
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="focus:outline-none"
                    >
                        {isOpen ? (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-purple-800 via-pink-700 to-yellow-500 text-white px-6 py-6 space-y-6 shadow-lg">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="block text-center text-xl font-semibold hover:text-yellow-300 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                    <button className="w-full bg-yellow-300 text-purple-800 font-semibold py-3 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 select-none">
                        Log In
                    </button>
                </div>
            )}
        </nav>
    );
}
