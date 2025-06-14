'use client';

import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';

export default function LoginPage() {

    const handleGoogleSignIn = () => signIn("google", { callbackUrl: "/" });
    const handleGithubSignIn = () => signIn("github", { callbackUrl: "/" });
    const handleFBSignIn = () => signIn("facebook", { callbackUrl: "/" });

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center px-4 py-16 text-white">

            <Fade direction="down" >

                <div className="lg:w-3xl w-full bg-gradient-to-tr from-[#334155] via-[#475569] to-[#64748b] p-10 rounded-3xl shadow-2xl border border-pink-400/20">

                    <h2 className="text-3xl font-extrabold text-center mb-10 text-pink-400">Login to K-Blogify</h2>

                    {/* Facebook */}
                    <button
                        onClick={handleFBSignIn}
                        className="w-full flex items-center justify-center gap-3 py-4 rounded-xl mb-6 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold text-lg shadow-lg"
                    >
                        <FaFacebookF className="text-xl" />
                        Sign in with Facebook
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-gray-400">OR</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Github */}
                    <button
                        onClick={handleGithubSignIn}
                        className="w-full flex items-center justify-center gap-3 py-4 rounded-xl mb-6 bg-gray-900 hover:bg-gray-700 transition text-white font-semibold text-lg shadow-lg"
                    >
                        <FaGithub className="text-xl" />
                        Sign in with GitHub
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-gray-400">OR</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Google */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 hover:brightness-110 transition text-black font-semibold text-lg shadow-lg"
                    >
                        <FaGoogle className="text-xl" />
                        Sign in with Google
                    </button>
                </div>
            </Fade>
        </section>
    );
}
