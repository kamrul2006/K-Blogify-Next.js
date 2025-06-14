'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaPenFancy, FaBlog, FaInfoCircle, FaSignInAlt, FaMobileAlt } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home', icon: <FaHome /> },
        { href: '/posts', label: 'Posts', icon: <FaBlog /> },
        { href: '/create', label: 'Write', icon: <FaPenFancy /> },
        { href: '/about', label: 'About', icon: <FaInfoCircle /> },
        { href: '/contact', label: 'Contact', icon: <FaMobileAlt /> },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-black/30 backdrop-blur-lg text-white shadow-lg fixed w-full z-50 transition duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-3xl font-extrabold tracking-wide select-none drop-shadow-lg">
                    <span className="text-pink-300">K</span>-Blogify
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-center space-x-8">
                    {navLinks.map(({ href, label, icon }) => {
                        const isActive = pathname === href;
                        return (
                            <Link key={href} href={href} className="group relative">
                                <div
                                    className={`flex flex-col items-center justify-center p-3 rounded-full transition duration-300 ${isActive ? 'bg-pink-600 text-yellow-400 shadow-lg' : 'hover:bg-pink-300/20'
                                        }`}
                                >
                                    <div className="text-2xl">{icon}</div>
                                    <span className="absolute opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-8 text-sm font-semibold text-white transition-all duration-300">
                                        {label}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Login Button */}
                <div className="hidden md:flex">
                    <Link href={'/login'}>
                        <button className="ml-6 bg-pink-300 text-purple-800 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 transition duration-300 select-none">
                            <FaSignInAlt className="inline-block mr-2" /> Log In
                        </button>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} aria-label="Toggle menu" className="focus:outline-none">
                        {isOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-br from-purple-800 via-pink-700 to-pink-500 text-white px-6 py-6 space-y-6 shadow-lg">
                    {navLinks.map(({ href, label, icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex items-center justify-center gap-3 text-xl font-semibold hover:text-pink-300 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {icon} {label}
                        </Link>
                    ))}

                    <button className="w-full bg-pink-300 text-purple-800 font-semibold py-3 rounded-full shadow-lg hover:bg-pink-400 transition duration-300 select-none">
                        <FaSignInAlt className="inline-block mr-2" /> Log In
                    </button>
                </div>
            )}
        </nav>
    );
}
