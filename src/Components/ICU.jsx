// ICUAnimatedDashboard.jsx
import React, { useState } from "react";
import Lottie from "lottie-react";
import Heart from "./animations/Heart.json"; // heart beating animation
import lung from "./animations/lung.json";   // lungs breathing animation
import thermometer from "./animations/Thermometer.json"; // temperature animation
import bp from "./animations/blood pressure.json";       // blood pressure animation

const patients = [
    {
        name: "Ali Khan",
        age: 45,
        gender: "Male",
        doctor: "Dr. Ahmed Raza",
        condition: "Pneumonia",
        status: "Critical - High Risk",
        room: "ICU-12",
        hr: 120,
        spo2: 88,
        bp: "150/95",
        temp: 39,
        admissionCondition:
            "Patient admitted with severe breathing difficulty, high fever, and low oxygen saturation (SpO2 82%).",
        currentCondition:
            "Patient is on oxygen support. SpO2 improved to 88%. Fever slightly controlled. Still under critical observation.",
        diagnosis: "Severe Pneumonia with Acute Respiratory Distress Syndrome (ARDS)",
        treatment: [
            "Oxygen Therapy (5 L/min)",
            "IV Antibiotics (Ceftriaxone)",
            "Nebulization",
            "Insulin for diabetes control",
            "IV Fluids",
            "Continuous Monitoring",
        ],
        medications: ["Paracetamol", "Ceftriaxone", "Insulin", "Salbutamol Nebulizer"],
        history: ["Diabetes (5 years)", "Hypertension", "Smoker", "Previous hospitalization (2022)"],
        reports: ["Blood Test", "X-Ray Chest", "ECG", "MRI Brain"],
        doctorNotes:
            "Patient is critical but stable. Continue antibiotics and oxygen therapy. Monitor vitals continuously.",
    },
    {
        name: "Jane Smith",
        age: 28,
        gender: "Female",
        doctor: "Dr. Maria Khan",
        condition: "Post Heart Surgery",
        status: "Stable",
        room: "ICU-1",
        hr: 75,
        spo2: 98,
        bp: "120/80",
        temp: 37,
        admissionCondition: "Admitted post heart surgery with stable vitals.",
        currentCondition: "Recovering well, vitals stable, on light medications.",
        diagnosis: "Post-surgical recovery",
        treatment: ["Monitoring vitals", "Pain management", "Rehabilitation"],
        medications: ["Paracetamol", "Aspirin"],
        history: ["No major illness"],
        reports: ["ECG", "Blood Test"],
        doctorNotes: "Recovery is on track. Monitor vitals daily.",
    },
    {
        name: "Perveen Ashraf",
        age: 50,
        gender: "Female",
        doctor: "Dr. Sana Iqbal",
        condition: "Neurology Checkup",
        status: "Stable",
        room: "ICU-4",
        hr: 72,
        spo2: 97,
        bp: "118/79",
        temp: 36.8,
        admissionCondition: "Routine neurology checkup, no acute symptoms.",
        currentCondition: "Vitals normal, patient stable and responsive.",
        diagnosis: "General neurological assessment",
        treatment: ["Observation", "Routine tests"],
        medications: ["Multivitamins"],
        history: ["Migraine occasionally"],
        reports: ["MRI Brain", "EEG"],
        doctorNotes: "No concerns at the moment.",
    },
    {
        name: "Ashraf Naveed",
        age: 60,
        gender: "Male",
        doctor: "Dr. Faisal Ali",
        condition: "Epilepsy",
        status: "Stable",
        room: "ICU-8",
        hr: 80,
        spo2: 96,
        bp: "130/85",
        temp: 37.2,
        admissionCondition: "Admitted after mild seizure episode.",
        currentCondition: "Seizures controlled, vitals stable.",
        diagnosis: "Epilepsy, controlled with medications",
        treatment: ["Anti-epileptic drugs", "Observation"],
        medications: ["Levetiracetam", "Clobazam"],
        history: ["Epilepsy (10 years)"],
        reports: ["EEG", "Blood Test"],
        doctorNotes: "Monitor for seizure recurrence.",
    },
    {
        name: "William Brown",
        age: 60,
        gender: "Male",
        doctor: "Dr. Nida Shah",
        condition: "Oncology",
        status: "Critical",
        room: "ICU-2",
        hr: 110,
        spo2: 90,
        bp: "145/92",
        temp: 38.5,
        admissionCondition: "Patient admitted with advanced cancer and low oxygen saturation.",
        currentCondition: "Receiving chemotherapy and oxygen support. Condition critical.",
        diagnosis: "Advanced lung carcinoma",
        treatment: ["Oxygen Therapy", "Chemotherapy", "Pain Management", "IV Fluids"],
        medications: ["Morphine", "Chemotherapy drugs"],
        history: ["Smoker (20 years)", "Hypertension"],
        reports: ["CT Scan", "Blood Test", "PET Scan"],
        doctorNotes: "High risk patient. Intensive monitoring required.",
    },
    {
        name: "Olivia Wilson",
        age: 33,
        gender: "Female",
        doctor: "Dr. Kamran Sheikh",
        condition: "Laboratory Tests",
        status: "Stable",
        room: "ICU-5",
        hr: 70,
        spo2: 99,
        bp: "115/75",
        temp: 36.5,
        admissionCondition: "Routine lab test admission.",
        currentCondition: "All vitals stable, awaiting results.",
        diagnosis: "Routine health checkup",
        treatment: ["Observation"],
        medications: [],
        history: ["No major illness"],
        reports: ["Blood Test", "Urine Test"],
        doctorNotes: "No issues detected.",
    },
    {
        name: "Hassan Raza",
        age: 55,
        gender: "Male",
        doctor: "Dr. Ayesha Malik",
        condition: "Cardiac Arrest Recovery",
        status: "Critical",
        room: "ICU-6",
        hr: 130,
        spo2: 85,
        bp: "160/100",
        temp: 39.5,
        admissionCondition: "Patient admitted post cardiac arrest with low SpO2 and high BP.",
        currentCondition: "Under intensive care, on ventilator support.",
        diagnosis: "Post cardiac arrest, high risk patient",
        treatment: ["Ventilator", "IV Medications", "Continuous monitoring", "Cardiac support"],
        medications: ["Aspirin", "Beta-blockers", "Nitroglycerin"],
        history: ["Heart disease (10 years)", "Hypertension"],
        reports: ["ECG", "Blood Test", "Echocardiography"],
        doctorNotes: "Patient critical, monitor closely.",
    },
    {
        name: "Fatima Noor",
        age: 40,
        gender: "Female",
        doctor: "Dr. Salman Qureshi",
        condition: "Severe Asthma",
        status: "Under Observation",
        room: "ICU-7",
        hr: 95,
        spo2: 92,
        bp: "135/88",
        temp: 37.8,
        admissionCondition: "Admitted during severe asthma attack with low SpO2.",
        currentCondition: "Receiving nebulization, condition improving.",
        diagnosis: "Acute asthma exacerbation",
        treatment: ["Nebulization", "Oxygen therapy", "Steroids"],
        medications: ["Salbutamol", "Prednisolone"],
        history: ["Chronic asthma since childhood"],
        reports: ["Pulmonary function test", "X-ray Chest"],
        doctorNotes: "Monitor breathing and oxygen saturation.",
    },
    {
        name: "Usman Tariq",
        age: 47,
        gender: "Male",
        doctor: "Dr. Samina Farooq",
        condition: "Diabetes Complications",
        status: "Stable",
        room: "ICU-9",
        hr: 78,
        spo2: 97,
        bp: "125/82",
        temp: 36.9,
        admissionCondition: "Patient admitted with uncontrolled blood sugar and mild infection.",
        currentCondition: "Blood sugar stabilized, vitals normal.",
        diagnosis: "Type 2 diabetes with mild infection",
        treatment: ["Insulin therapy", "Antibiotics", "Diet monitoring"],
        medications: ["Insulin", "Amoxicillin"],
        history: ["Diabetes (8 years)"],
        reports: ["Blood Sugar Test", "Urine Test"],
        doctorNotes: "Patient stable, monitor blood sugar daily.",
    },
    {
        name: "Sara Ahmed",
        age: 36,
        gender: "Female",
        doctor: "Dr. Iqra Javed",
        condition: "Observation Post Trauma",
        status: "Under Observation",
        room: "ICU-10",
        hr: 90,
        spo2: 94,
        bp: "130/85",
        temp: 37.5,
        admissionCondition: "Admitted after minor trauma, vitals slightly unstable.",
        currentCondition: "Observation continued, responding well to care.",
        diagnosis: "Post-trauma monitoring",
        treatment: ["Pain management", "Observation", "Physiotherapy"],
        medications: ["Paracetamol"],
        history: ["Minor accident (2025)"],
        reports: ["X-ray", "Blood Test"],
        doctorNotes: "Continue observation for 24-48 hrs.",
    },
    {
        name: "Bilal Khan",
        age: 52,
        gender: "Male",
        doctor: "Dr. Tahir Mahmood",
        condition: "Minor Surgery Recovery",
        status: "Stable",
        room: "ICU-11",
        hr: 80,
        spo2: 97,
        bp: "122/80",
        temp: 36.9,
        admissionCondition: "Post minor abdominal surgery.",
        currentCondition: "Vitals stable, patient mobile, mild pain.",
        diagnosis: "Surgery recovery",
        treatment: ["Wound care", "Pain management", "Observation"],
        medications: ["Paracetamol", "Antibiotics"],
        history: ["Hypertension"],
        reports: ["Blood Test", "Ultrasound Abdomen"],
        doctorNotes: "Stable, discharge possible in 2-3 days.",
    },
];

