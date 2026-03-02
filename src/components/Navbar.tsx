'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu } from 'lucide-react';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar pill */}
            <div className="fixed w-full z-50 top-4 sm:top-6 px-4 flex justify-center">
                <nav className="w-full max-w-4xl bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-4 py-1.5 flex items-center justify-between transition-all">

                    {/* Logo */}
                    <Link href="/" className="pl-2 flex items-center gap-3" onClick={() => setIsOpen(false)}>
                        <Image
                            src="/aceslogo.png"
                            alt="ACES Logo"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain drop-shadow-sm"
                        />
                        <span className="text-xl font-black text-red-600 tracking-tight mb-1">
                            ACES
                        </span>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
                        ))}
                    </div>

                    {/* Desktop contact button */}
                    <div className="hidden md:flex items-center pr-2">
                        <Link
                            href="/contact"
                            className="text-sm font-semibold bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="md:hidden flex items-center justify-center text-gray-800 hover:text-primary transition-colors focus:outline-none p-1.5 rounded-full hover:bg-gray-100"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        type="button"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </nav>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="fixed inset-0 z-40 flex flex-col" onClick={() => setIsOpen(false)}>
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                    {/* Menu panel slides from top */}
                    <div
                        className="relative mt-24 mx-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-4 space-y-1">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:text-primary hover:bg-emerald-50 font-semibold transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div className="border-t border-gray-100 p-4">
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center w-full py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
        >
            {children}
        </Link>
    );
}
