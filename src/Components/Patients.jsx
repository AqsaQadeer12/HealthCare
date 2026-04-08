import React, { useState } from "react";
import { HeartPulse, Activity, Thermometer, Droplets } from "lucide-react";

function Patients() {
    const [searchName, setSearchName] = useState("");
    const [patients] = useState([
        {
            name: "Ali Khan",
            age: 45,
            gender: "Male",
            room: "ICU-12",
            condition: "Pneumonia + Severe Asthma",
            status: "Critical",
            department: "ICU",
            description: "Severe pneumonia, needs constant monitoring.",
            hr: 78,
            spo2: 98,
            bp: "120/80",
            temp: 37,
        },
        {
            name: "Jane Smith",
            age: 28,
            gender: "Female",
            room: "ER-5",
            condition: "Stable and minor coughing",
            status: "Stable",
            department: "Emergency",
            description: "Post heart surgery, stable vitals.",
            hr: 72,
            spo2: 99,
            bp: "118/76",
            temp: 36.8,
        },
    ]);

    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchName.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 min-h-screen text-white p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4 md:mb-6">
                Hospital Patient Overview
            </h1>

            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by patient name..."
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="w-full p-3 rounded-lg text-white text-lg font-bold border-2 border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Responsive Table / Cards */}
            <div className="overflow-x-auto">
                {/* Desktop / Tablet Table */}
                <table className="min-w-full bg-slate-800 rounded-xl hidden sm:table">
                    <thead>
                        <tr className="text-gray-300">
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Age</th>
                            <th className="px-4 py-2">Gender</th>
                            <th className="px-4 py-2">Room</th>
                            <th className="px-4 py-2">Department</th>
                            <th className="px-4 py-2">Condition</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Vitals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map((patient, idx) => (
                            <tr
                                key={idx}
                                className="border-t border-gray-700 hover:bg-slate-700"
                            >
                                <td className="px-4 py-2 text-center">{idx + 1}</td>
                                <td className="px-4 py-2">{patient.name}</td>
                                <td className="px-4 py-2 text-center">{patient.age}</td>
                                <td className="px-4 py-2 text-center">{patient.gender}</td>
                                <td className="px-4 py-2 text-center">{patient.room}</td>
                                <td className="px-4 py-2 text-center">{patient.department}</td>
                                <td className="px-4 py-2 w-[200px]">{patient.condition}</td>
                                <td
                                    className={`px-4 py-2 font-bold text-center ${patient.status === "Critical"
                                            ? "text-red-400"
                                            : patient.status === "Stable"
                                                ? "text-green-400"
                                                : "text-yellow-400"
                                        }`}
                                >
                                    {patient.status}
                                </td>
                                <td className="px-4 py-2">{patient.description}</td>
                                <td className="px-4 py-2">
                                    <div className="flex flex-col gap-1 text-sm w-[120px]">
                                        <span>
                                            <HeartPulse className="inline-block text-green-400 mb-1" />{" "}
                                            HR: {patient.hr} bpm
                                        </span>
                                        <span>
                                            <Droplets className="inline-block text-blue-400 mb-1" />{" "}
                                            SpO₂: {patient.spo2}%
                                        </span>
                                        <span>
                                            <Activity className="inline-block text-yellow-400 mb-1" />{" "}
                                            BP: {patient.bp}
                                        </span>
                                        <span>
                                            <Thermometer className="inline-block text-red-400 mb-1" />{" "}
                                            Temp: {patient.temp}°C
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Mobile Cards */}
                <div className="sm:hidden flex flex-col gap-4">
                    {filteredPatients.map((patient, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-800 rounded-xl p-4 shadow-md hover:bg-slate-700"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-bold">{patient.name}</h2>
                                <span
                                    className={`font-bold ${patient.status === "Critical"
                                            ? "text-red-400"
                                            : patient.status === "Stable"
                                                ? "text-green-400"
                                                : "text-yellow-400"
                                        }`}
                                >
                                    {patient.status}
                                </span>
                            </div>
                            <p>
                                <span className="font-semibold">Age:</span> {patient.age} |{" "}
                                <span className="font-semibold">Gender:</span> {patient.gender}
                            </p>
                            <p>
                                <span className="font-semibold">Room:</span> {patient.room} |{" "}
                                <span className="font-semibold">Department:</span>{" "}
                                {patient.department}
                            </p>
                            <p>
                                <span className="font-semibold">Condition:</span>{" "}
                                {patient.condition}
                            </p>
                            <p>
                                <span className="font-semibold">Description:</span>{" "}
                                {patient.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2 text-sm">
                                <span className="flex items-center gap-1">
                                    <HeartPulse className="text-green-400" /> HR: {patient.hr} bpm
                                </span>
                                <span className="flex items-center gap-1">
                                    <Droplets className="text-blue-400" /> SpO₂: {patient.spo2}%
                                </span>
                                <span className="flex items-center gap-1">
                                    <Activity className="text-yellow-400" /> BP: {patient.bp}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Thermometer className="text-red-400" /> Temp: {patient.temp}°C
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredPatients.length === 0 && (
                    <p className="text-center text-red-400 font-bold mt-4">
                        No patients found with the name "{searchName}"
                    </p>
                )}
            </div>
        </div>
    );
}

export default Patients;