import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] border-t border-white/10 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/aceslogo.png"
                            alt="ACES Logo"
                            width={52}
                            height={52}
                            className="w-13 h-13 object-contain drop-shadow-sm"
                        />
                        <span className="text-2xl font-black text-red-500 tracking-tight">ACES</span>
                    </Link>
                    <p className="text-sm leading-relaxed">
                        Association of Computer Engineering Students — Empowering innovation, collaboration, and technical excellence at Bharati Vidyapeeth College of Engineering, Pune.
                    </p>
                    {/* Social Icons */}
                    <div className="flex items-center gap-3 mt-1">
                        <Link href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-colors">
                            <Instagram className="w-4 h-4" />
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-colors">
                            <Facebook className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-base font-bold text-white mb-5 uppercase tracking-widest text-xs">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                        <li><Link href="/events" className="hover:text-emerald-400 transition-colors">Events</Link></li>
                        <li><Link href="/team" className="hover:text-emerald-400 transition-colors">Our Team</Link></li>
                        <li><Link href="/gallery" className="hover:text-emerald-400 transition-colors">Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-base font-bold text-white mb-5 uppercase tracking-widest text-xs">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>Bharati Vidyapeeth College of Engineering, Pune Lavale</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                            <span>+91-9146573033</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                            <span>acesbvcoel2012@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-1 text-center text-xs text-slate-500">
                    <span>&copy; {new Date().getFullYear()} Association of Computer Engineering Students. All rights reserved.</span>
                    <span>Website built by <Link href="https://www.linkedin.com/in/omnarkhede/" target="_blank" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">Om Narkhede</Link> &amp; <Link href="https://www.linkedin.com/in/shivam-murkute-a89934336/" target="_blank" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">Shivam Murkute</Link></span>
                </div>
            </div>
        </footer>
    );
}
