import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            {/* Logo */}
            <div className="mb-6">
                <Image
                    src="/aceslogo.png"
                    alt="ACES Logo"
                    width={80}
                    height={80}
                    className="object-contain opacity-80"
                />
            </div>

            {/* 404 Display */}
            <div className="relative mb-4">
                <p className="text-[8rem] sm:text-[12rem] font-black text-gray-100 leading-none select-none">
                    404
                </p>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                        Page Not Found
                    </p>
                </div>
            </div>

            {/* Message */}
            <p className="text-gray-500 text-lg max-w-md mb-10 leading-relaxed">
                Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-emerald-700 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                    <Home className="w-4 h-4" />
                    Go Home
                </Link>
                <button
                    onClick={() => window.history.back()}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Go Back
                </button>
            </div>

            {/* Footer credit */}
            <p className="mt-16 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} ACES — Bharati Vidyapeeth College of Engineering, Pune
            </p>
        </div>
    );
}
