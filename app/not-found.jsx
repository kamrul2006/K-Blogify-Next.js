'use client';

import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

export default function NotFound() {
    return (
        <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] min-h-screen flex items-center justify-center text-white px-6">
            <div className="text-center max-w-2xl">

                <Fade direction="down" >
                    <div >
                        <Image
                            src="/404.png"
                            alt="404"
                            width={500}
                            height={300}
                            className="mx-auto"
                        />
                    </div>

                    <h2 className="text-2xl text-pink-600 md:text-3xl font-semibold mb-6">Oops! Page not found</h2>
                    <p className="text-lg text-gray-300 mb-10">
                        The page you're looking for doesn't exist or has been moved. Don’t worry, you can always go back to the homepage!
                    </p>

                    <Link href="/" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
                        Go Back Home
                    </Link>
                </Fade>

            </div>
        </section>
    );
}
