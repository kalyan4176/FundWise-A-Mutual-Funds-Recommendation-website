import React, { useState, useEffect } from 'react';

const SWPCalculator = () => {
    const [totalInvestment, setTotalInvestment] = useState(1000000);
    const [withdrawalPerMonth, setWithdrawalPerMonth] = useState(5000);
    const [expectedReturn, setExpectedReturn] = useState(8);
    const [timePeriod, setTimePeriod] = useState(10);
    const [results, setResults] = useState({
        totalWithdrawal: 0,
        finalValue: 0
    });

    useEffect(() => {
        calculateSWP();
    }, [totalInvestment, withdrawalPerMonth, expectedReturn, timePeriod]);

    const calculateSWP = () => {
        let balance = parseFloat(totalInvestment);
        const withdrawal = parseFloat(withdrawalPerMonth);
        const rate = parseFloat(expectedReturn) / 100;
        const months = parseFloat(timePeriod) * 12;
        const monthlyRate = rate / 12;

        let totalWithdrawn = 0;

        for (let i = 0; i < months; i++) {
            // Add interest first (usually) or withdraw first? 
            // Standard practice: Balance grows for a month, then withdrawal happens.
            balance = balance * (1 + monthlyRate);
            balance = balance - withdrawal;
            totalWithdrawn += withdrawal;

            if (balance < 0) {
                balance = 0;
                break;
            }
        }

        setResults({
            totalWithdrawal: Math.round(totalWithdrawn),
            finalValue: Math.round(balance > 0 ? balance : 0)
        });
    };

    return (
        <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">SWP Calculator</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inputs */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Total Investment</label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-500">₹</span>
                                <input
                                    type="number"
                                    value={totalInvestment}
                                    onChange={(e) => setTotalInvestment(e.target.value)}
                                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                />
                            </div>
                            <input
                                type="range"
                                min="100000"
                                max="10000000"
                                step="50000"
                                value={totalInvestment}
                                onChange={(e) => setTotalInvestment(e.target.value)}
                                className="w-full mt-3 accent-primary"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Withdrawal Per Month</label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-500">₹</span>
                                <input
                                    type="number"
                                    value={withdrawalPerMonth}
                                    onChange={(e) => setWithdrawalPerMonth(e.target.value)}
                                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                />
                            </div>
                            <input
                                type="range"
                                min="500"
                                max="100000"
                                step="500"
                                value={withdrawalPerMonth}
                                onChange={(e) => setWithdrawalPerMonth(e.target.value)}
                                className="w-full mt-3 accent-primary"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return Rate (p.a)</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={expectedReturn}
                                    onChange={(e) => setExpectedReturn(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                />
                                <span className="absolute right-3 top-3 text-gray-500">%</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                step="0.1"
                                value={expectedReturn}
                                onChange={(e) => setExpectedReturn(e.target.value)}
                                className="w-full mt-3 accent-primary"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={timePeriod}
                                    onChange={(e) => setTimePeriod(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                />
                                <span className="absolute right-3 top-3 text-gray-500">Yr</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                step="1"
                                value={timePeriod}
                                onChange={(e) => setTimePeriod(e.target.value)}
                                className="w-full mt-3 accent-primary"
                            />
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-600 font-medium">Total Investment</span>
                            <span className="text-xl font-bold text-gray-800">₹{parseFloat(totalInvestment).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-600 font-medium">Total Withdrawal</span>
                            <span className="text-xl font-bold text-blue-600">₹{results.totalWithdrawal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-[#1d3557]/5 rounded-xl border border-[#1d3557]/10">
                            <span className="text-gray-800 font-bold">Final Value</span>
                            <span className="text-2xl font-extrabold text-primary">₹{results.finalValue.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SWPCalculator;
