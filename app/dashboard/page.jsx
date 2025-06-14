'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaHome, FaPenFancy, FaSignOutAlt, FaBlog, FaTrashAlt } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import Swal from 'sweetalert2';

export default function Dashboard() {
    const { data: session, status } = useSession();
    const user = session?.user;
    const router = useRouter();

    const [posts, setPosts] = useState([]);

    // Redirect if no user logged in
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/');
        }
    }, [status, router]);

    useEffect(() => {
        if (user?.email) {
            fetch('https://k-bolgify-server.vercel.app/Posts')
                .then(res => res.json())
                .then(data => {
                    const userPosts = data.filter(post => post.email === user.email);
                    setPosts(userPosts);
                })
                .catch(err => console.error(err));
        }
    }, [user]);

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e11d48',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, delete it!'
        });

        if (confirm.isConfirmed) {
            try {
                const res = await fetch(`https://k-bolgify-server.vercel.app/POSTS/${id}`, {
                    method: 'DELETE',
                });

                if (res.ok) {
                    setPosts(prev => prev.filter(post => post._id !== id));
                    Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
                } else {
                    Swal.fire('Error!', 'Failed to delete the post.', 'error');
                }
            } catch (err) {
                console.error(err);
                Swal.fire('Error!', 'Something went wrong.', 'error');
            }
        }
    };

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push('/');
    };

    // Format date from ISO string or timestamp
    const formatDateTime = (dateString) => {
        const options = {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        };
        return new Date(dateString).toLocaleString(undefined, options);
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white lg:pt-20">

            {/* Sidebar */}
            <aside className="w-fit lg:w-64 bg-[#1e293b] shadow-xl lg:p-6 p-2 flex flex-col justify-between sticky top-16 h-screen">
                <nav className="space-y-6">
                    <Link href="/" className="flex items-center gap-3 text-lg hover:text-pink-300 transition">
                        <FaHome />
                        <span className='hidden lg:block'> Home</span>
                    </Link>
                    <Link href="/create" className="flex items-center gap-3 text-lg hover:text-pink-300 transition">
                        <FaPenFancy />
                        <span className='hidden lg:block'>Create Post</span>
                    </Link>
                    <Link href="/posts" className="flex items-center gap-3 text-lg hover:text-pink-300 transition">
                        <FaBlog />
                        <span className='hidden lg:block'> Posts</span>
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="lg:w-full w-fit bg-pink-400 py-3 p-3 rounded-xl text-purple-900 font-bold flex items-center justify-center gap-3 hover:bg-pink-500 transition"
                    >
                        <FaSignOutAlt />
                        <span className='hidden lg:block'> Logout</span>
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                <Fade direction="down" triggerOnce>
                    <h1 className="text-4xl font-extrabold text-pink-300 mb-6">Your Posts</h1>
                </Fade>

                {/* User Info */}
                <div className="bg-[#1e293b] p-6 rounded-3xl shadow-lg border border-pink-300/20 mb-12">
                    {user ? (
                        <div className="flex items-center gap-6">
                            <img src={user?.image} alt="User" className="w-24 h-24 rounded-full shadow-xl border-4 border-pink-300" />
                            <div>
                                <h2 className="text-2xl font-bold">{user?.name}</h2>
                                <p className="text-gray-300">{user?.email}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-xl text-center text-red-400">User not logged in!</p>
                    )}
                </div>

                {/* Posts */}
                <Fade direction="right">
                    <div className="space-y-3">
                        {posts.length === 0 ? (
                            <p className="text-lg text-gray-300">You have no posts yet.</p>
                        ) : (
                            posts.map((post) => (
                                <div key={post._id} className="bg-gradient-to-tr from-[#334155] via-[#475569] to-[#64748b] p-6 rounded-2xl shadow-xl border border-pink-300/20 relative">
                                    <h3 className="text-xl font-bold mb-1 text-pink-300">{post.title}</h3>
                                    <p className="text-gray-400 mb-2 text-sm italic">{formatDateTime(post.createdAt || post.date || new Date())}</p>
                                    <p className="text-gray-300 mb-3">{post.content.substring(0, 100)}...</p>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {post.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-pink-400/20 text-pink-300 px-3 py-1 rounded-full text-sm">{tag}</span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => handleDelete(post._id)}
                                        className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition text-lg"
                                        aria-label="Delete Post"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </Fade>
            </main>
        </div>
    );
}
