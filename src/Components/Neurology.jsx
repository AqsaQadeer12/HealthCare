// ICUAnimatedDashboard.jsx
import React, { useState } from "react";
import Lottie from "lottie-react";
import Heart from "./animations/Heart.json"; // heart beating animation
import lung from "./animations/lung.json";   // lungs breathing animation
import thermometer from "./animations/Thermometer.json"; // temperature animation
import bp from "./animations/blood pressure.json";       // blood pressure animation


const patients = [
    {
        name: "Adeel Shah",
        age: 38,
        gender: "Male",
        doctor: "Dr. Ayesha Siddiqui",
        condition: "Severe Traumatic Brain Injury",
        status: "Critical",
        room: "Neuro-ICU-1",
        hr: 140,
        spo2: 88,
        bp: "150/95",
        temp: 37.8,
        admissionCondition: "Head trauma after road traffic accident, GCS 6.",
        currentCondition: "Intubated, ICP monitoring ongoing.",
        diagnosis: "Severe TBI with intracranial hemorrhage",
        treatment: ["ICP monitoring", "Mechanical ventilation", "IV Mannitol", "Neurosurgery consult"],
        medications: ["Mannitol IV", "Analgesics", "Anticonvulsants"],
        history: ["No prior neurological illness"],
        reports: ["CT Brain", "MRI Brain", "CBC"],
        doctorNotes: "Prepare for emergency decompressive craniectomy."
    },
    {
        name: "Hina Qureshi",
        age: 27,
        gender: "Female",
        doctor: "Dr. Salman Qureshi",
        condition: "Refractory Status Epilepticus",
        status: "Critical",
        room: "Neuro-ICU-2",
        hr: 125,
        spo2: 91,
        bp: "130/85",
        temp: 37.2,
        admissionCondition: "Continuous generalized tonic-clonic seizures.",
        currentCondition: "IV anticonvulsants ongoing, airway secured.",
        diagnosis: "Refractory status epilepticus",
        treatment: ["IV Lorazepam", "IV Levetiracetam", "Monitoring"],
        medications: ["Lorazepam IV", "Levetiracetam IV"],
        history: ["Epilepsy 8 years"],
        reports: ["EEG", "MRI Brain", "Electrolytes"],
        doctorNotes: "Monitor for seizure recurrence and metabolic derangements."
    },
    {
        name: "Sami Ullah",
        age: 52,
        gender: "Male",
        doctor: "Dr. Amina Farooq",
        condition: "Acute Ischemic Stroke",
        status: "Critical",
        room: "Neuro-ICU-3",
        hr: 110,
        spo2: 95,
        bp: "180/110",
        temp: 37.5,
        admissionCondition: "Sudden right-sided weakness and slurred speech.",
        currentCondition: "Thrombolysis started, neuro monitoring ongoing.",
        diagnosis: "MCA territory ischemic stroke",
        treatment: ["IV tPA", "BP control", "Neuro monitoring"],
        medications: ["Aspirin", "Clopidogrel", "Statins"],
        history: ["Hypertension", "Diabetes"],
        reports: ["CT Brain", "MRI Brain", "CBC", "Coagulation profile"],
        doctorNotes: "Monitor for hemorrhagic transformation."
    },
    {
        name: "Fatima Iqbal",
        age: 34,
        gender: "Female",
        doctor: "Dr. Imran Qadir",
        condition: "Guillain-Barre Syndrome",
        status: "Critical",
        room: "Neuro-ICU-4",
        hr: 95,
        spo2: 88,
        bp: "120/75",
        temp: 36.8,
        admissionCondition: "Progressive weakness, difficulty breathing.",
        currentCondition: "Plasmapheresis started, ventilatory support as needed.",
        diagnosis: "Acute demyelinating polyneuropathy",
        treatment: ["Plasmapheresis", "Monitoring", "Supportive care"],
        medications: ["IV Immunoglobulins", "Pain management"],
        history: ["No prior neurological illness"],
        reports: ["Nerve conduction study", "CSF analysis"],
        doctorNotes: "Monitor respiratory function closely."
    },
    {
        name: "Bilal Hassan",
        age: 45,
        gender: "Male",
        doctor: "Dr. Samina Farooq",
        condition: "Mild Ischemic Stroke",
        status: "Under Observation",
        room: "Neuro-ED-1",
        hr: 85,
        spo2: 97,
        bp: "135/85",
        temp: 36.9,
        admissionCondition: "Sudden mild left-hand weakness, no speech deficit.",
        currentCondition: "Observation and neuroimaging completed, vitals stable.",
        diagnosis: "Small vessel ischemic stroke",
        treatment: ["Antiplatelets", "BP management"],
        medications: ["Aspirin", "Statins"],
        history: ["Hypertension"],
        reports: ["CT Brain", "MRI Brain", "Blood Test"],
        doctorNotes: "Monitor for recurrence."
    },
    {
        name: "Sara Latif",
        age: 31,
        gender: "Female",
        doctor: "Dr. Tahir Mahmood",
        condition: "Intracerebral Hemorrhage",
        status: "Critical",
        room: "Neuro-ICU-5",
        hr: 115,
        spo2: 90,
        bp: "165/100",
        temp: 37.6,
        admissionCondition: "Sudden headache, vomiting, left-sided weakness.",
        currentCondition: "ICU monitoring, antihypertensive therapy ongoing.",
        diagnosis: "Spontaneous ICH",
        treatment: ["BP management", "Neuro monitoring", "Surgery if required"],
        medications: ["Labetalol IV", "Analgesics", "Anticonvulsants"],
        history: ["Hypertension"],
        reports: ["CT Brain", "MRI Brain", "CBC"],
        doctorNotes: "High risk, monitor neurological deterioration."
    },
    {
        name: "Omar Rizvi",
        age: 56,
        gender: "Male",
        doctor: "Dr. Nida Shah",
        condition: "Severe Meningitis",
        status: "Critical",
        room: "Neuro-ICU-6",
        hr: 130,
        spo2: 89,
        bp: "125/70",
        temp: 39.5,
        admissionCondition: "High fever, neck stiffness, confusion.",
        currentCondition: "IV antibiotics started, close monitoring ongoing.",
        diagnosis: "Bacterial meningitis with encephalopathy",
        treatment: ["IV Ceftriaxone", "IV fluids", "Neuro monitoring"],
        medications: ["Ceftriaxone", "Paracetamol", "Anticonvulsants if seizures occur"],
        history: ["Diabetes"],
        reports: ["CSF Analysis", "Blood cultures", "MRI Brain"],
        doctorNotes: "Monitor for signs of raised ICP."
    },
    {
        name: "Ayesha Farooq",
        age: 30,
        gender: "Female",
        doctor: "Dr. Kamran Sheikh",
        condition: "Migraine with Aura",
        status: "Under Observation",
        room: "Neuro-ED-2",
        hr: 80,
        spo2: 99,
        bp: "120/75",
        temp: 36.7,
        admissionCondition: "Severe unilateral headache with visual aura.",
        currentCondition: "Responding to medication, vitals stable.",
        diagnosis: "Migraine with aura",
        treatment: ["Pain management", "Antiemetics"],
        medications: ["Paracetamol", "Sumatriptan"],
        history: ["Migraine since 5 years"],
        reports: ["None"],
        doctorNotes: "Monitor response to treatment."
    },
    {
        name: "Danish Ali",
        age: 42,
        gender: "Male",
        doctor: "Dr. Faisal Ali",
        condition: "Parkinson’s Disease Flare",
        status: "Under Observation",
        room: "Neuro-ED-3",
        hr: 78,
        spo2: 97,
        bp: "130/80",
        temp: 36.5,
        admissionCondition: "Severe tremors, difficulty walking.",
        currentCondition: "Medication adjustment and monitoring ongoing.",
        diagnosis: "Exacerbation of Parkinson’s disease",
        treatment: ["Levodopa dose adjustment", "Physical therapy", "Monitoring"],
        medications: ["Levodopa-Carbidopa", "Ropinirole"],
        history: ["Parkinson’s disease 7 years"],
        reports: ["MRI Brain", "Blood Test"],
        doctorNotes: "Assess motor response and adjust therapy."
    },
    {
        name: "Hira Shah",
        age: 44,
        gender: "Female",
        doctor: "Dr. Noman Sheikh",
        condition: "Acute Peripheral Neuropathy",
        status: "Under Observation",
        room: "Neuro-ED-4",
        hr: 88,
        spo2: 96,
        bp: "125/80",
        temp: 37.0,
        admissionCondition: "Tingling, numbness in hands and feet.",
        currentCondition: "Neurological exam done, vitals stable.",
        diagnosis: "Acute sensory neuropathy",
        treatment: ["Pain management", "Vitamin B12 supplementation", "Observation"],
        medications: ["Gabapentin", "B12 supplement"],
        history: ["Diabetes 5 years"],
        reports: ["Nerve conduction study", "Blood Test"],
        doctorNotes: "Monitor for progression."
    }
    // Continue adding patients up to 20 in the same structure
];
function Neurology() {
    const [selectedPatient, setSelectedPatient] = useState(null);

    return (
        <section className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Neurology Patient Dashboard
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

export default Neurology;