'use client';

import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link';

// Dummy posts data (replace with your RTK Query data later)
const posts = [
    {
        id: 1,
        title: 'Mastering React.js with AI Assistance',
        excerpt: 'Learn how AI tools can improve your React development workflow.',
        date: 'June 10, 2025',
        tags: ['React.js', 'AI', 'Productivity'],
        author: 'Kamrul Islam Apurba',
        readTime: '5 min read',
        category: 'Frontend',
        image: '/post.jpg',
    },
    {
        id: 2,
        title: 'Exploring Next.js 14 Features',
        excerpt: 'Next.js 14 introduces new app directory features, server components and more.',
        date: 'June 8, 2025',
        tags: ['Next.js', 'Web Development'],
        author: 'John Doe',
        readTime: '4 min read',
        category: 'Full Stack',
        image: '/post.jpg',
    },
    {
        id: 3,
        title: 'Building Full Stack Apps with MERN',
        excerpt: 'Learn how to combine MongoDB, Express, React, and Node.js to create full-stack web apps.',
        date: 'June 5, 2025',
        tags: ['MERN', 'Full Stack', 'MongoDB'],
        author: 'Sarah Ahmed',
        readTime: '6 min read',
        category: 'Backend',
        image: '/post.jpg',
    },
    {
        id: 4,
        title: 'Designing with TailwindCSS in 2025',
        excerpt: 'Take your frontend designs to the next level using modern TailwindCSS best practices.',
        date: 'June 2, 2025',
        tags: ['TailwindCSS', 'Design', 'Frontend'],
        author: 'Kamrul Islam Apurba',
        readTime: '3 min read',
        category: 'UI/UX',
        image: '/post.jpg',
    },
    {
        id: 5,
        title: 'AI Content Writing for Blogs',
        excerpt: 'How AI-powered writing tools are revolutionizing content creation for bloggers.',
        date: 'June 1, 2025',
        tags: ['AI', 'Content Creation', 'Blogs'],
        author: 'Jane Smith',
        readTime: '7 min read',
        category: 'AI Tools',
        image: '/post.jpg',
    },
    {
        id: 6,
        title: 'Deploying Next.js Apps on Vercel',
        excerpt: 'A step-by-step guide to smoothly deploy your Next.js projects with Vercel.',
        date: 'May 30, 2025',
        tags: ['Deployment', 'Next.js', 'Vercel'],
        author: 'Mark Wilson',
        readTime: '4 min read',
        category: 'DevOps',
        image: '/post.jpg',
    },
];

export default function LatestPosts() {
    return (
        <section className="bg-[#0f172a] text-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <Fade direction="down" >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-pink-400 drop-shadow-lg">
                        📝 Latest Posts
                    </h2>
                </Fade>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <Fade key={post.id} delay={index * 100} >
                            <div className="bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] rounded-2xl shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                                <div className="relative h-60 w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:brightness-75 transition duration-300"
                                    />
                                    <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-semibold py-1 px-3 rounded-full shadow">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                                        <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.map((tag, i) => (
                                            <span key={i} className="bg-pink-500 text-white text-xs font-medium py-1 px-3 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-center text-sm text-gray-400">
                                        <div>
                                            <p>{post.author}</p>
                                            <p>{post.date} • {post.readTime}</p>
                                        </div>
                                        <Link href={`/posts/${post.id}`}>
                                            <span className="text-pink-400 font-semibold hover:underline cursor-pointer">
                                                Read →
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
}
