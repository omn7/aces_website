'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Linkedin, Quote, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const TEAM_MEMBERS = [
    { id: 1, name: 'Ms. Janki Rajesh Palpattwar', role: 'President (BE)', linkedin: '#' },
    { id: 2, name: 'Mr. Arya Amit Mokashi', role: 'President (BE)', linkedin: '#' },
    { id: 3, name: 'Ms. Mahek Vinod Wadhwani', role: 'Vice President (TE)', linkedin: '#' },
    { id: 4, name: 'Mr. Arya Haridas Kshirsagar', role: 'Vice President (TE)', linkedin: '#' },
    { id: 5, name: 'Ms. Runal Milind Gavade', role: 'General Secretary (TE)', linkedin: '#' },
    { id: 6, name: 'Mr. Yash Haribhau Sahane', role: 'General Secretary (TE)', linkedin: '#' },
    { id: 7, name: 'Mr. Rupesh Balaji Shinde', role: 'Joint Secretary (TE)', linkedin: '#' },
];

const DEPARTMENT_TEAMS = [
    {
        id: 'cultural',
        title: 'Cultural Secretary',
        members: [
            { name: 'Mr. Piyush Yashwant Rayrikar', role: 'Head Boys (TE)' },
            { name: 'Ms. Meenakshi Mahadev Banasode', role: 'Head Girls (SE A)' },
            { name: 'Mr. Atharva Nemchand Kurkut', role: 'Co-Head Boys (SE B)' },
            { name: 'Ms. Sanskruti Kakade', role: 'Co-Head Girls (SE A)' },
        ],
    },
    {
        id: 'treasurer',
        title: 'Treasurer',
        members: [
            { name: 'Ms. Madhushree Narendra Warke', role: 'Head (TE)' },
            { name: 'Ms. Mansi Babanrao Khawas', role: 'Co-Head (TE)' },
        ],
    },
    {
        id: 'technical',
        title: 'Technical Team',
        members: [
            { name: 'Mr. Jayesh Mahajan', role: 'Head (SE A)' },
            { name: 'Mr. Sugat Sanjay Athawale', role: 'Co-Head (SE B)' },
            { name: 'Mr. Swayam Kailas Polakhare', role: 'Co-Head (SE B)' },
            { name: 'Mr. Hari Dattatray Gurav', role: 'Co-Head (SE A)' },
            { name: 'Ms. Kajal Mahadev Vyawahare', role: 'Startup Head (SE B)' },
        ],
    },
    {
        id: 'pr',
        title: 'Public Relations Officer',
        members: [
            { name: 'Mr. Rameshwar Anil Chavan', role: 'Head (SE B)' },
            { name: 'Mr. Abhijeet Jadhav', role: 'Co-Head (SE A)' },
            { name: 'Ms. Pallavi Shrikant Havre', role: 'Internship Head (SE B)' },
            { name: 'Mr. Neeraj Manoj Shirsat', role: 'E-Cell Head (SE A)' },
        ],
    },
    {
        id: 'events',
        title: 'Event Coordinators',
        members: [
            { name: 'Mr. Abhijeet Tanaji Lokhande', role: 'Head (SE B)' },
            { name: 'Mr. Aditya Sharad Pawar', role: 'Co-Head (SE B)' },
            { name: 'Mr. Sanskar Sunil Ghule', role: 'Co-Head (SE B)' },
            { name: 'Ms. Anjali Sudhir Kalyani', role: 'Anchoring Head Girls (SE A)' },
            { name: 'Mr. Atharva Pramod Raut', role: 'Anchoring Head Boys (SE B)' },
            { name: 'Ms. Piyusha Sunil Vavhal', role: 'Documentation Head (SE A)' },
        ],
    },
    {
        id: 'socialmedia',
        title: 'Social Media',
        members: [
            { name: 'Mr. Shivam Navnath Dhole', role: 'Head Boys (SE A)' },
            { name: 'Ms. Minakshi Tulshiram Waghmare', role: 'Head Girls (SE A)' },
            { name: 'Ms. Sakshi Santosh Raul', role: 'Head Content Creation (SE B)' },
            { name: 'Ms. Palak Santosh Karanjawane', role: 'Co-Head Content Creation (SE B)' },
            { name: 'Ms. Tanvi Kolhe', role: 'Creative Head (SE A)' },
            { name: 'Ms. Krupal Bharatsing Girase', role: 'Creative Co-Head (SE B)' },
        ],
    },
    {
        id: 'rnd',
        title: 'Research & Development',
        members: [
            { name: 'Mr. Omkar Vijay Chikalge', role: 'Head (SE B)' },
            { name: 'Mr. Ujwal Virendra Sonawane', role: 'Co-Head (SE B)' },
            { name: 'Mr. Piyush Khaladkar', role: 'Co-Head (SE A)' },
        ],
    },
    {
        id: 'sports',
        title: 'Sports Team',
        members: [
            { name: 'Mr. Om Sudhakar Ingole', role: 'Head Boys (TE)' },
            { name: 'Ms. Nidhi Rajesh Sharma', role: 'Head Girls (SE B)' },
            { name: 'Mr. Harshal Deepak Patil', role: 'Co-Head Boys (SE A)' },
            { name: 'Ms. Priti Chhagan Bagul', role: 'Co-Head Girls (SE A)' },
            { name: 'Ms. Vaishnavi Narwade', role: 'Basketball Head Member (SE A)' },
            { name: 'Ms. Shivani Rajaram Rawool', role: 'Basketball Co-Head Member (SE A)' },
            { name: 'Ms. Aditi Jawanjal', role: 'Basketball Co-Head Member (SE A)' },
            { name: 'Ms. Aachal Ramesh Tade', role: 'Kho-kho Head Member (SE A)' },
            { name: 'Mr. Yash Pandurang Yenpure', role: 'Online Games Head Member (SE B)' },
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
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm">Photo</div>
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
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Photo</div>
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
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm">Photo</div>
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

            {/* Core Committee Cards */}
            <SectionWrapper>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900">Core Committee</h2>
                    <p className="mt-2 text-gray-500 text-base">Our elected student leaders</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {TEAM_MEMBERS.map((member) => (
                        <Card key={member.id} className="text-center group w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-[250px] max-w-[300px]">
                            <div className="p-6">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">Photo</div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                                <Link
                                    href={member.linkedin}
                                    target="_blank"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-[#0A66C2] transition-colors"
                                    aria-label={`LinkedIn profile for ${member.name}`}
                                >
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>
                        </Card>
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
                                                <div
                                                    key={idx}
                                                    className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-3 sm:p-4 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all"
                                                >
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm mb-2 sm:mb-3 shrink-0 ring-2 ring-emerald-200">
                                                        {member.name.split(' ').filter(w => !['Mr.', 'Ms.', 'Dr.'].includes(w)).slice(0, 2).map(w => w[0]).join('')}
                                                    </div>
                                                    <p className="text-xs font-semibold text-gray-900 leading-tight mb-0.5">{member.name}</p>
                                                    <p className="text-xs text-emerald-600 font-medium mb-2">{member.role}</p>
                                                    <Link
                                                        href="#"
                                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
                                                        aria-label={`LinkedIn profile for ${member.name}`}
                                                    >
                                                        <Linkedin className="w-4 h-4" />
                                                    </Link>
                                                </div>
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
