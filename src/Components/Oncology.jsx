// ICUAnimatedDashboard.jsx
import React, { useState } from "react";
import Lottie from "lottie-react";
import Heart from "./animations/Heart.json"; // heart beating animation
import lung from "./animations/lung.json";   // lungs breathing animation
import thermometer from "./animations/Thermometer.json"; // temperature animation
import bp from "./animations/blood pressure.json";       // blood pressure animation


const patients = [
    {
        name: "Ayesha Raza",
        age: 34,
        gender: "Female",
        doctor: "Dr. Samina Iqbal",
        condition: "Breast Cancer",
        status: "Critical",
        room: "Oncology-ICU-1",
        hr: 95,
        spo2: 97,
        bp: "110/70",
        temp: 37.1,
        admissionCondition: "Severe fatigue, post-surgery complications",
        currentCondition: "Chemotherapy ongoing, vitals monitored closely",
        diagnosis: "Stage II Invasive Ductal Carcinoma",
        treatment: ["Chemotherapy", "Radiation therapy", "Supportive care"],
        medications: ["Doxorubicin", "Cyclophosphamide", "Trastuzumab"],
        history: ["Breast cancer diagnosed 1 year ago", "Mastectomy performed 6 months ago"],
        reports: ["Mammogram", "CT scan", "CBC"],
        doctorNotes: "Monitor for neutropenia and infection risk."
    },
    {
        name: "Bilal Ahmed",
        age: 42,
        gender: "Male",
        doctor: "Dr. Kamran Siddiqui",
        condition: "Colorectal Cancer",
        status: "Under Observation",
        room: "Oncology-ICU-2",
        hr: 88,
        spo2: 98,
        bp: "115/75",
        temp: 36.8,
        admissionCondition: "Abdominal pain and blood in stool",
        currentCondition: "Post-surgery recovery, scheduled for next chemotherapy cycle",
        diagnosis: "Stage III Colorectal Adenocarcinoma",
        treatment: ["Surgical resection", "FOLFOX chemotherapy", "Supportive care"],
        medications: ["5-Fluorouracil", "Oxaliplatin", "Leucovorin"],
        history: ["Colorectal cancer diagnosed 8 months ago", "Partial colectomy performed"],
        reports: ["Colonoscopy", "CT Abdomen", "CBC"],
        doctorNotes: "Monitor for post-surgical complications and chemotherapy tolerance."
    }
];
function Oncology() {
    const [selectedPatient, setSelectedPatient] = useState(null);

    return (
        <section className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Oncology Patient Dashboard
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Click on a patient to view full clinical details with animated vitals
                    </p>
                </div>

                {/* Patient Cards */}
                <div className="flex flex-wrap">
                    {patients.map((patient, index) => (
                        <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                            <div
                                onClick={() => setSelectedPatient(patient)}
                                className={`p-6 rounded-xl shadow-lg cursor-pointer text-white transition hover:scale-105 ${patient.status === "Critical"
                                    ? "bg-red-700"
                                    : patient.status.includes("Observation")
                                        ? "bg-yellow-600"
                                        : "bg-green-700"
                                    }`}
                            >
                                <h2 className="text-xl font-bold">{patient.name}</h2>
                                <p>Age: {patient.age}</p>
                                <p>Condition: {patient.condition}</p>
                                <p>Room: {patient.room}</p>
                                <span className="mt-2 inline-block bg-white/30 px-3 py-1 rounded">
                                    {patient.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedPatient && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-gray-50 w-[1000px] rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[90vh]">
                            {/* Header */}
                            <div className="flex justify-between mb-4">
                                <h2 className="text-2xl font-bold">Patient Dashboard</h2>
                                <button
                                    onClick={() => setSelectedPatient(null)}
                                    className="text-red-500 font-bold"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Top Section */}
                            <div className="grid grid-cols-3 gap-6">
                                {/* Patient Info */}
                                <div className="bg-white p-5 rounded-xl shadow text-center">
                                    <img
                                        src="https://img.icons8.com/color/96/user.png"
                                        className="mx-auto mb-3"
                                        alt="patient"
                                    />
                                    <h3 className="text-lg font-semibold">{selectedPatient.name}</h3>
                                    <p className="text-gray-500">{selectedPatient.age} yrs | {selectedPatient.gender}</p>
                                    <p className="text-gray-500 mt-1">
                                        <strong>Doctor:</strong> {selectedPatient.doctor}
                                    </p>
                                    <div className="mt-4 text-sm text-gray-600 text-left">
                                        <p><strong>Condition:</strong> {selectedPatient.condition}</p>
                                        <p><strong>Room:</strong> {selectedPatient.room}</p>
                                        <p><strong>Status:</strong> {selectedPatient.status}</p>
                                    </div>
                                </div>

                                {/* Vitals */}
                                <div className="col-span-2 grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
                                        <Lottie animationData={Heart} loop className="w-24 h-24" />
                                        <p className="text-red-500 font-bold text-xl mt-2">{selectedPatient.hr} bpm</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
                                        <Lottie animationData={lung} loop className="w-24 h-24" />
                                        <p className="text-blue-500 font-bold text-xl mt-2">{selectedPatient.spo2}%</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
                                        <Lottie animationData={bp} loop className="w-24 h-24" />
                                        <p className="text-green-500 font-bold text-xl mt-2">{selectedPatient.bp}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
                                        <Lottie animationData={thermometer} loop className="w-24 h-24" />
                                        <p className="text-orange-500 font-bold text-xl mt-2">{selectedPatient.temp}°C</p>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Info */}
                            <div className="grid grid-cols-2 gap-6 mt-6">
                                <div className="bg-white p-4 rounded-xl shadow">
                                    <h3 className="font-semibold text-blue-700 mb-2">Admission Condition</h3>
                                    <p className="text-sm text-gray-600">{selectedPatient.admissionCondition}</p>

                                    <h3 className="font-semibold text-green-700 mt-4 mb-2">Current Condition</h3>
                                    <p className="text-sm text-gray-600">{selectedPatient.currentCondition}</p>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow">
                                    <h3 className="font-semibold mb-2">Diagnosis</h3>
                                    <p className="text-sm text-gray-600">{selectedPatient.diagnosis}</p>

                                    <h3 className="font-semibold mt-4 mb-2">Treatment Plan</h3>
                                    <ul className="list-disc ml-4 text-sm text-gray-600">
                                        {selectedPatient.treatment?.map((t, i) => <li key={i}>{t}</li>)}
                                    </ul>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow">
                                    <h3 className="font-semibold mb-2">Medications</h3>
                                    <ul className="list-disc ml-4 text-sm text-gray-600">
                                        {selectedPatient.medications?.map((m, i) => <li key={i}>{m}</li>)}
                                    </ul>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow">
                                    <h3 className="font-semibold mb-2">Medical History</h3>
                                    <ul className="list-disc ml-4 text-sm text-gray-600">
                                        {selectedPatient.history?.map((h, i) => <li key={i}>{h}</li>)}
                                    </ul>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow">
                                    <h3 className="font-semibold mb-2">Reports</h3>
                                    <ul className="list-disc ml-4 text-sm text-gray-600">
                                        {selectedPatient.reports?.map((r, i) => <li key={i}>{r}</li>)}
                                    </ul>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow">
                                    <h3 className="font-semibold text-red-600 mb-2">Doctor Notes</h3>
                                    <p className="text-sm text-gray-600">{selectedPatient.doctorNotes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Oncology;