function ICU() {
    const [selectedPatient, setSelectedPatient] = useState(null);

    return (
        <section className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">
                        ICU Patient Monitoring Dashboard
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
                                className={`p-6 rounded-xl shadow-lg cursor-pointer text-white transition hover:scale-105 ${patient.status.includes("Critical")
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
                                    <h3 className="text-lg font-semibold"> {selectedPatient.name}</h3>
                                    <p className="text-gray-500">                                     {selectedPatient.age} yrs | {selectedPatient.gender}
                                    </p>
                                    <p className="text-gray-500 mt-1">
                                        <strong>Doctor:</strong> {selectedPatient.doctor}
                                    </p>
                                    <div className="mt-4 text-sm text-gray-600 text-left">
                                        <p><strong>Condition:</strong> {selectedPatient.condition}</p>
                                        <p><strong>Room:</strong> {selectedPatient.room}</p>
                                        <p><strong>Status:</strong> {selectedPatient.status}</p>
                                    </div>
                                </div>

                                {/* Vitals with Animations */}
                                <div className="col-span-2 grid grid-cols-2 gap-4">
                                    {/* Heart Rate */}
                                    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
                                        <Lottie animationData={Heart} loop={true} className="w-24 h-24" />
                                        <p className="text-red-500 font-bold text-xl mt-2">{selectedPatient.hr} bpm</p>
                                    </div>

                                    {/* SpO₂ */}
                                    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
                                        <Lottie animationData={lung} loop={true} className="w-24 h-24" />
                                        <p className="text-blue-500 font-bold text-xl mt-2">{selectedPatient.spo2}%</p>
                                    </div>

                                    {/* Blood Pressure */}
                                    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
                                        <Lottie animationData={bp} loop={true} className="w-24 h-24" />
                                        <p className="text-green-500 font-bold text-xl mt-2">{selectedPatient.bp}</p>
                                    </div>

                                    {/* Temperature */}
                                    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
                                        <Lottie animationData={thermometer} loop={true} className="w-24 h-24" />
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

export default ICU;