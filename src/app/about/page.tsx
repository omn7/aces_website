import type { Metadata } from 'next';
import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Target, Users, BookOpen, GraduationCap, Building, Activity, Globe, Cpu } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About ACES \u2014 Our History, Mission & Activities',
    description:
        'Learn about ACES (Association of Computer Engineering Students) at Bharati Vidyapeeth College of Engineering, Pune Lavale. Founded on Engineers Day 2014, ACES runs workshops, hackathons, CSI & IEEE chapters, and student leadership programs.',
    keywords: [
        'About ACES BVCOE',
        'ACES history',
        'ACES mission',
        'computer engineering student association Pune',
        'CSI BVCOE chapter',
        'IEEE BVCOE',
        'Bharati Vidyapeeth student association',
        'ACES activities',
        'Dr. U. C. Patkar BVCOE',
    ],
    alternates: { canonical: 'https://acesbvcoel.com/about' },
    openGraph: {
        title: 'About ACES \u2014 Association of Computer Engineering Students | BVCOE Pune',
        description:
            'ACES was founded on Engineers Day 2014 at Bharati Vidyapeeth College of Engineering, Lavale. Discover our mission, leadership, CSI & IEEE memberships, and activities.',
        url: 'https://acesbvcoel.com/about',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About ACES BVCOE' }],
    },
};

export default function AboutPage() {
    return (
        <>
            {/* Header Section */}
            <div className="bg-gray-50 pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl font-extrabold text-primary sm:text-6xl tracking-tight mb-6">About ACES</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        The Association of Computer Engineering Students serves as a platform for students and faculty to collaborate, engage in meaningful activities, and contribute positively to the college community and beyond.
                    </p>
                </div>
            </div>

            {/* History & Leadership */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-xl mb-6 shadow-sm">
                            <Target className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat tracking-tight">Inauguration & Purpose</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            The association was inaugurated on Engineers Day at Bharati Vidyapeeth’s College of Engineering Lavale, with the honorable principal leading the ceremony.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            ACES organizes a diverse range of activities aimed at fostering academic, professional, and personal growth among its members. Through its initiatives, ACES strives to enrich the educational experience and promote holistic development.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <Card className="p-8 border border-gray-200 border-l-4 border-l-primary">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-gray-100 rounded-lg">
                                    <Users className="w-6 h-6 text-gray-700" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Student Leadership</h3>
                            </div>
                            <p className="text-gray-600 text-lg">
                                The association is led by elected student representatives, including the President, Vice President, and Treasurer. These representatives play a crucial role in coordinating and organizing activities on behalf of the student body.
                            </p>
                        </Card>

                        <Card className="p-8 border border-gray-200 border-l-4 border-l-teal-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-gray-100 rounded-lg">
                                    <GraduationCap className="w-6 h-6 text-gray-700" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Faculty Involvement</h3>
                            </div>
                            <p className="text-gray-600 text-lg mb-4">
                                While students lead the association, all activities and monitoring are overseen by faculty members providing guidance and support.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-teal-500"></span><strong className="text-gray-900">Dr. U. C. Patkar</strong> — Chairman</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-teal-500"></span><strong className="text-gray-900">Prof. Kumkum Bala</strong> — Vice-Chairman</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-teal-500"></span><strong className="text-gray-900">Prof. Tejal H. Patil</strong> — Secretary</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </SectionWrapper>

            {/* Activities Section */}
            <SectionWrapper alternate pattern>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat tracking-tight">Our Activities</h2>
                    <p className="text-xl text-gray-600">
                        We organize a diverse range of activities aimed at fostering academic, professional, and personal growth among our members.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {[
                        { title: "Technical Skills", desc: "Workshops, training programs, and hands-on seminars.", icon: Cpu },
                        { title: "Competitions", desc: "Project competitions and intensive hackathons.", icon: Target },
                        { title: "Culture & Sports", desc: "Departmental cultural integration and sports activities.", icon: Activity },
                        { title: "Social Initiatives", desc: "Blood donation drives and tree plantation campaigns.", icon: Globe },
                    ].map((activity, idx) => (
                        <Card key={idx} className="p-6 border border-gray-200 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-emerald-50 rounded-full">
                                    <activity.icon className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                            <p className="text-gray-600 font-medium">{activity.desc}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Professional Memberships */}
            <SectionWrapper>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-xl mb-6 shadow-sm">
                        <Building className="w-8 h-8 text-teal-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat tracking-tight">Professional Memberships</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        The professional memberships to CSI and IEEE signify the commitment of both faculty members and students to staying at the forefront of advancements in computer science and engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* CSI Card */}
                    <Card className="p-8 lg:p-10 border border-gray-200 border-t-8 border-t-blue-600">
                        <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">CSI <span className="text-xl font-bold text-gray-500 block mt-1">Computer Society of India</span></h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Institutional Membership & Chapter</h4>
                                <p className="text-gray-600">The department subscribed to CSI's Institutional membership for five years and established its CSI chapter on November 30, 2017, to facilitate collaboration and professional development.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Programs and Events</h4>
                                <p className="text-gray-600">Numerous programs have been organized providing opportunities to engage with industry experts, participate in workshops and conferences, and stay updated on the latest trends.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">National Presence</h4>
                                <p className="text-gray-600">The CSI chapter is part of a larger network across India, with successful execution in cities such as Mumbai, Nashik, Nagpur, Hyderabad, Delhi, Patna, and Pune.</p>
                            </div>
                        </div>
                    </Card>

                    {/* IEEE Card */}
                    <Card className="p-8 lg:p-10 border border-gray-200 border-t-8 border-t-teal-600">
                        <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">IEEE <span className="text-xl font-bold text-gray-500 block mt-1">Institute of Electrical and Electronics Engineers</span></h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Individual Memberships</h4>
                                <p className="text-gray-600">Dr. Uday Patkar (HoD), Prof. M. A. Patil, and multiple students have subscribed to IEEE membership, granting access to a wealth of technical resources and networking.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Core Benefits</h4>
                                <p className="text-gray-600">IEEE membership helps members stay technically updated, connect with experts in the field, and network with colleagues both locally and internationally.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Active Student Involvement</h4>
                                <p className="text-gray-600">Students from the department are actively involved as members of the Local Graphic Design and Animation subcommittee for the IEEE Bombay Section.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </SectionWrapper>
        </>
    );
}

