import React, { useState } from "react";

function Signup() {
    const [form, setForm] = useState({
        first: "",
        last: "",
        age: "",
        gender: "",
        address: "",
        country: "",
        city: "",
        email: "",
        password: "",
        confirm: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};

        if (!form.first) newErrors.first = "First name is required";
        if (!form.last) newErrors.last = "Last name is required";
        if (!form.age) newErrors.age = "Age is required";

        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!form.email.includes("@")) {
            newErrors.email = "Invalid email";
        }

        if (!form.password) {
            newErrors.password = "Password is required";
        } else if (form.password.length < 6) {
            newErrors.password = "Minimum 6 characters required";
        }

        if (form.password !== form.confirm) {
            newErrors.confirm = "Passwords do not match";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        alert("Signup Successful ✅");
        console.log(form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">

            <div className="bg-white shadow-2xl rounded-2xl w-[590px] my-20 p-8">

                {/* Header */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
                    Create Account
                </h2>
                <p className="text-center text-gray-500 mb-6 text-sm">
                    Join the system to manage hospital dashboard
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">

                    {/* Name Row */}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="first"
                            placeholder="First Name"
                            onChange={handleChange}
                            className="w-1/2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                        <input
                            type="text"
                            name="last"
                            placeholder="Last Name"
                            onChange={handleChange}
                            className="w-1/2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>
                    {errors.first && <p className="text-red-500 text-xs">{errors.first}</p>}
                    {errors.last && <p className="text-red-500 text-xs">{errors.last}</p>}

                    {/* Age + Gender */}
                    <div className="flex gap-2">
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            onChange={handleChange}
                            className="w-1/2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                        <select
                            name="gender"
                            onChange={handleChange}
                            className="w-1/2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        >
                            <option value="">Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}

                    {/* Address */}
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    />

                    {/* Country + City */}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            onChange={handleChange}
                            className="w-1/2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            onChange={handleChange}
                            className="w-1/2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                    {/* Password */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs">{errors.password}</p>
                    )}

                    {/* Confirm Password */}
                    <input
                        type="password"
                        name="confirm"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    {errors.confirm && (
                        <p className="text-red-500 text-xs">{errors.confirm}</p>
                    )}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:scale-105 transition "
                    >
                        Sign Up
                    </button>

                </form>

                {/* Footer */}
                <p className="text-center text-xs text-gray-400 mt-4">
                    Already have an account? <span className="text-blue-600 text-sm font-bold cursor-pointer hover:underline">Login</span>
                </p>
            </div>
        </div>
    );
}

export default Signup;