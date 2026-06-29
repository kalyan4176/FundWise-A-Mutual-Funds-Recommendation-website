import React, { useState } from 'react';

const Questionnaire = ({ onSubmit }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        investment_amount: 5000,
        risk_appetite: 'Medium',
        age: 30,
        duration: 5,
        sip_or_lumpsum: 'SIP',
        net_worth: '',
        dependents: 0,
        salary: '',
        savings: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="animate-fade-in-up">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Basic Details</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Dependents</label>
                                <input
                                    type="number"
                                    name="dependents"
                                    value={formData.dependents}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                />
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button onClick={nextStep} className="bg-primary hover:bg-[#005ecb] text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
                                Next
                            </button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="animate-fade-in-up">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Financial Status</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Salary (₹)</label>
                                <input
                                    type="number"
                                    name="salary"
                                    value={formData.salary}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    placeholder="e.g. 1000000"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Current Savings (₹)</label>
                                <input
                                    type="number"
                                    name="savings"
                                    value={formData.savings}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    placeholder="e.g. 500000"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Net Worth (₹)</label>
                                <input
                                    type="number"
                                    name="net_worth"
                                    value={formData.net_worth}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    placeholder="Optional"
                                />
                            </div>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <button onClick={prevStep} className="text-gray-600 hover:text-gray-800 font-semibold py-3 px-6">
                                Back
                            </button>
                            <button onClick={nextStep} className="bg-primary hover:bg-[#005ecb] text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
                                Next
                            </button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="animate-fade-in-up">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Investment Goals</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Amount (₹)</label>
                                <input
                                    type="number"
                                    name="investment_amount"
                                    value={formData.investment_amount}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Duration (Years)</label>
                                <input
                                    type="number"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Type</label>
                                <select
                                    name="sip_or_lumpsum"
                                    value={formData.sip_or_lumpsum}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                >
                                    <option value="SIP">SIP</option>
                                    <option value="Lumpsum">Lumpsum</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <button onClick={prevStep} className="text-gray-600 hover:text-gray-800 font-semibold py-3 px-6">
                                Back
                            </button>
                            <button onClick={nextStep} className="bg-primary hover:bg-[#005ecb] text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
                                Next
                            </button>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="animate-fade-in-up">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Risk Profile</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">How much risk are you willing to take?</label>
                                <div className="grid grid-cols-1 gap-4">
                                    {['Low', 'Medium', 'High'].map(risk => (
                                        <label key={risk} className={`cursor-pointer border-2 rounded-xl p-4 flex items-center justify-between transition-all ${formData.risk_appetite === risk ? 'border-primary bg-[#0075FF]/5' : 'border-gray-200 hover:border-[#0075FF]/30'}`}>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="risk_appetite"
                                                    value={risk}
                                                    checked={formData.risk_appetite === risk}
                                                    onChange={handleChange}
                                                    className="h-5 w-5 text-primary focus:ring-primary border-gray-300"
                                                />
                                                <span className="ml-3 font-medium text-gray-900">{risk} Risk</span>
                                            </div>
                                            <span className="text-sm text-gray-500">
                                                {risk === 'Low' ? 'Conservative returns, high safety' :
                                                    risk === 'Medium' ? 'Balanced growth and safety' : 'High growth potential, higher volatility'}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <button onClick={prevStep} className="text-gray-600 hover:text-gray-800 font-semibold py-3 px-6">
                                Back
                            </button>
                            <button onClick={handleSubmit} className="bg-gradient-to-r from-primary to-[#00b4d8] hover:from-[#005ecb] hover:to-[#0096c7] text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
                                Get Recommendations
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between mb-2">
                    {['Basic', 'Financial', 'Goals', 'Risk'].map((label, index) => (
                        <span key={index} className={`text-xs font-semibold uppercase tracking-wider ${step > index ? 'text-primary' : 'text-gray-400'}`}>
                            {label}
                        </span>
                    ))}
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${(step / 4) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                {renderStep()}
            </div>
        </div>
    );
};

export default Questionnaire;
