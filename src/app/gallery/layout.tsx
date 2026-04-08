import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery — ACES BVCOE Events & Moments',
    description:
        'Browse the ACES BVCOE gallery — photos and memories from hackathons, workshops, seminars, alumni meetups, sports events, and cultural celebrations at Bharati Vidyapeeth College of Engineering, Pune.',
    keywords: [
        'ACES BVCOE gallery',
        'BVCOE events photos',
        'computer engineering events Pune',
        'ACES hackathon photos',
        'BVCOE student events gallery',
    ],
    alternates: { canonical: 'https://acesbvcoel.com/gallery' },
    openGraph: {
        title: 'Gallery — ACES BVCOE Events & Moments',
        description:
            'A visual journey through ACES events, workshops, and memorable moments at Bharati Vidyapeeth College of Engineering, Pune.',
        url: 'https://acesbvcoel.com/gallery',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ACES BVCOE Gallery' }],
    },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
