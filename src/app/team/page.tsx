'use client';

import { useState, useCallback } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Linkedin, Quote, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// ─── Ribbon particle types ─────────────────────────────────────────────────
interface Ribbon {
    id: number;
    x: number;
    color: string;
    tx: number;        // final horizontal drift (px)
    ty: number;        // final upward travel (px, negative = up)
    rotate: number;    // final rotation (deg)
    width: number;
    height: number;
    delay: number;
}

const RIBBON_COLORS = [
    '#f97316', '#facc15', '#22c55e', '#3b82f6',
    '#a855f7', '#ec4899', '#ef4444', '#06b6d4',
    '#10b981', '#f43f5e', '#8b5cf6', '#0ea5e9',
];

function randBetween(a: number, b: number) {
    return a + Math.random() * (b - a);
}

function useRibbons() {
    const [ribbons, setRibbons] = useState<Ribbon[]>([]);

    const trigger = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        // Always burst from the top-center of the card
        const rect = e.currentTarget.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = 20; // near top
        const burst: Ribbon[] = Array.from({ length: 20 }, (_, i) => ({
            id: Date.now() + i,
            x: cx + randBetween(-20, 20),
            color: RIBBON_COLORS[i % RIBBON_COLORS.length],
            tx: randBetween(-80, 80),
            ty: randBetween(-110, -50),
            rotate: randBetween(-540, 540),
            width: randBetween(4, 7),
            height: randBetween(18, 34),
            delay: randBetween(0, 0.08),
        }));
        setRibbons(burst);
        setTimeout(() => setRibbons([]), 2800);
    }, []);

    return { ribbons, trigger };
}

// ─── Ribbon overlay ────────────────────────────────────────────────────────
function RibbonOverlay({ ribbons }: { ribbons: Ribbon[] }) {
    if (!ribbons.length) return null;
    return (
        <div className="absolute inset-0 pointer-events-none overflow-visible z-50" aria-hidden>
            {ribbons.map(r => (
                <span
                    key={r.id}
                    style={{
                        position: 'absolute',
                        left: r.x,
                        top: 20,
                        width: r.width,
                        height: r.height,
                        background: r.color,
                        borderRadius: '2px',
                        transformOrigin: 'center top',
                        ['--tx' as string]: `${r.tx}px`,
                        ['--ty' as string]: `${r.ty}px`,
                        ['--rot' as string]: `${r.rotate}deg`,
                        animationDelay: `${r.delay}s`,
                    } as React.CSSProperties}
                    className="ribbon-strip"
                />
            ))}
            <style>{`
                .ribbon-strip {
                    animation: ribbon-fly 2.5s cubic-bezier(.22,.61,.36,1) forwards;
                }
                @keyframes ribbon-fly {
                    0%   { transform: translate(-50%, 0) scaleY(0.2) rotate(0deg); opacity: 1; }
                    60%  { opacity: 1; }
                    100% { transform: translate(calc(-50% + var(--tx)), var(--ty)) scaleY(1) rotate(var(--rot)); opacity: 0; }
                }
            `}</style>
        </div>
    );
}

// ─── Member card (birthday ones get ribbon animation on click) ─────────────
function BirthdayMemberCard({ member, idx }: {
    member: { name: string; role: string; photo: string | null; birthday?: boolean };
    idx: number;
}) {
    const { ribbons, trigger } = useRibbons();

    return (
        <div
            key={idx}
            onClick={member.birthday ? trigger : undefined}
            className={`relative flex flex-col items-center text-center bg-gray-50 rounded-2xl p-3 sm:p-4 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all ${
                member.birthday ? 'cursor-pointer select-none' : ''
            }`}
        >
            <RibbonOverlay ribbons={ribbons} />


            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2 sm:mb-3 shrink-0 ring-2 ring-emerald-200">
                {member.photo ? (
                    <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                    />
                ) : (
                    <div className="w-full h-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                        {member.name.split(' ').filter((w: string) => !['Mr.', 'Ms.', 'Dr.'].includes(w)).slice(0, 2).map((w: string) => w[0]).join('')}
                    </div>
                )}
            </div>
            <p className="text-xs font-semibold text-gray-900 leading-tight mb-0.5">{member.name}</p>
            <p className="text-xs text-emerald-600 font-medium mb-2">{member.role}</p>
            <Link
                href="#"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
                aria-label={`LinkedIn profile for ${member.name}`}
                onClick={e => e.stopPropagation()}
            >
                <Linkedin className="w-4 h-4" />
            </Link>
        </div>
    );
}

