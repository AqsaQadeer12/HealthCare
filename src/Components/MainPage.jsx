import React, { useState } from "react";
import { HeartPulse, Activity, Thermometer, Droplets } from "lucide-react";
import { Link } from "react-router-dom"; // import Link

function MainPage() {
    // State for patients
    const [patients, setPatients] = useState([
        {
            name: "Ali Khan",
            age: 45,
            room: "ICU-12",
            condition: "Critical",
            status: "Critical",
            hr: 78,
            spo2: 98,
            bp: "120/80",
            temp: 37,
        },
    ]);

    // Modal visibility state
    const [showForm, setShowForm] = useState(false);

    // New patient form state
    const [newPatient, setNewPatient] = useState({
        name: "",
        age: "",
        room: "",
        condition: "",
        status: "",
        hr: "",
        spo2: "",
        bp: "",
        temp: "",
    });

    // Add patient handler
    const addPatient = () => {
        if (!newPatient.name || !newPatient.room || !newPatient.status) return;
        setPatients([...patients, newPatient]);
        setNewPatient({
            name: "",
            age: "",
            room: "",
            condition: "",
            status: "",
            hr: "",
            spo2: "",
            bp: "",
            temp: "",
        });
        setShowForm(false);
    };

    // Departments data with navigation path
    const departments = [
        { name: "ICU", color: "from-blue-500 to-blue-700", image: "https://img.icons8.com/?size=160&id=8tVSp6V0Z8Ir&format=png", path: "/icu" },
        { name: "Emergency", color: "from-orange-500 to-red-700", image: "https://img.icons8.com/color/96/hospital-room.png", path: "/emergency" },
        { name: "Neurology", color: "from-blue-500 to-indigo-700", image: "https://img.icons8.com/color/96/brain.png", path: "/neurology" },
        { name: "Pediatrics", color: "from-pink-500 to-pink-900", image: "https://img.icons8.com/color/96/baby.png", path: "/pediatrics" },
        { name: "Oncology", color: "from-red-500 to-pink-700", image: "https://img.icons8.com/?size=128&id=2PgXz7XAIojB&format=png", path: "/oncology" },
        { name: "Laboratory", color: "from-yellow-500 to-red-700", image: "https://img.icons8.com/color/96/test-tube.png", path: "/laboratory" },
        { name: "Pharmacy", color: "from-green-500 to-teal-700", image: "https://img.icons8.com/color/96/pills.png", path: "/pharmacy" },
    ];

    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 min-h-screen text-white p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-blue-400">Patient Monitoring Dashboard</h1>
                <div className="flex items-center gap-4">
                    <div className="bg-slate-800 px-4 py-2 rounded-lg text-sm text-gray-300">🟢 System Active</div>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold"
                    >
                        + Add Patient
                    </button>
                </div>
            </div>

            {/* Top Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-10">
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                    <p className="text-gray-400">Total Patients</p>
                    <h2 className="text-3xl font-bold text-blue-400">52</h2>
                </div>
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                    <p className="text-gray-400">Critical</p>
                    <h2 className="text-3xl font-bold text-red-400">14</h2>
                </div>
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                    <p className="text-gray-400">Stable</p>
                    <h2 className="text-3xl font-bold text-green-400">25</h2>
                </div>
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                    <p className="text-gray-400">Beds Available</p>
                    <h2 className="text-3xl font-bold text-yellow-400">32</h2>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Patient Info */}
                {patients.map((patient, index) => (
                    <div key={index} className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg">
                        <h2 className="text-xl mb-4 text-blue-400">Patient Info</h2>
                        <div className="space-y-2 text-gray-300">
                            <p><span className="text-gray-500">Name:</span> {patient.name}</p>
                            <p><span className="text-gray-500">Age:</span> {patient.age}</p>
                            <p><span className="text-gray-500">Room:</span> {patient.room}</p>
                            <p>
                                <span className="text-gray-500">Condition:</span>{" "}
                                <span className={
                                    patient.status === "Critical" ? "text-red-400" :
                                        patient.status === "Stable" ? "text-green-400" :
                                            "text-yellow-400"
                                }>
                                    {patient.status}
                                </span>
                            </p>
                        </div>
                        {patient.status === "Critical" && (
                            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-sm">
                                ⚠ High Risk Patient
                            </div>
                        )}
                    </div>
                ))}

                {/* Vital Signs of first patient as example */}
                {patients[0] && (
                    <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg col-span-2">
                        <h2 className="text-xl mb-6 text-green-400">Vital Signs</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition">
                                <HeartPulse className="mx-auto mb-2 text-green-400 animate-ping" />
                                <p className="text-gray-400 text-sm">Heart Rate</p>
                                <h3 className="text-green-400 text-xl font-bold animate-pulse">{patients[0].hr || 78} bpm</h3>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition">
                                <Droplets className="mx-auto mb-2 text-blue-400 animate-bounce" />
                                <p className="text-gray-400 text-sm">SpO₂</p>
                                <h3 className="text-blue-400 text-xl font-bold">{patients[0].spo2 || 98}%</h3>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition">
                                <Activity className="mx-auto mb-2 text-yellow-400 animate-pulse" />
                                <p className="text-gray-400 text-sm">Blood Pressure</p>
                                <h3 className="text-yellow-400 text-xl font-bold">{patients[0].bp || "120/80"}</h3>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition">
                                <Thermometer className="mx-auto mb-2 text-red-400 animate-pulse" />
                                <p className="text-gray-400 text-sm">Temperature</p>
                                <h3 className="text-red-400 text-xl font-bold">{patients[0].temp || 37}°C</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Departments */}
            <div className="mt-12">
                <h2 className="text-2xl mb-6 text-purple-400 font-bold text-center">Hospital Departments</h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
                    {departments.map((dept, index) => (
                        <Link
                            key={index}
                            to={dept.path} // use only one path per link
                            className={`bg-gradient-to-br ${dept.color} p-6 rounded-2xl text-center font-semibold shadow-lg hover:scale-105 transition duration-300 cursor-pointer flex flex-col items-center hover:shadow-gray-700`}
                        >
                            <img
                                src={dept.image}
                                alt={dept.name}
                                className="w-20 h-20 mb-3 rounded-full bg-white p-1 shadow-md border-blue-800 border-3"
                            />
                            <span className="text-white text-lg font-bold hover:underline">{dept.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Add Patient Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-slate-900 p-6 rounded-xl w-96 text-white">
                        <h2 className="text-xl font-bold mb-4">Add New Patient</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newPatient.name}
                            onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                            className="w-full mb-2 p-2 rounded-lg bg-slate-800 text-white"
                        />
                        <input
                            type="number"
                            placeholder="Age"
                            value={newPatient.age}
                            onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                            className="w-full mb-2 p-2 rounded-lg bg-slate-800 text-white"
                        />
                        <input
                            type="text"
                            placeholder="Room"
                            value={newPatient.room}
                            onChange={(e) => setNewPatient({ ...newPatient, room: e.target.value })}
                            className="w-full mb-2 p-2 rounded-lg bg-slate-800 text-white"
                        />
                        <input
                            type="text"
                            placeholder="Condition"
                            value={newPatient.condition}
                            onChange={(e) => setNewPatient({ ...newPatient, condition: e.target.value })}
                            className="w-full mb-2 p-2 rounded-lg bg-slate-800 text-white"
                        />
                        <select
                            value={newPatient.status}
                            onChange={(e) => setNewPatient({ ...newPatient, status: e.target.value })}
                            className="w-full mb-4 p-2 rounded-lg bg-slate-800 text-white"
                        >
                            <option value="">Select Status</option>
                            <option value="Critical">Critical</option>
                            <option value="Stable">Stable</option>
                            <option value="Observation">Observation</option>
                        </select>
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-700 rounded-lg">Cancel</button>
                            <button onClick={addPatient} className="px-4 py-2 bg-blue-500 rounded-lg">Add</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainPage;