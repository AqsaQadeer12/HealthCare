// LaboratoryDashboard.jsx
import React, { useState } from "react";

const labTests = [
    // Pathology / Biochemistry
    { name: "Complete Blood Count (CBC)", price: 500, performed: 120, status: "Popular" },
    { name: "Liver Function Test (LFT)", price: 700, performed: 85 },
    { name: "Renal Function Test (RFT)", price: 650, performed: 90 },
    { name: "Blood Glucose Test", price: 300, performed: 150 },
    { name: "HbA1c Test", price: 900, performed: 70, status: "Popular" },
    { name: "Thyroid Profile (TSH, T3, T4)", price: 800, performed: 75 },
    { name: "Lipid Profile", price: 750, performed: 50 },
    { name: "Electrolytes (Na, K, Cl)", price: 600, performed: 65 },
    { name: "Vitamin D Test", price: 1200, performed: 60, status: "Popular" },
    { name: "Vitamin B12 Test", price: 1000, performed: 40 },

    // Microbiology / Infection
    { name: "COVID-19 PCR Test", price: 1500, performed: 60, status: "New" },
    { name: "HIV Test", price: 1200, performed: 25 },
    { name: "Hepatitis B & C Test", price: 1300, performed: 40 },
    { name: "Blood Culture", price: 1500, performed: 20 },
    { name: "Urine Culture & Sensitivity", price: 900, performed: 30 },
    { name: "Stool Culture", price: 900, performed: 40 },
    { name: "Sputum Culture", price: 1000, performed: 20 },
    { name: "Dengue NS1 Antigen Test", price: 900, performed: 50, status: "Popular" },
    { name: "Dengue IgM/IgG Test", price: 1000, performed: 40 },
    { name: "Malaria Parasite Test", price: 700, performed: 60 },

    // Urine / Body Fluids
    { name: "Urine Analysis", price: 400, performed: 110 },
    { name: "Urine Microalbumin Test", price: 750, performed: 30 },
    { name: "CSF Analysis", price: 1200, performed: 15 },
    { name: "Pleural Fluid Analysis", price: 1300, performed: 12 },

    // Other Common Lab Tests
    { name: "Coagulation Profile (PT, aPTT)", price: 600, performed: 55 },
    { name: "C-Reactive Protein (CRP)", price: 650, performed: 70 },
    { name: "Erythrocyte Sedimentation Rate (ESR)", price: 400, performed: 85 },
    { name: "Rheumatoid Factor (RF)", price: 900, performed: 25 },
    { name: "Anti-CCP Antibodies", price: 1100, performed: 18 },
    { name: "ANA Test (Antinuclear Antibodies)", price: 1500, performed: 12 },
    { name: "Serum Creatinine Test", price: 600, performed: 80 },
    { name: "Uric Acid Test", price: 650, performed: 50 },
    { name: "Blood Gas Analysis (ABG)", price: 1200, performed: 50 },
    { name: "Amylase Test", price: 800, performed: 25 },
    { name: "Lipase Test", price: 850, performed: 20 },
    { name: "Prostate-Specific Antigen (PSA)", price: 900, performed: 30 },
];


function Laboratory() {
    const [tests] = useState(labTests);

    return (
        <section className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Hospital Laboratory Tests
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Explore all laboratory tests available in the hospital with price and performed count
                    </p>
                </div>

                {/* Test Cards */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tests.map((test, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-gray-800">{test.name}</h2>
                                {test.status && (
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${test.status === "New" ? "bg-green-500 text-white" : "bg-yellow-400 text-gray-800"}`}>
                                        {test.status}
                                    </span>
                                )}
                            </div>
                            <p className="mt-2 text-gray-600"><strong>Price:</strong> Rs. {test.price}</p>
                            <p className="mt-1 text-gray-600"><strong>Performed:</strong> {test.performed} times</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Laboratory;


