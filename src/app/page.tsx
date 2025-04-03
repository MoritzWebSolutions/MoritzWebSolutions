"use client";

import KundenScroll from '@/components/kunden-scroll';
import TopBar from "@/components/top-bar";
import KundenFilter from "@/components/kunden-filter";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {/* TopBar hier einfügen */}
            <TopBar/>

            <div className="flex-grow flex flex-col items-center justify-center p-6">
                <h1 className="text-5xl font-bold mb-6 text-center">
                    Ich erstelle deine moderne Webseite
                </h1>
                <p className="text-lg text-gray-400 text-center max-w-2xl mb-6">
                    Maßgeschneiderte Weblösungen für dein Unternehmen – schnell, sicher und ansprechend gestaltet.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 text-lg rounded-lg mb-6">
                    Projekt anfragen
                </button>

                {/* Kunden Slider */}
                <KundenScroll />

                <KundenFilter />
            </div>
        </div>
    );
}