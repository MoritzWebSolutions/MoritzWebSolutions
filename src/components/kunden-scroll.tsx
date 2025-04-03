"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const clients = [
    { name: "Kunde A", logo: "/bitbucket.png" },
    { name: "Kunde B", logo: "/bitbucket.png" },
    { name: "Kunde C", logo: "/bitbucket.png" },
    { name: "Kunde D", logo: "/bitbucket.png" },
    { name: "Kunde E", logo: "/bitbucket.png" },
    { name: "Kunde F", logo: "/bitbucket.png" },
    { name: "Kunde G", logo: "/bitbucket.png" },
    { name: "Kunde H", logo: "/bitbucket.png" },
];

const KundenScroll = () => {
    const sliderRef = useRef<HTMLDivElement>(null); // Explizite Typisierung
    const clonedClients = [...clients, ...clients];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) {
            return;
        }

        let animationId: number;
        let scrollAmount = 0;
        const speed = 1;

        const animate = () => {
            scrollAmount += speed;
            if (scrollAmount >= slider.scrollWidth / 2) {
                scrollAmount = 0;
            }
            slider.scrollLeft = scrollAmount;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Vertrauen uns</h2>

                <div className="relative overflow-hidden">
                    <div
                        ref={sliderRef}
                        className="flex space-x-8 py-4 w-full overflow-x-hidden"
                    >
                        {clonedClients.map((client, index) => (
                            <div
                                key={`${index}-${client.name}`}
                                className="flex-shrink-0 px-4 py-2 bg-gray-50 rounded-lg flex items-center justify-center"
                                style={{ minWidth: '200px', height: '100px' }}
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={120}
                                    height={60}
                                    className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "/placeholder.png";
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KundenScroll;