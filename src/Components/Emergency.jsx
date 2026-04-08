// ICUAnimatedDashboard.jsx
import React, { useState } from "react";
import Lottie from "lottie-react";
import Heart from "./animations/Heart.json"; // heart beating animation
import lung from "./animations/lung.json";   // lungs breathing animation
import thermometer from "./animations/Thermometer.json"; // temperature animation
import bp from "./animations/blood pressure.json";       // blood pressure animation


const patients = [
    {
        name: "Ayaan Malik",
        age: 35,
        gender: "Male",
        doctor: "Dr. Ayesha Siddiqui",
        condition: "Road Traffic Accident",
        status: "Critical",
        room: "ED-1",
        hr: 140,
        spo2: 82,
        bp: "155/100",
        temp: 38.7,
        admissionCondition: "Hit by a car, multiple fractures, bleeding.",
        currentCondition: "IV fluids started, unstable vitals.",
        diagnosis: "Polytrauma with hemorrhagic shock",
        treatment: ["IV fluids", "Blood transfusion", "Pain management", "Emergency surgery prep"],
        medications: ["Analgesics", "Tranexamic Acid"],
        history: ["None"],
        reports: ["X-Ray", "CT Scan", "Blood Test"],
        doctorNotes: "Immediate surgical intervention required."
    },
    {
        name: "Zoya Khan",
        age: 28,
        gender: "Female",
        doctor: "Dr. Salman Qureshi",
        condition: "Severe Asthma Attack",
        status: "Critical",
        room: "ED-2",
        hr: 130,
        spo2: 78,
        bp: "140/85",
        temp: 37.9,
        admissionCondition: "Severe difficulty breathing, wheezing.",
        currentCondition: "Nebulization ongoing, SpO2 low.",
        diagnosis: "Status asthmaticus",
        treatment: ["Nebulization", "Steroids IV", "High-flow oxygen"],
        medications: ["Salbutamol", "Prednisolone"],
        history: ["Chronic asthma"],
        reports: ["Chest X-Ray", "Pulmonary function test"],
        doctorNotes: "Monitor oxygen saturation closely."
    },
    {
        name: "Hamza Riaz",
        age: 50,
        gender: "Male",
        doctor: "Dr. Amina Farooq",
        condition: "Acute Myocardial Infarction",
        status: "Critical",
        room: "ED-3",
        hr: 145,
        spo2: 92,
        bp: "170/110",
        temp: 37.8,
        admissionCondition: "Severe chest pain, sweating, nausea.",
        currentCondition: "ECG shows STEMI, on IV nitrates.",
        diagnosis: "Acute myocardial infarction",
        treatment: ["Oxygen therapy", "IV nitrates", "Pain management"],
        medications: ["Aspirin", "Clopidogrel", "Morphine"],
        history: ["Hypertension", "Hyperlipidemia"],
        reports: ["ECG", "Troponin", "Echocardiography"],
        doctorNotes: "Immediate cardiac intervention required."
    },
    {
        name: "Mehreen Aslam",
        age: 33,
        gender: "Female",
        doctor: "Dr. Imran Qadir",
        condition: "Diabetic Hypoglycemia",
        status: "Critical",
        room: "ED-4",
        hr: 115,
        spo2: 95,
        bp: "130/85",
        temp: 36.6,
        admissionCondition: "Confused, sweating, low blood sugar.",
        currentCondition: "IV glucose given, regaining consciousness slowly.",
        diagnosis: "Severe hypoglycemia",
        treatment: ["IV dextrose", "Monitoring", "Electrolyte check"],
        medications: ["Dextrose IV"],
        history: ["Type 2 Diabetes (8 years)"],
        reports: ["Blood glucose", "Electrolytes"],
        doctorNotes: "Monitor closely until fully stable."
    },
    {
        name: "Ali Raza",
        age: 42,
        gender: "Male",
        doctor: "Dr. Samina Farooq",
        condition: "Acute Appendicitis",
        status: "Under Observation",
        room: "ED-5",
        hr: 95,
        spo2: 97,
        bp: "125/80",
        temp: 38.1,
        admissionCondition: "Severe abdominal pain, nausea, vomiting.",
        currentCondition: "Awaiting ultrasound and labs.",
        diagnosis: "Acute appendicitis",
        treatment: ["Pain management", "Observation", "IV fluids"],
        medications: ["Paracetamol"],
        history: ["No prior illness"],
        reports: ["Abdominal Ultrasound", "Blood Test"],
        doctorNotes: "Prepare for possible surgery."
    },
    {
        name: "Sara Ali",
        age: 29,
        gender: "Female",
        doctor: "Dr. Tahir Mahmood",
        condition: "Stroke",
        status: "Critical",
        room: "ED-6",
        hr: 120,
        spo2: 91,
        bp: "160/100",
        temp: 37.3,
        admissionCondition: "Sudden weakness on left side, slurred speech.",
        currentCondition: "Neurological monitoring ongoing, thrombolysis started.",
        diagnosis: "Acute ischemic stroke",
        treatment: ["Thrombolytic therapy", "BP control", "Neuro monitoring"],
        medications: ["Aspirin", "Clopidogrel"],
        history: ["Hypertension"],
        reports: ["CT Brain", "MRI Brain", "Blood Test"],
        doctorNotes: "Monitor for neurological deterioration."
    },
    {
        name: "Omar Javed",
        age: 55,
        gender: "Male",
        doctor: "Dr. Nida Shah",
        condition: "Severe Sepsis",
        status: "Critical",
        room: "ED-7",
        hr: 140,
        spo2: 87,
        bp: "100/60",
        temp: 40.2,
        admissionCondition: "High fever, confusion, low BP.",
        currentCondition: "IV antibiotics and fluids started.",
        diagnosis: "Septic shock",
        treatment: ["IV antibiotics", "IV fluids", "Vasopressors"],
        medications: ["Meropenem", "Paracetamol"],
        history: ["Diabetes", "CKD"],
        reports: ["Blood cultures", "CBC", "Urine Culture"],
        doctorNotes: "Monitor vitals closely, ICU transfer if deteriorates."
    },
    {
        name: "Ayesha Naveed",
        age: 31,
        gender: "Female",
        doctor: "Dr. Kamran Sheikh",
        condition: "Food Poisoning",
        status: "Critical",
        room: "ED-8",
        hr: 125,
        spo2: 94,
        bp: "110/70",
        temp: 38.5,
        admissionCondition: "Severe vomiting, diarrhea, dehydration.",
        currentCondition: "IV fluids started, condition stable.",
        diagnosis: "Acute gastroenteritis with dehydration",
        treatment: ["IV fluids", "Electrolyte correction", "Anti-nausea meds"],
        medications: ["Ondansetron", "Electrolyte solution IV"],
        history: ["No prior illness"],
        reports: ["Blood Test", "Stool Test"],
        doctorNotes: "Monitor hydration and electrolytes."
    },
    {
        name: "Danish Tariq",
        age: 47,
        gender: "Male",
        doctor: "Dr. Faisal Ali",
        condition: "Allergic Reaction",
        status: "Critical",
        room: "ED-9",
        hr: 110,
        spo2: 89,
        bp: "90/60",
        temp: 37.2,
        admissionCondition: "Severe hives, swelling of lips and tongue, difficulty breathing.",
        currentCondition: "Epinephrine given, oxygen therapy ongoing.",
        diagnosis: "Anaphylaxis",
        treatment: ["Epinephrine IM", "Oxygen therapy", "IV fluids"],
        medications: ["Epinephrine", "Antihistamines", "Steroids"],
        history: ["Peanut allergy"],
        reports: ["Allergy Test", "Blood Test"],
        doctorNotes: "Monitor airway closely."
    },
    {
        name: "Zainab Qureshi",
        age: 26,
        gender: "Female",
        doctor: "Dr. Iqra Javed",
        condition: "Severe Burns",
        status: "Critical",
        room: "ED-10",
        hr: 130,
        spo2: 95,
        bp: "120/80",
        temp: 38,
        admissionCondition: "Burns on 30% body surface area from fire accident.",
        currentCondition: "IV fluids, wound dressing ongoing.",
        diagnosis: "Second-degree burns",
        treatment: ["Fluid resuscitation", "Pain management", "Wound care"],
        medications: ["Analgesics", "Topical antibiotic ointment"],
        history: ["No prior illness"],
        reports: ["Blood Test", "Burn Surface Assessment"],
        doctorNotes: "Monitor vitals and wound infection."
    },
    {
        name: "Sami Ahmed",
        age: 39,
        gender: "Male",
        doctor: "Dr. Maria Khan",
        condition: "Epileptic Seizures",
        status: "Under Observation",
        room: "ED-11",
        hr: 100,
        spo2: 97,
        bp: "135/85",
        temp: 37.2,
        admissionCondition: "Frequent tonic-clonic seizures, postictal confusion.",
        currentCondition: "IV anticonvulsants given, vitals stable.",
        diagnosis: "Status epilepticus",
        treatment: ["IV anticonvulsants", "Monitoring"],
        medications: ["Levetiracetam", "Diazepam"],
        history: ["Epilepsy 10 years"],
        reports: ["EEG", "Blood Test"],
        doctorNotes: "Observe for recurrent seizures."
    },
    {
        name: "Hira Shah",
        age: 44,
        gender: "Female",
        doctor: "Dr. Noman Sheikh",
        condition: "Acute Gastroenteritis",
        status: "Under Observation",
        room: "ED-12",
        hr: 95,
        spo2: 96,
        bp: "120/80",
        temp: 37.5,
        admissionCondition: "Severe diarrhea and vomiting for 24 hours.",
        currentCondition: "IV fluids started, vitals stable.",
        diagnosis: "Acute gastroenteritis",
        treatment: ["IV fluids", "Electrolyte replacement"],
        medications: ["Ondansetron", "Electrolyte solution IV"],
        history: ["No prior illness"],
        reports: ["Blood Test", "Stool Test"],
        doctorNotes: "Monitor hydration."
    },
    {
        name: "Bilal Siddiqui",
        age: 48,
        gender: "Male",
        doctor: "Dr. Faisal Khan",
        condition: "Fractured Leg",
        status: "Stable",
        room: "ED-13",
        hr: 90,
        spo2: 98,
        bp: "130/85",
        temp: 36.8,
        admissionCondition: "Fall from stairs, right leg fracture.",
        currentCondition: "Pain managed, leg immobilized.",
        diagnosis: "Closed fracture of tibia",
        treatment: ["Splinting", "Pain management"],
        medications: ["Analgesics"],
        history: ["No chronic illness"],
        reports: ["X-Ray Leg"],
        doctorNotes: "Orthopedic consult scheduled."
    },
    {
        name: "Maria Qasim",
        age: 37,
        gender: "Female",
        doctor: "Dr. Ayesha Malik",
        condition: "Migraine Attack",
        status: "Stable",
        room: "ED-14",
        hr: 80,
        spo2: 99,
        bp: "120/75",
        temp: 36.7,
        admissionCondition: "Severe headache, nausea, photophobia.",
        currentCondition: "Responding to treatment, vitals stable.",
        diagnosis: "Acute migraine",
        treatment: ["Pain management", "Antiemetics"],
        medications: ["Paracetamol", "Sumatriptan"],
        history: ["Migraine since 5 years"],
        reports: ["None"],
        doctorNotes: "Monitor response to medication."
    },
    {
        name: "Farhan Iqbal",
        age: 51,
        gender: "Male",
        doctor: "Dr. Nida Shah",
        condition: "Chest Pain",
        status: "Critical",
        room: "ED-15",
        hr: 130,
        spo2: 90,
        bp: "150/95",
        temp: 37.9,
        admissionCondition: "Acute onset chest pain, sweating, dyspnea.",
        currentCondition: "ECG and cardiac enzymes pending, IV therapy ongoing.",
        diagnosis: "Suspected acute coronary syndrome",
        treatment: ["Oxygen therapy", "Pain management", "Continuous monitoring"],
        medications: ["Aspirin", "Nitroglycerin"],
        history: ["Hypertension"],
        reports: ["ECG", "Troponin", "Blood Test"],
        doctorNotes: "Monitor closely, cardiology consult required."
    },
    {
        name: "Iqra Farooq",
        age: 30,
        gender: "Female",
        doctor: "Dr. Kamran Sheikh",
        condition: "Animal Bite",
        status: "Under Observation",
        room: "ED-16",
        hr: 85,
        spo2: 98,
        bp: "125/80",
        temp: 37.1,
        admissionCondition: "Dog bite on forearm, risk of rabies.",
        currentCondition: "Wound cleaned, tetanus vaccine given.",
        diagnosis: "Animal bite wound",
        treatment: ["Wound cleaning", "Tetanus vaccine", "Antibiotics prophylaxis"],
        medications: ["Amoxicillin"],
        history: ["No chronic illness"],
        reports: ["Wound swab if infection suspected"],
        doctorNotes: "Monitor for infection."
    },
    {
        name: "Owais Tariq",
        age: 46,
        gender: "Male",
        doctor: "Dr. Faisal Ali",
        condition: "Acute Poisoning",
        status: "Critical",
        room: "ED-17",
        hr: 120,
        spo2: 88,
        bp: "100/60",
        temp: 37.5,
        admissionCondition: "Accidental ingestion of insecticide, vomiting, dizziness.",
        currentCondition: "Activated charcoal and IV fluids given.",
        diagnosis: "Acute organophosphate poisoning",
        treatment: ["IV fluids", "Activated charcoal", "Atropine if needed"],
        medications: ["Atropine", "Analgesics"],
        history: ["No chronic illness"],
        reports: ["Blood test", "Liver & kidney function"],
        doctorNotes: "Monitor vitals and cholinesterase levels."
    },
    {
        name: "Areeba Khan",
        age: 25,
        gender: "Female",
        doctor: "Dr. Iqra Javed",
        condition: "Severe Allergic Reaction",
        status: "Critical",
        room: "ED-18",
        hr: 115,
        spo2: 90,
        bp: "95/60",
        temp: 37.0,
        admissionCondition: "Swelling of lips and tongue after bee sting.",
        currentCondition: "Epinephrine administered, oxygen started.",
        diagnosis: "Anaphylaxis",
        treatment: ["Epinephrine", "IV fluids", "Oxygen therapy"],
        medications: ["Antihistamines", "Steroids"],
        history: ["No prior severe allergies"],
        reports: ["Blood Test"],
        doctorNotes: "Airway management critical."
    },
    {
        name: "Zubair Ahmed",
        age: 58,
        gender: "Male",
        doctor: "Dr. Maria Khan",
        condition: "Severe Head Injury",
        status: "Critical",
        room: "ED-19",
        hr: 125,
        spo2: 92,
        bp: "145/90",
        temp: 37.6,
        admissionCondition: "Fall from height, unconscious, possible intracranial bleed.",
        currentCondition: "CT scan pending, vitals unstable.",
        diagnosis: "Traumatic brain injury",
        treatment: ["Monitoring", "IV fluids", "Neurosurgery consult"],
        medications: ["Analgesics"],
        history: ["Hypertension"],
        reports: ["CT Brain", "Blood Test"],
        doctorNotes: "High risk, ICU transfer likely."
    },
    {
        name: "Hania Riaz",
        age: 34,
        gender: "Female",
        doctor: "Dr. Noman Sheikh",
        condition: "Acute Gastroenteritis",
        status: "Under Observation",
        room: "ED-20",
        hr: 95,
        spo2: 97,
        bp: "120/80",
        temp: 37.4,
        admissionCondition: "Severe diarrhea and vomiting, dehydration.",
        currentCondition: "IV fluids given, vitals stable.",
        diagnosis: "Acute gastroenteritis",
        treatment: ["IV fluids", "Electrolyte correction", "Observation"],
        medications: ["Ondansetron"],
        history: ["No prior illness"],
        reports: ["Blood Test", "Stool Test"],
        doctorNotes: "Monitor hydration and electrolytes."
    }
];

function Emergency() {
    const [selectedPatient, setSelectedPatient] = useState(null);

    return (
        <section className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Emergency Patient Dashboard
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

export default Emergency;