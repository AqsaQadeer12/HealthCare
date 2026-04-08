import React, { useState, useEffect } from 'react';
import { Search, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const day = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();

    return (
        <header className="bg-gradient-to-r from-slate-900 to-slate-950 shadow-lg">
            <div className="container mx-auto flex flex-wrap p-4 md:p-5 items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center text-white font-bold text-xl">
                    <Phone className="w-10 h-10 p-2 bg-blue-600 rounded-full shadow-md" />
                    <span className="ml-3">HealthCare</span>
                </Link>

                {/* Search Bar */}
                <div className="relative flex items-center mx-5 flex-1 max-w-md">
                    <Search className="absolute left-3 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search patients, reports..."
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400 transition"
                    />
                </div>

                {/* Date & Time */}
                <div className="bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-xl text-white text-sm text-center mx-3 shadow-sm">
                    <p className="font-semibold">{day}, {date}</p>
                    <p>Time: {time}</p>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-gray-300 font-medium mr-3">
                    <Link to="/" className="hover:text-blue-600 transition hover:underline">Dashboard</Link>
                    <Link to="/patient" className="hover:text-blue-600 transition hover:underline">Patients</Link>
                    <Link to="/reports" className="hover:text-blue-600 transition hover:underline">Reports</Link>
                    <Link to="/settings" className="hover:text-blue-600 transition hover:underline">Settings</Link>
                </nav>

                {/* Buttons */}
                <div className="flex gap-3 mt-3 md:mt-0">
                    <Link
                        to="/signup"
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition text-white font-semibold shadow-lg"
                    >
                        Sign Up
                    </Link>

                    <Link
                        to="/login"
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 transition text-white font-semibold shadow-lg"
                    >
                        Log In
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default Navbar;