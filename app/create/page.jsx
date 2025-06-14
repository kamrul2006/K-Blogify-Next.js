'use client';

import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaPenFancy, FaUser, FaHeading, FaCheckCircle } from 'react-icons/fa';

export default function CreatePostPage() {
    const [form, setForm] = useState({ title: '', content: '', author: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');

        try {
            const res = await fetch('http://localhost:5000/Posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSuccess('Post published successfully!');
                setForm({ title: '', content: '', author: '' });
            } else {
                const data = await res.json();
                alert(data.message || 'Something went wrong');
            }
        } catch (err) {
            console.error(err);
            alert('Error creating post');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-16 px-6 md:px-12 lg:px-24">
            <Fade direction="down" triggerOnce>
                <h1 className="text-5xl font-extrabold text-center mb-16 text-pink-400 drop-shadow-lg">
                    📝 Write A New Blog
                </h1>
            </Fade>

            <div className="max-w-4xl mx-auto bg-gradient-to-tr from-[#334155] via-[#475569] to-[#64748b] p-12 rounded-3xl shadow-2xl border border-pink-400/20">
                <form onSubmit={handleSubmit} className="space-y-10">

                    {/* Title */}
                    <div className="relative">
                        <label className="block mb-3 text-lg text-gray-300 font-semibold">Post Title</label>
                        <div className="flex items-center">
                            <FaHeading className="absolute ml-4 text-pink-400 text-xl" />
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                className="w-full pl-12 p-4 rounded-xl bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-lg"
                                placeholder="Enter post title"
                                required
                            />
                        </div>
                    </div>

                    {/* Author */}
                    <div className="relative">
                        <label className="block mb-3 text-lg text-gray-300 font-semibold">Author Name</label>
                        <div className="flex items-center">
                            <FaUser className="absolute ml-4 text-pink-400 text-xl" />
                            <input
                                type="text"
                                name="author"
                                value={form.author}
                                onChange={handleChange}
                                className="w-full pl-12 p-4 rounded-xl bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-lg"
                                placeholder="Author Name"
                                required
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                        <label className="block mb-3 text-lg text-gray-300 font-semibold">Content</label>
                        <div className="flex items-start">
                            <FaPenFancy className="absolute ml-4 mt-4 text-pink-400 text-xl" />
                            <textarea
                                name="content"
                                value={form.content}
                                onChange={handleChange}
                                rows="8"
                                className="w-full pl-12 p-4 rounded-xl bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-lg"
                                placeholder="Write your blog content..."
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 hover:brightness-110 shadow-lg transition"
                    >
                        {loading ? 'Publishing...' : '🚀 Publish Post'}
                    </button>

                    {/* Success Message */}
                    {success && (
                        <div className="flex items-center justify-center gap-2 text-green-400 font-semibold text-lg mt-4">
                            <FaCheckCircle className="text-2xl" /> {success}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
