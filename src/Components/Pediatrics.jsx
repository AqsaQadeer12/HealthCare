// ICUAnimatedDashboard.jsx
import React, { useState } from "react";
import Lottie from "lottie-react";
import Heart from "./animations/Heart.json"; // heart beating animation
import lung from "./animations/lung.json";   // lungs breathing animation
import thermometer from "./animations/Thermometer.json"; // temperature animation
import bp from "./animations/blood pressure.json";       // blood pressure animation

const patients = [
    {
        name: "Aliya Khan",
        age: 6,
        gender: "Female",
        doctor: "Dr. Sara Ahmed",
        condition: "Acute Asthma Attack",
        status: "Critical",
        room: "Pediatrics-ICU-1",
        hr: 130,
        spo2: 88,
        bp: "100/65",
        temp: 37.5,
        admissionCondition: "Severe asthma attack, difficulty breathing",
        currentCondition: "Nebulization ongoing, oxygen support",
        diagnosis: "Status asthmaticus",
        treatment: ["Nebulization with Salbutamol", "IV Steroids", "Oxygen therapy"],
        medications: ["Salbutamol inhaler", "Prednisolone IV"],
        history: ["Asthma diagnosed 3 years ago"],
        reports: ["Chest X-ray", "CBC"],
        doctorNotes: "Monitor oxygen saturation closely."
    },
    {
        name: "Hamza Ali",
        age: 4,
        gender: "Male",
        doctor: "Dr. Imran Qadir",
        condition: "Acute Gastroenteritis",
        status: "Under Observation",
        room: "Pediatrics-ICU-2",
        hr: 110,
        spo2: 97,
        bp: "95/60",
        temp: 38.2,
        admissionCondition: "Frequent vomiting and diarrhea, signs of dehydration",
        currentCondition: "IV fluids administered, vitals stable",
        diagnosis: "Dehydration due to viral gastroenteritis",
        treatment: ["Oral rehydration solution", "IV fluids if severe", "Electrolyte correction"],
        medications: ["ORS solution", "IV saline"],
        history: ["No chronic illness"],
        reports: ["Electrolytes", "CBC", "Stool examination"],
        doctorNotes: "Monitor hydration and electrolyte levels."
    },
    {
        name: "Zoya Malik",
        age: 8,
        gender: "Female",
        doctor: "Dr. Tahir Mahmood",
        condition: "Febrile Seizures",
        status: "Stable",
        room: "Pediatrics-ED-1",
        hr: 100,
        spo2: 98,
        bp: "95/60",
        temp: 39.0,
        admissionCondition: "Single episode of generalized tonic-clonic seizure during fever",
        currentCondition: "Patient resting, fever controlled",
        diagnosis: "Simple febrile seizure secondary to viral infection",
        treatment: ["Antipyretics", "Observation", "Monitor vitals and neurological status"],
        medications: ["Paracetamol"],
        history: ["Mild recurrent fevers"],
        reports: ["EEG if recurrence", "CBC"],
        doctorNotes: "Educate parents about seizure precautions."
    },
    {
        name: "Danish Riaz",
        age: 3,
        gender: "Male",
        doctor: "Dr. Nida Shah",
        condition: "Pneumonia",
        status: "Critical",
        room: "Pediatrics-ICU-3",
        hr: 125,
        spo2: 90,
        bp: "90/55",
        temp: 38.5,
        admissionCondition: "Cough, difficulty breathing, high fever",
        currentCondition: "Oxygen support and IV antibiotics ongoing",
        diagnosis: "Community-acquired pneumonia",
        treatment: ["IV antibiotics", "Oxygen therapy", "Fluid management"],
        medications: ["Amoxicillin IV", "Paracetamol"],
        history: ["No chronic illness"],
        reports: ["Chest X-ray", "CBC", "Blood culture"],
        doctorNotes: "Monitor respiratory function and oxygen saturation."
    },
    {
        name: "Sara Ahmed",
        age: 5,
        gender: "Female",
        doctor: "Dr. Kamran Sheikh",
        condition: "Juvenile Idiopathic Arthritis Flare",
        status: "Under Observation",
        room: "Pediatrics-ED-2",
        hr: 95,
        spo2: 99,
        bp: "95/60",
        temp: 37.2,
        admissionCondition: "Painful swelling in multiple joints, difficulty walking",
        currentCondition: "Pain controlled with NSAIDs, vitals stable",
        diagnosis: "Active polyarticular JIA flare",
        treatment: ["NSAIDs", "Corticosteroids if needed", "Physiotherapy"],
        medications: ["Ibuprofen", "Prednisolone if required"],
        history: ["Diagnosed 2 years ago"],
        reports: ["X-ray joints", "CBC", "ESR"],
        doctorNotes: "Monitor joint mobility and inflammation."
    },
    {
        name: "Ayaan Qureshi",
        age: 2,
        gender: "Male",
        doctor: "Dr. Amina Farooq",
        condition: "Viral Bronchiolitis",
        status: "Critical",
        room: "Pediatrics-ICU-4",
        hr: 140,
        spo2: 85,
        bp: "85/55",
        temp: 38.0,
        admissionCondition: "Rapid breathing and wheezing due to RSV infection",
        currentCondition: "Oxygen therapy ongoing, nebulization as needed",
        diagnosis: "Respiratory syncytial virus infection",
        treatment: ["Oxygen therapy", "IV fluids", "Nebulization if required"],
        medications: ["Salbutamol nebulizer", "IV fluids"],
        history: ["No chronic illness"],
        reports: ["Chest X-ray", "CBC"],
        doctorNotes: "Monitor respiratory distress and hydration."
    },
    {
        name: "Hira Shah",
        age: 7,
        gender: "Female",
        doctor: "Dr. Faisal Ali",
        condition: "Type 1 Diabetes Hypoglycemia",
        status: "Critical",
        room: "Pediatrics-ICU-5",
        hr: 110,
        spo2: 97,
        bp: "100/65",
        temp: 36.8,
        admissionCondition: "Low blood sugar, unresponsive episode",
        currentCondition: "IV dextrose administered, blood glucose monitored",
        diagnosis: "Severe hypoglycemia",
        treatment: ["IV Dextrose", "Blood glucose monitoring", "Adjust insulin dose"],
        medications: ["Insulin adjustment", "IV Dextrose"],
        history: ["Type 1 Diabetes diagnosed 2 years ago"],
        reports: ["Blood glucose", "Electrolytes", "CBC"],
        doctorNotes: "Monitor for hypoglycemia and adjust insulin accordingly."
    }
];

function Pediatrics() {
    const [selectedPatient, setSelectedPatient] = useState(null);

    return (
        <section className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Pediatrics Patient Dashboard
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

export default Pediatrics;