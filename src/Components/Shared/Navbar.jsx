import React, { useState, useEffect } from 'react';
import { Search, Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [dateTime, setDateTime] = useState(new Date());
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // for active link highlighting

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const day = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();

    // Navigation links
    const navLinks = [
        { name: 'Dashboard', path: '/' },
        { name: 'Patients', path: '/patient' },
        { name: 'Reports', path: '/reports' },
        { name: 'Settings', path: '/settings' },
    ];

    return (
        <header className="bg-gradient-to-r from-slate-900 to-slate-950 shadow-lg">
            <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:p-5">

                {/* Logo */}
                <Link to="/" className="flex items-center text-white font-bold text-xl hover:scale-105 transition-transform duration-300">
                    <Phone className="w-10 h-10 p-2 bg-blue-600 rounded-full shadow-md" />
                    <span className="ml-3">HealthCare</span>
                </Link>

                {/* Date & Time */}
                <div className="hidden flex gap-6 lg:flex bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-xl text-white text-sm text-center mx-3 shadow-sm">
                    <p className="font-semibold">{day}, {date}</p>
                    <p>Time: {time}</p>

                </div>


                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-gray-300 font-medium mr-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-2 py-1 rounded transition-colors duration-300 ${location.pathname === link.path
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'hover:text-blue-400 hover:bg-slate-800'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-3">
                    <Link
                        to="/signup"
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition text-white font-semibold shadow-lg hover:scale-105 transform duration-300"
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/login"
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 transition text-white font-semibold shadow-lg hover:scale-105 transform duration-300"
                    >
                        Log In
                    </Link>
                </div>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white ml-3 hover:text-blue-400 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-md px-4 pb-4 space-y-3 rounded-b-xl shadow-lg animate-fadeIn">
                    {/* Mobile Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search patients, reports..."
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-300 hover:ring-blue-400"
                        />
                    </div>

                    {/* Mobile Navigation */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`block py-2 px-3 rounded transition-colors duration-300 ${location.pathname === link.path
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'text-gray-300 hover:bg-slate-800 hover:text-blue-400'
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile Buttons */}
                    <Link
                        to="/signup"
                        className="block bg-blue-600 text-white p-2 rounded text-center shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/login"
                        className="block bg-red-600 text-white p-2 rounded text-center shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        Log In
                    </Link>

                    {/* Mobile Date & Time */}
                    <div className="bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-xl text-white text-sm text-center mt-2 shadow-sm">
                        <p className="font-semibold">{day}, {date}</p>
                        <p>Time: {time}</p>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;