// ─── Core Committee card — birthday ones get confetti on click ──────────────
function CoreMemberCard({ member }: {
    member: { id: number; name: string; role: string; photo: string | null; linkedin: string; birthday?: boolean };
}) {
    const { ribbons, trigger } = useRibbons();

    return (
        <Card
            className="text-center group w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-[250px] max-w-[300px]"
        >
            <div
                className={`relative p-6 ${ member.birthday ? 'cursor-pointer select-none' : '' }`}
                onClick={member.birthday ? trigger : undefined}
            >
                <RibbonOverlay ribbons={ribbons} />



                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative ring-4 ring-emerald-50">
                    {member.photo ? (
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl bg-emerald-100 text-emerald-700">
                            {member.name.split(' ').filter(w => !['Mr.', 'Ms.', 'Dr.'].includes(w)).slice(0, 2).map(w => w[0]).join('')}
                        </div>
                    )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                <Link
                    href={member.linkedin}
                    target="_blank"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-[#0A66C2] transition-colors"
                    aria-label={`LinkedIn profile for ${member.name}`}
                    onClick={e => e.stopPropagation()}
                >
                    <Linkedin className="w-5 h-5" />
                </Link>
            </div>
        </Card>
    );
}

const TEACHING_STAFF = [
    { name: 'Dr. Uday Chandrkant Patkar', designation: 'HOD & Associate Professor', photo: '/team/teaching%20and%20non-teaching%20staff/dr uday patkar.png' },
    { name: 'Mrs. Parinita Jagannathrao Chate', designation: 'Assistant Professor', photo: '/team/teaching%20and%20non-teaching%20staff/prof preniti chate.png' },
    { name: 'Dr. Ajitkumar Rajaram Patil', designation: 'Assistant Professor', photo: '/team/teaching%20and%20non-teaching%20staff/dr ajit patil.png' },
    { name: 'Mr. Yogesh Vasant Kadam', designation: 'Assistant Professor', photo: '/team/teaching%20and%20non-teaching%20staff/prof yogesh kadam.png' },
    { name: 'Dr. Sanket Sunil Pawar', designation: 'Assistant Professor', photo: '/team/teaching%20and%20non-teaching%20staff/prof sanket pawar.png' },
    { name: 'Mrs. Kumkum Bala', designation: 'Assistant Professor', photo: '/team/teaching%20and%20non-teaching%20staff/prof kumkum bala.png' },
    { name: 'Mrs. Tejal Harshal Patil', designation: 'Assistant Professor', photo: '/team/tejal patil .png' },
    { name: 'Ms. Shubhangi Sunil Satav', designation: 'Assistant Professor', photo: '/team/teaching%20and%20non-teaching%20staff/prof shubhanji satav.png' },
    { name: 'Ms. Ashwini Dnyaneshwr Bhapkar', designation: 'Assistant Professor', photo: '/team/teaching%20and%20non-teaching%20staff/prof ashwani bhapkar.png' },
    { name: 'Mr. Sujit Baliram Bhonkar', designation: 'Assistant Professor', photo: '/team/teaching%20and%20non-teaching%20staff/prof sujit bhokar.png' },
    { name: 'Ms. Ashwini Prakash Nikam', designation: 'Assistant Professor', photo: '/team/teaching%20and%20non-teaching%20staff/prof ashwani nikam.png' },
    { name: 'Ms. Archana Chavan', designation: 'Assistant Professor', photo: '/team/teaching%20and%20non-teaching%20staff/Prof.Archana Chavan.png' },
];

const NON_TEACHING_STAFF = [
    { name: 'Mr. Sandip Jadhav', designation: 'Lab Assistant', photo: '/team/teaching%20and%20non-teaching%20staff/Mr.Sandip Jadhav.png' },
    { name: 'Mr. Prashant Saundankar', designation: 'Head Clerk', photo: '/team/teaching%20and%20non-teaching%20staff/Mr.Prashant Saundankar.png' },
    { name: 'Mr. Shubham Kole', designation: 'Head Clerk', photo: '/team/teaching%20and%20non-teaching%20staff/Shubham Kole  .png' },
    { name: 'Mr. Baburao Tawar', designation: 'Peon', photo: '/team/teaching%20and%20non-teaching%20staff/Mr.Baburao Tawar .png' },
    { name: 'Mr. Sujal Madane', designation: 'Peon', photo: '/team/teaching%20and%20non-teaching%20staff/Mr.Sujal Madane .png' },
];

const TEAM_MEMBERS = [
    { id: 1, name: 'Ms. Janki Rajesh Palpattwar', role: 'President', linkedin: '#', photo: '/team/Janki Palpattwar.png' },
    { id: 2, name: 'Mr. Arya Amit Mokashi', role: 'President', linkedin: '#', photo: '/team/Arya Mokashi.jpg' },
    { id: 3, name: 'Ms. Mahek Vinod Wadhwani', role: 'Vice President', linkedin: '#', photo: '/team/Mahek Wadhwani.jpg' },
    { id: 4, name: 'Mr. Arya Haridas Kshirsagar', role: 'Vice President', linkedin: '#', photo: '/team/Arya Kshirsagar.png' },
    { id: 5, name: 'Ms. Runal Milind Gavade', role: 'General Secretary', linkedin: '#', photo: '/team/runal gavade.png' },
    { id: 6, name: 'Mr. Yash Haribhau Sahane', role: 'General Secretary', linkedin: '#', photo: '/team/yash sahani.png' },
    { id: 7, name: 'Mr. Rupesh Balaji Shinde', role: 'Joint Secretary', linkedin: '#', photo: '/team/Rupesh Shinde.jpg' },
    { id: 8, name: 'Ms. Madhushree Narendra Warke', role: 'Treasurer', linkedin: '#', photo: '/team/Madhushree Warke.jpg' },
    { id: 9, name: 'Ms. Mansi Babanrao Khawas', role: 'Co-Treasurer', linkedin: '#', photo: '/team/Mansi Khawas.jpg', birthday: true },
    { id: 10, name: 'Mr. Piyush Yashwant Rayrikar', role: 'Cultural Head', linkedin: '#', photo: '/team/Piyush Yashwant Rayrikar.png' },
    { id: 11, name: 'Mr. Om Sudhakar Ingole', role: 'Sports Head', linkedin: '#', photo: '/team/Om Ingole.png' },
];

const DEPARTMENT_TEAMS = [
    {
        id: 'cultural',
        title: 'Cultural Secretary',
        members: [
            { name: 'Ms. Meenakshi Mahadev Banasode', role: 'Head Girls', photo: '/team/Meenakshi Banasode.jpg' },
            { name: 'Mr. Atharva Nemchand Kurkut', role: 'Co-Head Boys', photo: '/team/Atharva Kurkute.png' },
            { name: 'Ms. Sanskruti Kakade', role: 'Co-Head Girls', photo: '/team/Sanskruti Kakade.png' },
        ],
    },

    {
        id: 'technical',
        title: 'Technical Team',
        members: [
            { name: 'Mr. Jayesh Mahajan', role: 'Head', photo: '/team/Jayesh Mahajan.jpg' },
            { name: 'Mr. Sugat Sanjay Athawale', role: 'Co-Head', photo: '/team/Sugat Sanjay Athawale.jpg' },
            { name: 'Mr. Swayam Kailas Polakhare', role: 'Co-Head', photo: '/team/Swayam Polakhare.png', birthday: true },
            { name: 'Mr. Hari Dattatray Gurav', role: 'Co-Head', photo: '/team/Hari Dattatray Gurav.JPG' },
            { name: 'Ms. Kajal Mahadev Vyawahare', role: 'Startup Head', photo: '/team/Kajal Vyawahare_.jpg' },
        ],
    },
    {
        id: 'pr',
        title: 'Public Relations Officer',
        members: [
            { name: 'Mr. Rameshwar Anil Chavan', role: 'Head', photo: '/team/RameshwarChavan.jpg' },
            { name: 'Mr. Abhijeet Jadhav', role: 'Co-Head', photo: '/team/Abhijeet_Jadhav.png' },
            { name: 'Ms. Pallavi Shrikant Havre', role: 'Internship Head', photo: '/team/Pallavi Havre.jpg' },
            { name: 'Mr. Neeraj Manoj Shirsat', role: 'E-Cell Head', photo: '/team/Neeraj Shirsat.jpg' },
        ],
    },
    {
        id: 'events',
        title: 'Event Coordinators',
        members: [
            { name: 'Mr. Abhijeet Tanaji Lokhande', role: 'Head', photo: '/team/LOKHANDE ABHIJIT TANAJI.JPG' },
            { name: 'Mr. Aditya Sharad Pawar', role: 'Co-Head', photo: '/team/Aditya Pawar.jpg' },
            { name: 'Mr. Sanskar Sunil Ghule', role: 'Co-Head', photo: '/team/Sanskar ghule_.jpg' },
            { name: 'Ms. Anjali Sudhir Kalyani', role: 'Anchoring Head Girls', photo: '/team/Anjali Kalyani.jpg' },
            { name: 'Mr. Atharva Pramod Raut', role: 'Anchoring Head Boys', photo: null },
            { name: 'Ms. Piyusha Sunil Vavhal', role: 'Documentation Head', photo: '/team/Piyusha Vavhal.jpeg' },
        ],
    },
    {
        id: 'socialmedia',
        title: 'Social Media',
        members: [
            { name: 'Mr. Shivam Navnath Dhole', role: 'Head Boys', photo: '/team/Shivam Dhole.jpg' },
            { name: 'Ms. Minakshi Tulshiram Waghmare', role: 'Head Girls', photo: '/team/Minakshi Waghmare.jpg' },
            { name: 'Ms. Sakshi Santosh Raul', role: 'Head Content Creation', photo: '/team/Sakshi Raul.png' },
            { name: 'Ms. Palak Santosh Karanjawane', role: 'Co-Head Content Creation', photo: '/team/Palak Karanjawane_.jpg' },
            { name: 'Ms. Tanvi Kolhe', role: 'Creative Head', photo: '/team/Tanvi Kolhe .jpg' },
            { name: 'Ms. Krupal Bharatsing Girase', role: 'Creative Co-Head', photo: '/team/krupal singh.png' },
        ],
    },
    {
        id: 'rnd',
        title: 'Research & Development',
        members: [
            { name: 'Mr. Omkar Vijay Chikalge', role: 'Head', photo: '/team/Omkar Chikalge.jpg' },
            { name: 'Mr. Ujwal Virendra Sonawane', role: 'Co-Head', photo: '/team/Ujwal Sonawane.jpg' },
            { name: 'Mr. Piyush Khaladkar', role: 'Co-Head', photo: '/team/PiyushKhaladkar.jpg' },
        ],
    },
    {
        id: 'sports',
        title: 'Sports Team',
        members: [
            { name: 'Ms. Nidhi Rajesh Sharma', role: 'Head Girls', photo: '/team/Nidhisharma.jpg' },
            { name: 'Mr. Harshal Deepak Patil', role: 'Co-Head Boys', photo: '/team/Harshal Patil.png', birthday: true },
            { name: 'Ms. Priti Chhagan Bagul', role: 'Co-Head Girls', photo: '/team/Priti Bagul.jpg' },
            { name: 'Ms. Vaishnavi Narwade', role: 'Basketball Head Member', photo: '/team/Narawade Vaishnavi_.jpg' },
            { name: 'Ms. Shivani Rajaram Rawool', role: 'Basketball Co-Head Member', photo: '/team/Shivani Rawool.jpg' },
            { name: 'Ms. Aditi Jawanjal', role: 'Basketball Co-Head Member', photo: '/team/Aditi Jawanjal.jpg' },
            { name: 'Ms. Aachal Ramesh Tade', role: 'Kho-kho Head Member', photo: '/team/Achal Tade.jpg' },
            { name: 'Mr. Yash Pandurang Yenpure', role: 'Online Games Head Member', photo: '/team/Yash Yenpure.jpg' },
        ],
    },
];

export default function TeamPage() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenSection(prev => (prev === id ? null : id));
    };

    return (
        <>
            <div className="bg-gray-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Meet Our Team</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                        The dedicated individuals working tirelessly to make ACES a success.
                    </p>

                    {/* Faculty Section - Flip Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 border-b border-gray-200 pb-16">
                        {/* Prof. Tejal Patil */}
                        <div className="order-2 md:order-1 group h-[300px] [perspective:1000px]">
                            <div className="relative h-full w-full rounded-3xl shadow-sm border border-gray-100 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute inset-0 bg-white p-6 rounded-3xl [backface-visibility:hidden] flex flex-col items-center justify-center text-center">
                                    <div className="w-28 h-28 bg-gray-100 rounded-full mb-4 overflow-hidden relative shadow-inner ring-4 ring-emerald-50">
                                        <img src="/team/tejal patil .png" alt="Prof. Tejal Patil" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Prof. Tejal Patil</h3>
                                    <p className="text-emerald-600 font-bold text-sm mb-4">Secretary</p>
                                </div>
                                <div className="absolute inset-0 bg-emerald-50 p-6 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center shadow-inner border border-emerald-100">
                                    <Quote className="w-8 h-8 text-emerald-300 mb-4 rotate-180" />
                                    <p className="text-gray-700 italic leading-relaxed text-sm font-medium mb-4">
                                        "Empowering students to achieve their full potential through dedication, discipline, and continuous learning."
                                    </p>
                                    <Link href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                                        <Linkedin className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Dr. U. C. Patkar */}
                        <div className="order-1 md:order-2 group h-[300px] [perspective:1000px] relative lg:-top-6 z-10">
                            <div className="relative h-full w-full rounded-3xl shadow-md border border-gray-100 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute inset-0 bg-white p-6 rounded-3xl [backface-visibility:hidden] flex flex-col items-center justify-center text-center">
                                    <div className="w-32 h-32 bg-gray-100 rounded-full mb-4 overflow-hidden relative shadow-inner ring-4 ring-emerald-100 shadow-emerald-100/50">
                                        <img src="/team/Dr Udhay patkar.png" alt="Dr. U. C. Patkar" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. U. C. Patkar</h3>
                                    <p className="text-emerald-600 font-bold text-base mb-4">Chairman</p>
                                </div>
                                <div className="absolute inset-0 bg-emerald-50 p-6 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center shadow-inner border border-emerald-100">
                                    <Quote className="w-8 h-8 text-emerald-300 mb-4 rotate-180" />
                                    <p className="text-gray-700 italic leading-relaxed text-sm font-medium mb-4">
                                        "Leading our department towards technical brilliance and academic success for a better tomorrow."
                                    </p>
                                    <Link href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                                        <Linkedin className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Prof. Kumkum Bala */}
                        <div className="order-3 md:order-3 group h-[300px] [perspective:1000px]">
                            <div className="relative h-full w-full rounded-3xl shadow-sm border border-gray-100 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute inset-0 bg-white p-6 rounded-3xl [backface-visibility:hidden] flex flex-col items-center justify-center text-center">
                                    <div className="w-28 h-28 bg-gray-100 rounded-full mb-4 overflow-hidden relative shadow-inner ring-4 ring-emerald-50">
                                        <img src="/team/KumKum bala.png" alt="Prof. Kumkum Bala" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Prof. Kumkum Bala</h3>
                                    <p className="text-emerald-600 font-bold text-sm mb-4">Vice-Chairman</p>
                                </div>
                                <div className="absolute inset-0 bg-emerald-50 p-6 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center shadow-inner border border-emerald-100">
                                    <Quote className="w-8 h-8 text-emerald-300 mb-4 rotate-180" />
                                    <p className="text-gray-700 italic leading-relaxed text-sm font-medium mb-4">
                                        "Fostering a culture of innovation and excellence within the computer engineering community."
                                    </p>
                                    <Link href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                                        <Linkedin className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Teaching Staff Section */}
            <SectionWrapper className="bg-white border-b border-gray-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900">Teaching Staff</h2>
                    <p className="mt-2 text-gray-500 text-base">Our dedicated faculty members</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                    {TEACHING_STAFF.map((faculty, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-emerald-200 bg-emerald-50 shrink-0">
                                {faculty.photo ? (
                                    <img
                                        src={faculty.photo}
                                        alt={faculty.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-emerald-700 font-bold text-sm bg-emerald-100">
                                        {faculty.name.split(' ').filter((w: string) => !['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'].includes(w)).slice(0, 2).map((w: string) => w[0]).join('')}
                                    </div>
                                )}
                            </div>
                            <p className="text-xs font-semibold text-gray-900 leading-tight mb-0.5">{faculty.name}</p>
                            <p className="text-xs text-emerald-600 font-medium leading-tight">{faculty.designation}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Non-Teaching Staff Section */}
            <SectionWrapper className="bg-gray-50 border-b border-gray-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900">Non-Teaching Staff</h2>
                    <p className="mt-2 text-gray-500 text-base">Our dedicated support staff</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                    {NON_TEACHING_STAFF.map((staff, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center w-32">
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-gray-200 bg-gray-100 shrink-0">
                                {staff.photo ? (
                                    <img
                                        src={staff.photo}
                                        alt={staff.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-600 font-bold text-sm bg-gray-200">
                                        {staff.name.split(' ').filter((w: string) => !['Mr.', 'Ms.', 'Mrs.'].includes(w)).slice(0, 2).map((w: string) => w[0]).join('')}
                                    </div>
                                )}
                            </div>
                            <p className="text-xs font-semibold text-gray-900 leading-tight mb-0.5">{staff.name}</p>
                            <p className="text-xs text-gray-500 font-medium leading-tight">{staff.designation}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Core Committee Cards */}
            <SectionWrapper>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900">Core Committee</h2>
                    <p className="mt-2 text-gray-500 text-base">Our elected student leaders</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {TEAM_MEMBERS.map((member) => (
                        <CoreMemberCard key={member.id} member={member} />
                    ))}
                </div>
            </SectionWrapper>

            {/* Department Teams Accordion */}
            <SectionWrapper className="bg-gray-50">
                <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
                    {DEPARTMENT_TEAMS.map((dept) => (
                        <div key={dept.id} className="w-full md:w-[calc(50%-0.5rem)] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggle(dept.id)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-emerald-50 active:bg-emerald-100 transition-colors group touch-manipulation"
                                aria-expanded={openSection === dept.id}
                                type="button"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                                        {dept.title}
                                    </span>
                                    <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
                                        {dept.members.length}
                                    </span>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openSection === dept.id ? 'rotate-180 text-emerald-600' : ''}`}
                                />
                            </button>

                            {/* Accordion Body — Member Cards */}
                            {openSection === dept.id && (
                                <div className="border-t border-gray-100">
                                    <div className="px-4 sm:px-6 pb-6 pt-2">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                                            {dept.members.map((member, idx) => (
                                                <BirthdayMemberCard key={idx} member={member} idx={idx} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
