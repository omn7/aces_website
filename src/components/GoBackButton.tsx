'use client';
import { ArrowLeft } from 'lucide-react';

export default function GoBackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
            <ArrowLeft className="w-4 h-4" />
            Go Back
        </button>
    );
}
