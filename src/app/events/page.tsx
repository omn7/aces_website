'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const UPCOMING_EVENTS = [
    {
        id: 1,
        title: 'Annual Tech Hackathon',
        date: 'Oct 15, 2026',
        time: '10:00 AM - 10:00 AM (Next Day)',
        location: 'Main Auditorium',
        description: 'Join us for 24 hours of coding, collaboration, and innovation. Build solutions to real-world problems and win exciting prizes.',
        link: '/events/hackathon'
    },
    {
        id: 2,
        title: 'AI & Machine Learning Workshop',
        date: 'Nov 05, 2026',
        time: '2:00 PM - 5:00 PM',
        location: 'Lab 4, CS Block',
        description: 'A hands-on workshop covering the basics of neural networks and implementing your first model using Python and TensorFlow.',
        link: '/events/ai-workshop'
    }
];

const PAST_EVENTS = [
    {
        id: 8,
        title: 'Marathi Rajbhasha Din & Kavi Sammelan',
        date: 'Feb 27, 2026',
        time: '1:30 PM - 4:00 PM',
        location: 'Central Seminar Hall',
        description: 'Celebrating Marathi Rajbhasha Din with a Kavi Sammelan (Poetry) Competition. Featuring guest speaker Prof. Vinayak Sathe, organized by Bharati Vidyapeeth’s College of Engineering, Lavale.',
        image: '/e3.png',
    },
    {
        id: 7,
        title: 'BVPL 2026',
        date: 'Mar 17, 2026',
        time: '2:30 PM - 5:00 PM',
        location: 'College Cricket Ground',
        description: 'The Department of Computer Engineering presents the Bharati Vidyapeeth Premier League (BVPL). Let the cricket fever begin!',
        image: '/e2.png',
    },
    {
        id: 6,
        title: 'Inter College Design Competition',
        date: 'Mar 24 - 27, 2026',
        time: 'Offline Round (Contact Coordinators)',
        location: 'Bharati Vidyapeeth’s College of Engineering Lavale, Pune',
        description: 'A design competition focused on Using AI-Powered Tools for UI/UX Design in SaaS Web Applications. Open to individuals and teams of up to 3 members.',
        image: '/e1.png',
    }
];

function EventCard({ event, isUpcoming = false }: { event: any, isUpcoming?: boolean }) {
    const [isFlyerOpen, setIsFlyerOpen] = useState(false);

    return (
        <>
        <Card className="flex flex-col h-full">
            <div className="h-48 bg-gray-200 relative flex items-center justify-center group cursor-pointer" onClick={() => event.image && setIsFlyerOpen(true)}>
                {event.image ? (
                    <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                ) : (
                    <span className="text-gray-400 font-medium">Event Image</span>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                    </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>

                <div className="mt-auto flex flex-col gap-3">
                    {event.image && (
                        <button 
                            onClick={(e) => { e.stopPropagation(); setIsFlyerOpen(true); }}
                            className="inline-flex justify-center items-center w-full px-4 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all cursor-pointer"
                        >
                            Show Flyer
                        </button>
                    )}
                    {isUpcoming && event.link && (
                        <Link
                            href={event.link}
                            className="inline-flex justify-center items-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
                        >
                            Register Now
                        </Link>
                    )}
                </div>
            </div>
        </Card>

        {isFlyerOpen && event.image && (
            <div 
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" 
                onClick={() => setIsFlyerOpen(false)}
                style={{ animation: 'fadeIn 0.2s ease-out' }}
            >
                <div 
                    className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                    onClick={e => e.stopPropagation()}
                    style={{ animation: 'popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                    <div className="p-4 border-b flex justify-between items-center bg-gray-50 shrink-0">
                        <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                        <button 
                            onClick={() => setIsFlyerOpen(false)}
                            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>
                    <div className="relative w-full h-[70vh] bg-gray-100 flex items-center justify-center p-4">
                        <div className="relative w-full h-full">
                            <Image src={event.image} alt={event.title} fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default function EventsPage() {
    return (
        <>
            <div className="bg-gray-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Events</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our upcoming workshops, seminars, and hackathons, and browse through our past successful events.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    Coming Soon
                </h2>
                <div className="flex items-center justify-center py-16 px-4 bg-white rounded-2xl border border-gray-100 shadow-sm glass">
                    <p className="text-xl text-gray-500 font-medium text-center">New events are being planned. Stay tuned!</p>
                </div>
            </SectionWrapper>

            <SectionWrapper alternate>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-gray-400 rounded-full"></span>
                    Past Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PAST_EVENTS.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
