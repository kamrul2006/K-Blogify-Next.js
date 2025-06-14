'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Fade } from 'react-awesome-reveal';
import { FaHeart, FaUserCircle, FaClock } from 'react-icons/fa';

const MySwal = withReactContent(Swal);

export default function PostsPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === 'authenticated') {
            const fetchPosts = async () => {
                try {
                    const res = await fetch('http://localhost:5000/Posts');
                    const data = await res.json();
                    setPosts(data.reverse());
                } catch (err) {
                    console.error(err);
                    await MySwal.fire({
                        icon: 'error',
                        title: 'Failed to load posts!',
                    });
                } finally {
                    setLoading(false);
                }
            };

            fetchPosts();
        }
    }, [status]);

    const handleReadMore = (post) => {
        MySwal.fire({
            title: `<strong>${post.title}</strong>`,
            html: `
                <p><b>Author:</b> ${post.author}</p>
                <p><b>Email:</b> ${post.email || 'N/A'}</p>
                <p><b>Tags:</b> ${(post.tags || []).join(', ')}</p>
                <p><b>Published:</b> ${new Date(post.createdAt).toLocaleString()}</p>
                <hr/>
                <p style="text-align: left">${post.content}</p>
            `,
            width: '60%',
            showCloseButton: true,
            showConfirmButton: false,
            scrollbarPadding: false,
        });
    };

    // If user not logged in
    if (status === 'unauthenticated') {
        return (
            <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white flex items-center justify-center px-4">

                <div className="bg-[#1e293b] border border-pink-300/20 shadow-xl rounded-3xl p-10 max-w-lg text-center space-y-6">
                    <h1 className="text-4xl font-bold text-pink-400">You are not logged in</h1>
                    <p className="text-gray-300 text-lg">Please login to access and explore all posts.</p>
                    <button
                        onClick={() => router.push('/login')}
                        className="bg-pink-500 hover:bg-pink-600 transition text-white font-semibold py-3 px-8 rounded-full text-lg"
                    >
                        Login Now
                    </button>
                </div>
            </section>
        );
    }

    // While loading session data or fetching posts
    if (loading || status === 'loading') {
        return (
            <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white flex items-center justify-center text-2xl font-semibold">
                Loading...
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-16 lg:pt-20 px-4 md:px-12 lg:px-24">
            <Fade direction="down">
                <h1 className="text-5xl font-extrabold text-center mb-16 text-pink-400 drop-shadow-lg">
                    Social Feed
                </h1>
            </Fade>

            {posts.length === 0 ? (
                <div className="text-center text-xl font-semibold text-gray-400">No posts found.</div>
            ) : (
                <div className="flex flex-col gap-10">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-pink-400/10 hover:border-pink-400/30 transition">

                            <div className="flex items-center mb-4">
                                <FaUserCircle className="text-4xl text-pink-400 mr-3" />
                                <div>
                                    <h3 className="font-semibold text-lg">{post.author}</h3>
                                    <p className="text-sm text-gray-400 flex items-center gap-1">
                                        <FaClock className="text-pink-300" /> {new Date(post.createdAt).toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold mb-3 text-pink-300">{post.title}</h2>

                            <p className="text-gray-300 mb-4 line-clamp-4">{post.content}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {(post.tags || []).map((tag, i) => (
                                    <span key={i} className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-xs font-semibold">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center border-t border-pink-400/10 pt-4">
                                <div className="flex gap-6 text-xl text-pink-400">
                                    <FaHeart className="cursor-pointer hover:text-pink-300 transition" />
                                </div>
                                <button
                                    onClick={() => handleReadMore(post)}
                                    className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
