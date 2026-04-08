import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Team \u2014 ACES BVCOE Core Committee & Department Heads',
    description:
        'Meet the ACES BVCOE team \u2014 the dedicated student leaders, core committee members, and department heads driving innovation at Bharati Vidyapeeth College of Engineering, Pune Lavale.',
    keywords: [
        'ACES BVCOE team',
        'ACES core committee',
        'BVCOE student leaders',
        'ACES President Vice President',
        'computer engineering department team',
        'BVCOE student committee 2025-26',
        'Bharati Vidyapeeth student leaders',
        'ACES cultural technical sports team',
    ],
    alternates: { canonical: 'https://acesbvcoel.com/team' },
    openGraph: {
        title: 'Our Team \u2014 ACES BVCOE | Core Committee & Department Heads',
        description:
            'Meet the passionate student leaders of ACES at Bharati Vidyapeeth College of Engineering, Pune \u2014 driving technical, cultural, and sports initiatives.',
        url: 'https://acesbvcoel.com/team',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ACES BVCOE Team' }],
    },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
