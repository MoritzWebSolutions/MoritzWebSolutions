"use client";

import React, { useState } from "react";
import Image from "next/image";

const industries = ['Alle', 'Technologie', 'Finanzen', 'Gesundheit', 'Bildung'];

const clients = [
    { name: "TechCorp", logo: "/bitbucket.png", industry: "Technologie" },
    { name: "Finanz AG", logo: "/bitbucket.png", industry: "Finanzen" },
    { name: "MediCare", logo: "/bitbucket.png", industry: "Gesundheit" },
    { name: "EduPlus", logo: "/bitbucket.png", industry: "Bildung" },
    { name: "DataSystems", logo: "/bitbucket.png", industry: "Technologie" },
    { name: "BankSecure", logo: "/bitbucket.png", industry: "Finanzen" },
];

const InteractiveClientGrid = () => {
    const [filter, setFilter] = useState('Alle');

    const filteredClients = filter === 'Alle'
        ? clients
        : clients.filter(client => client.industry === filter);

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = "/placeholder.png";
    };

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Unsere Partner</h2>

                <div className="flex justify-center space-x-4 mb-12">
                    {industries.map(industry => (
                        <button
                            key={industry}
                            onClick={() => setFilter(industry)}
                            className={`px-4 py-2 rounded-full ${filter === industry
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                        >
                            {industry}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredClients.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
                        >
                            <div className="mb-4 w-24 h-24 flex items-center justify-center">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={96}
                                    height={96}
                                    className="object-contain h-full w-auto grayscale hover:grayscale-0 transition-all"
                                    onError={handleImageError}
                                />
                            </div>
                            <h3 className="font-medium text-center">{client.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{client.industry}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InteractiveClientGrid;