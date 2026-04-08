import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Events \u2014 ACES BVCOE Workshops, Hackathons & Seminars',
    description:
        'Explore upcoming and past events by ACES at Bharati Vidyapeeth College of Engineering, Pune. Attend hackathons, AI/ML workshops, IEEE conferences, cultural events, and more. Register now!',
    keywords: [
        'ACES BVCOE events',
        'BVCOE hackathon 2026',
        'ACES workshops Pune',
        'IEEE ICRAES 2026',
        'computer engineering events Pune',
        'BVCOE seminars',
        'ACES upcoming events',
        'Students Felicitation BVCOE',
        'BE farewell BVCOE',
        'Bharati Vidyapeeth events',
        'Pune engineering college events',
    ],
    alternates: { canonical: 'https://acesbvcoel.com/events' },
    openGraph: {
        title: 'Events \u2014 ACES BVCOE | Workshops, Hackathons & Conferences',
        description:
            'Upcoming and past events by ACES at Bharati Vidyapeeth College of Engineering, Pune — including IEEE ICRAES 2026, workshops, sports, and cultural events.',
        url: 'https://acesbvcoel.com/events',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ACES BVCOE Events' }],
    },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
