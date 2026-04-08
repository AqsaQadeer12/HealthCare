import React, { useEffect, useState } from "react";
import { Sun, Moon, User, Bell, ShieldCheck, Settings as SettingsIcon } from "lucide-react";

function Toggle({ enabled, setEnabled }) {
    return (
        <div
            onClick={() => setEnabled(!enabled)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${enabled ? "bg-green-500" : "bg-gray-400"
                }`}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${enabled ? "translate-x-6" : ""
                    }`}
            />
        </div>
    );
}

function Settings() {
    const [dark, setDark] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [alerts, setAlerts] = useState(true);
    const [compact, setCompact] = useState(false);

    // Load settings
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const savedNotif = localStorage.getItem("notifications");
        const savedAlerts = localStorage.getItem("alerts");

        if (savedTheme === "dark") {
            setDark(true);
            document.body.classList.add("dark");
        }

        setNotifications(savedNotif !== "false");
        setAlerts(savedAlerts !== "false");
    }, []);

    // Save theme
    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    // Save toggles
    useEffect(() => {
        localStorage.setItem("notifications", notifications);
        localStorage.setItem("alerts", alerts);
    }, [notifications, alerts]);

    return (
        <div
            className={`min-h-screen p-6 transition-all duration-500 ${dark
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-800"
                }`}
        >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-2">
                    <SettingsIcon /> Settings
                </h1>

                {/* THEME TOGGLE */}
                <button
                    onClick={() => setDark(!dark)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md transition ${dark ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-200"
                        }`}
                >
                    {dark ? <Sun size={18} /> : <Moon size={18} />}
                    {dark ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            {/* GRID */}
            <div className="grid lg:grid-cols-3 gap-6">

                {/* PROFILE */}
                <div className={`p-6 rounded-2xl shadow-lg ${dark ? "bg-gray-800" : "bg-white"
                    }`}>
                    <div className="flex items-center gap-3 mb-4">
                        <User className="text-blue-500" />
                        <h2 className="text-xl font-semibold">Profile</h2>
                    </div>
                    <p className="text-sm text-blue-700 opacity-70 mb-4">
                        Update your account details
                    </p>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className={`w-full p-3 mb-3 rounded-lg font-bold text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 ${dark ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} hover:text-blue-900`}
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className={`w-full p-3 mb-3 rounded-lg font-bold text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 ${dark ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} hover:text-blue-900`}
                    />
                </div>

                {/* NOTIFICATIONS */}
                <div className={`p-6 rounded-2xl shadow-lg ${dark ? "bg-gray-800" : "bg-white"
                    }`}>
                    <div className="flex items-center gap-3 mb-4">
                        <Bell className="text-green-500" />
                        <h2 className="text-xl font-semibold">Notifications</h2>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <span>Email Notifications</span>
                        <Toggle enabled={notifications} setEnabled={setNotifications} />
                    </div>

                    <div className="flex justify-between items-center">
                        <span>Critical Alerts</span>
                        <Toggle enabled={alerts} setEnabled={setAlerts} />
                    </div>
                </div>

                {/* SECURITY */}
                <div className={`p-6 rounded-2xl shadow-lg ${dark ? "bg-gray-800" : "bg-white"
                    }`}>
                    <div className="flex items-center gap-3 mb-4">
                        <ShieldCheck className="text-purple-500" />
                        <h2 className="text-xl font-semibold">Security</h2>
                    </div>

                    <button className="w-full py-2 mb-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition">
                        Change Password
                    </button>

                    <button className="w-full py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition">
                        Enable 2FA
                    </button>
                </div>

                {/* SYSTEM */}
                <div className={`p-6 rounded-2xl shadow-lg col-span-2 ${dark ? "bg-gray-800" : "bg-white"
                    }`}>
                    <h2 className="text-xl font-semibold mb-4">System Preferences</h2>

                    <div className="flex justify-between items-center mb-4">
                        <span>Compact Mode</span>
                        <Toggle enabled={compact} setEnabled={setCompact} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <select className={`p-2 rounded-lg ${dark ? "bg-gray-700" : "bg-gray-100"
                            }`}>
                            <option>English</option>
                            <option>Urdu</option>
                        </select>

                        <select className={`p-2 rounded-lg ${dark ? "bg-gray-700" : "bg-gray-100"
                            }`}>
                            <option>Default Layout</option>
                            <option>Compact Layout</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Settings;