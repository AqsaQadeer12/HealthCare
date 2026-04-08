// PharmacyDashboard.jsx
import React, { useState } from "react";

// Medicine data
const pharmacyMedicines = [
    { name: "Paracetamol 500mg", price: 50, qty: 200, status: "In Stock" },
    { name: "Ibuprofen 400mg", price: 80, qty: 150, status: "In Stock" },
    { name: "Amoxicillin 500mg", price: 120, qty: 100, status: "In Stock" },
    { name: "Azithromycin 250mg", price: 150, qty: 50, status: "In Stock" },
    { name: "Metformin 500mg", price: 100, qty: 80, status: "In Stock" },
    { name: "Insulin (Humulin R)", price: 1200, qty: 20, status: "In Stock" },
    { name: "Omeprazole 20mg", price: 90, qty: 70, status: "In Stock" },
    { name: "Aspirin 75mg", price: 60, qty: 120, status: "In Stock" },
    { name: "Cetirizine 10mg", price: 40, qty: 200, status: "In Stock" },
    { name: "Loratadine 10mg", price: 50, qty: 150, status: "In Stock" },
    { name: "Salbutamol Inhaler", price: 500, qty: 40, status: "In Stock" },
    { name: "Montelukast 10mg", price: 200, qty: 60, status: "In Stock" },
    { name: "Prednisolone 5mg", price: 150, qty: 50, status: "In Stock" },
    { name: "Hydrocortisone Cream 1%", price: 120, qty: 30, status: "In Stock" },
    { name: "Diclofenac 50mg", price: 70, qty: 100, status: "In Stock" },
    { name: "Ranitidine 150mg", price: 60, qty: 80, status: "In Stock" },
    { name: "Pantoprazole 40mg", price: 90, qty: 70, status: "In Stock" },
    { name: "Levothyroxine 50mcg", price: 200, qty: 40, status: "In Stock" },
    { name: "Atorvastatin 10mg", price: 150, qty: 60, status: "In Stock" },
    { name: "Simvastatin 20mg", price: 140, qty: 50, status: "In Stock" },
    { name: "Losartan 50mg", price: 180, qty: 30, status: "In Stock" },
    { name: "Amlodipine 5mg", price: 150, qty: 50, status: "In Stock" },
    { name: "Captopril 25mg", price: 130, qty: 40, status: "In Stock" },
    { name: "Clopidogrel 75mg", price: 200, qty: 35, status: "In Stock" },
    { name: "Warfarin 5mg", price: 250, qty: 25, status: "In Stock" },
    { name: "Metoprolol 50mg", price: 120, qty: 60, status: "In Stock" },
    { name: "Propranolol 40mg", price: 130, qty: 50, status: "In Stock" },
    { name: "Furosemide 40mg", price: 90, qty: 80, status: "In Stock" },
    { name: "Spironolactone 25mg", price: 110, qty: 40, status: "In Stock" },
    { name: "Hydrochlorothiazide 25mg", price: 80, qty: 50, status: "In Stock" },
    { name: "Cefixime 200mg", price: 150, qty: 30, status: "In Stock" },
    { name: "Ceftriaxone 1g Injection", price: 400, qty: 20, status: "In Stock" },
    { name: "Ciprofloxacin 500mg", price: 180, qty: 40, status: "In Stock" },
    { name: "Levofloxacin 500mg", price: 220, qty: 30, status: "In Stock" },
    { name: "Nitrofurantoin 100mg", price: 200, qty: 25, status: "In Stock" },
    { name: "Fluconazole 150mg", price: 250, qty: 20, status: "In Stock" },
    { name: "Nystatin Oral Suspension", price: 180, qty: 30, status: "In Stock" },
    { name: "Oseltamivir 75mg", price: 350, qty: 15, status: "In Stock" },
    { name: "Paracetamol Syrup 125mg/5ml", price: 60, qty: 120, status: "In Stock" },
    { name: "Amoxicillin Syrup 250mg/5ml", price: 120, qty: 80, status: "In Stock" },
    { name: "Cefixime Syrup 50mg/5ml", price: 150, qty: 60, status: "In Stock" },
    { name: "Multivitamin Syrup", price: 200, qty: 70, status: "In Stock" },
    { name: "Vitamin D Syrup", price: 150, qty: 50, status: "In Stock" },
    { name: "Calcium Carbonate 500mg", price: 100, qty: 80, status: "In Stock" },
    { name: "Magnesium 250mg", price: 120, qty: 60, status: "In Stock" },
    { name: "Zinc 20mg", price: 90, qty: 70, status: "In Stock" },
    { name: "Iron Sucrose 100mg Injection", price: 400, qty: 25, status: "In Stock" },
    { name: "Ranitidine Syrup 15mg/5ml", price: 80, qty: 60, status: "In Stock" },
    { name: "Omeprazole Suspension 20mg/5ml", price: 100, qty: 50, status: "In Stock" },
    { name: "Salbutamol Syrup 2mg/5ml", price: 150, qty: 40, status: "In Stock" },
    { name: "Montelukast Chewable 4mg", price: 200, qty: 35, status: "In Stock" },
    { name: "Cetirizine Syrup 5mg/5ml", price: 60, qty: 90, status: "In Stock" },
    { name: "Loratadine Syrup 5mg/5ml", price: 70, qty: 80, status: "In Stock" },
    { name: "Prednisolone Syrup 5mg/5ml", price: 150, qty: 25, status: "In Stock" },
    { name: "Diclofenac Gel 1%", price: 100, qty: 60, status: "In Stock" },
    { name: "Hydrocortisone Cream 1%", price: 120, qty: 40, status: "In Stock" },
    { name: "Saline 0.9% IV 500ml", price: 200, qty: 50, status: "In Stock" },
    { name: "Dextrose 5% IV 500ml", price: 250, qty: 40, status: "In Stock" },
    { name: "Normal Saline 1000ml", price: 350, qty: 30, status: "In Stock" },
    { name: "Syringe 5ml", price: 10, qty: 500, status: "In Stock" },
    { name: "Syringe 10ml", price: 15, qty: 400, status: "In Stock" },
    { name: "Insulin Syringe 1ml", price: 20, qty: 200, status: "In Stock" },
    { name: "Glucose Meter Strips", price: 100, qty: 50, status: "In Stock" },
    { name: "Bandage Rolls", price: 50, qty: 150, status: "In Stock" },
    { name: "Cotton Balls", price: 20, qty: 300, status: "In Stock" },
    { name: "Antiseptic Solution 100ml", price: 80, qty: 60, status: "In Stock" },
    { name: "Alcohol Swabs", price: 10, qty: 500, status: "In Stock" },
    { name: "Paracetamol 650mg", price: 60, qty: 100, status: "In Stock" },
    { name: "Ibuprofen 200mg", price: 40, qty: 150, status: "In Stock" },
    { name: "Diclofenac 100mg", price: 90, qty: 50, status: "In Stock" },
    { name: "Amoxicillin 250mg", price: 100, qty: 70, status: "In Stock" },
    { name: "Cefixime 100mg", price: 120, qty: 40, status: "In Stock" },
    { name: "Ceftriaxone 500mg Injection", price: 350, qty: 30, status: "In Stock" },
    { name: "Vitamin C 500mg", price: 50, qty: 100, status: "In Stock" },
    { name: "Vitamin E 200mg", price: 60, qty: 80, status: "In Stock" },
    { name: "Omega 3 Capsules", price: 250, qty: 50, status: "In Stock" },
    { name: "Folic Acid 5mg", price: 40, qty: 150, status: "In Stock" },
    { name: "Biotin 5mg", price: 80, qty: 60, status: "In Stock" },
    { name: "Calcium + Vitamin D Tablets", price: 120, qty: 70, status: "In Stock" },
];
// Component
function Pharmacy() {
    const [search, setSearch] = useState("");
    const [sortType, setSortType] = useState("");

    // Filter medicines by search
    const filteredMedicines = pharmacyMedicines
        .filter((med) =>
            med.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sortType === "price") return a.price - b.price;
            if (sortType === "qty") return a.qty - b.qty;
            return 0;
        });

    return (
        <section className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Pharmacy Medicines Dashboard
                    </h1>
                    <p className="text-gray-500 mt-2">
                        View all medicines available in the pharmacy
                    </p>
                </div>

                {/* Search & Sort */}
                <div className="flex flex-wrap justify-between mb-6 gap-4">
                    <input
                        type="text"
                        placeholder="Search medicine..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2 border rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <select
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Sort By</option>
                        <option value="price">Price (Low → High)</option>
                        <option value="qty">Quantity (Low → High)</option>
                    </select>
                </div>

                {/* Medicine Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredMedicines.map((med, index) => (
                        <div
                            key={index}
                            className={`p-5 rounded-xl shadow-md transition hover:scale-105 ${med.status === "Sold Out" ? "bg-red-100" : "bg-white"
                                }`}
                        >
                            <h2 className="text-lg font-bold mb-2">{med.name}</h2>
                            <p className="text-gray-600">Price: {med.price} Rupees</p>
                            <p className="text-gray-600">Quantity: {med.qty}</p>
                            <span
                                className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-semibold ${med.status === "Sold Out"
                                    ? "bg-red-500 text-white"
                                    : "bg-green-500 text-white"
                                    }`}
                            >
                                {med.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pharmacy;