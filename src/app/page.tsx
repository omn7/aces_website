import Link from 'next/link';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import AnimatedTitle from '@/components/AnimatedTitle';
import TypingEffect from '@/components/TypingEffect';
import { Users, Calendar, Award, ArrowRight, Linkedin, Instagram, Facebook, Github, CheckCircle, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        ></div>

        {/* Overlays for readability and style */}
        <div className="absolute inset-0 bg-black/85 z-10 transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold text-gray-300 mb-8 tracking-normal shadow-lg uppercase text-center max-w-full">
            Bharati Vidyapeeth College Of Engineering Lavale Pune
          </div>
          <h1 className="font-montserrat text-4xl sm:text-6xl md:text-[5.5rem] font-extrabold tracking-tight leading-tight drop-shadow-2xl px-2">
            <span className="block text-lg sm:text-3xl md:text-4xl font-bold text-gray-400 mb-3 tracking-widest uppercase font-sans">
              Association of
            </span>
            <TypingEffect
              words={['Computer Engineering Students', 'Innovators & Creators', 'Future Engineers', 'Tech Leaders']}
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-white to-emerald-500 bg-[length:200%_auto] animate-gradient pb-2 drop-shadow-sm"
            />
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed font-light drop-shadow-md">
            Empowering innovation, collaboration, and technical excellence. Join a vibrant community of passionate tech enthusiasts.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/events"
              className="group relative flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-primary hover:bg-primary-dark overflow-hidden transition-all shadow-[0_0_20px_rgba(21,128,61,0.5)] hover:shadow-[0_0_30px_rgba(21,128,61,0.7)] hover:-translate-y-0.5 border border-emerald-400/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/join"
              className="flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 shadow-lg transition-all"
            >
              Join Us Today
            </Link>
          </div>
        </div>

      </section>

      {/* About Preview */}
      <SectionWrapper alternate pattern id="about-preview">
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6 sm:px-8">

          <div className="relative inline-block mb-8 mt-4 whitespace-nowrap">
            {/* Custom animated glowing blob specifically behind the text */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 rounded-full blur-xl opacity-50 animate-[gradient_3s_ease-in-out_infinite_alternate] mix-blend-multiply drop-shadow-xl -z-10"></div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-montserrat uppercase tracking-tight relative z-20">About ACES</h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-800 mb-8 leading-relaxed font-medium">
            The establishment of the Association of Computer Engineering Students (ACES) at Bharati Vidyapeeth’s College of Engineering Lavale on September 15, 2014, marked an important milestone for the students and faculty members involved. With a membership of over 200 students and 10 faculty members, ACES aims to enhance the overall educational experience and personal development of its members through various activities and programs.
          </p>

          <div className="flex justify-center gap-4 mb-10">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-primary hover:bg-emerald-600 hover:text-white transition-all hover:-translate-y-1 shadow-md hover:shadow-lg border border-emerald-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-primary hover:bg-emerald-600 hover:text-white transition-all hover:-translate-y-1 shadow-md hover:shadow-lg border border-emerald-200">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-primary hover:bg-emerald-600 hover:text-white transition-all hover:-translate-y-1 shadow-md hover:shadow-lg border border-emerald-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-primary hover:bg-emerald-600 hover:text-white transition-all hover:-translate-y-1 shadow-md hover:shadow-lg border border-emerald-200">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <Link href="/about" className="text-primary font-bold hover:text-emerald-800 inline-flex items-center group bg-white/50 px-6 py-2 rounded-full border border-primary/20 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm">
            Discover our mission
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Statistics Section */}
      <SectionWrapper pattern>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              { icon: Calendar, count: '50+', label: 'Events Organized', color: 'from-teal-500 to-emerald-500', bg: 'bg-teal-50', text: 'text-teal-600' },
              { icon: Users, count: '300+', label: 'Active Members', color: 'from-emerald-500 to-green-500', bg: 'bg-emerald-50', text: 'text-emerald-600' },
              { icon: Award, count: '20+', label: 'Workshops & Seminars', color: 'from-purple-500 to-pink-500', bg: 'bg-purple-50', text: 'text-purple-600' },
            ].map((stat, i) => (
              <Card key={i} className="group relative overflow-hidden p-5 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Subtle bg tint on hover */}
                <div className={`absolute inset-0 ${stat.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none rounded-2xl`} />
                {/* Icon */}
                <div className="flex justify-center mb-3 sm:mb-5">
                  <div className={`p-3 sm:p-4 rounded-2xl ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${stat.text}`} />
                  </div>
                </div>
                {/* Number */}
                <div className={`text-3xl sm:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2 tracking-tight`}>
                  {stat.count}
                </div>
                {/* Label */}
                <div className="text-gray-500 font-medium text-xs sm:text-base">{stat.label}</div>
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-2/3 bg-gradient-to-r ${stat.color} transition-all duration-500 rounded-full`} />
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Upcoming Event Highlight */}
      <SectionWrapper alternate>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Featured Event</h2>
              <p className="text-gray-500">Don't miss out on what's happening next.</p>
            </div>
            <Link href="/events" className="text-primary font-semibold hover:text-primary-dark hidden sm:flex items-center group">
              View all events
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <Card className="flex flex-col md:flex-row group overflow-hidden border-0 bg-white">
            <div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden">
              <Image
                src="/event1.png"
                alt="Ideathon 2026"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
            <div className="p-8 md:p-10 md:w-7/12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 mb-4 bg-emerald-50 px-3 py-1 rounded-full w-fit">
                <Calendar className="w-4 h-4" />
                Oct 15, 2026 • 10:00 AM
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Ideathon 2026</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join us for 24 hours of coding, collaboration, and innovation. Build solutions to real-world problems and win exciting prizes while networking with industry experts.
              </p>
              <div>
                <Link
                  href="/events/hackathon"
                  className="inline-flex justify-center items-center px-6 py-3 font-semibold rounded-full text-white bg-gray-900 hover:bg-primary shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/events" className="text-primary font-semibold hover:text-primary-dark flex justify-center items-center group">
              View all events
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
 
      {/* Students / Feedback Section */}
      <SectionWrapper alternate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="order-2 lg:order-2">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 mb-4 bg-emerald-50 px-3 py-1 rounded-full w-fit">
                Students Section
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-montserrat tracking-tight">We value your feedback!</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-primary font-semibold">ACES</strong> (Association of Computer Engineering Students), BVCOEL, is committed to creating meaningful technical experiences for our students. Your suggestions help us improve and design better events for the Computer Engineering community.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6">
                <p className="text-gray-900 font-semibold mb-4 text-lg">You can use this form to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Share feedback about past ACES events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Suggest new workshops, seminars, or technical sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Recommend speakers or industry experts you would like us to invite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Propose ideas for hackathons, coding competitions, or hands-on sessions</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-600 italic">
                If you have innovative ideas or topics you would like to see in future ACES initiatives, feel free to share them with us.
              </p>
            </div>

            {/* Logo side & Buttons */}
            <div className="order-1 lg:order-1 flex flex-col justify-center lg:justify-start items-center relative">
              <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl opacity-30 transform scale-150 -z-10"></div>
              <Image
                src="/aceslogo.png"
                alt="ACES Logo"
                width={280}
                height={280}
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 w-48 sm:w-64 md:w-72 lg:w-[280px] h-auto"
              />
              <h3 className="text-3xl sm:text-5xl font-extrabold text-[#e63946] tracking-widest uppercase font-montserrat drop-shadow-sm -mt-6 sm:-mt-8 relative z-10">ACES</h3>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 w-full justify-center lg:justify-start px-4 sm:px-0 relative z-20">
                <Link href="#" className="flex justify-center items-center gap-2 bg-primary hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-1 border border-transparent">
                  Feedback Form <ExternalLink className="w-4 h-4 ml-1" strokeWidth={2.5} />
                </Link>
                <Link href="#" className="flex justify-center items-center gap-2 bg-white hover:bg-emerald-50 text-primary px-8 py-3.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 border border-primary/20">
                  Suggest Events <ExternalLink className="w-4 h-4 ml-1" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </SectionWrapper>

   </>
  );
}
