import React, { useState, useEffect } from 'react';

const SIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);
    const [results, setResults] = useState({
        investedAmount: 0,
        estReturns: 0,
        totalValue: 0
    });

    useEffect(() => {
        calculateSIP();
    }, [monthlyInvestment, expectedReturn, timePeriod]);

    const calculateSIP = () => {
        const P = parseFloat(monthlyInvestment);
        const i = parseFloat(expectedReturn) / 12 / 100;
        const n = parseFloat(timePeriod) * 12;

        if (P > 0 && i > 0 && n > 0) {
            const fv = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
            const invested = P * n;
            const returns = fv - invested;

            setResults({
                investedAmount: Math.round(invested),
                estReturns: Math.round(returns),
                totalValue: Math.round(fv)
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">SIP Calculator</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inputs */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Investment</label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-500">₹</span>
                                <input
                                    type="number"
                                    value={monthlyInvestment}
                                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                />
                            </div>
                            <input
                                type="range"
                                min="500"
                                max="100000"
                                step="500"
                                value={monthlyInvestment}
                                onChange={(e) => setMonthlyInvestment(e.target.value)}
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
                        {/* Donut Chart */}
                        <div className="relative flex flex-col items-center justify-center mb-6">
                            <div className="relative flex items-center justify-center">
                                <svg width="160" height="160" viewBox="0 0 120 120" className="transform -rotate-90">
                                    {/* Background Circle (Invested Amount) */}
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="45"
                                        fill="transparent"
                                        stroke="#2A7EF9"
                                        strokeWidth="12"
                                    />
                                    {/* Foreground Circle (Estimated Returns) */}
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="45"
                                        fill="transparent"
                                        stroke="#10B981"
                                        strokeWidth="12"
                                        strokeDasharray="282.74"
                                        strokeDashoffset={results.totalValue > 0 ? 282.74 - (282.74 * (results.estReturns / results.totalValue)) : 282.74}
                                    />
                                </svg>
                                {/* Inner Label */}
                                <div className="absolute flex flex-col items-center justify-center text-center">
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Value</span>
                                    <span className="text-base font-extrabold text-gray-800">
                                        ₹{results.totalValue >= 10000000 ? `${(results.totalValue / 10000000).toFixed(2)}Cr` : results.totalValue >= 100000 ? `${(results.totalValue / 100000).toFixed(2)}L` : results.totalValue.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            {/* Legend */}
                            <div className="flex space-x-6 mt-4 text-xs font-semibold text-gray-500">
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 rounded-full bg-[#2A7EF9]"></span>
                                    <span>Invested</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 rounded-full bg-[#10B981]"></span>
                                    <span>Est. Returns</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-600 font-medium">Invested Amount</span>
                            <span className="text-xl font-bold text-gray-800">₹{results.investedAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-600 font-medium">Est. Returns</span>
                            <span className="text-xl font-bold text-green-600">₹{results.estReturns.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-[#2A7EF9]/5 rounded-xl border border-[#2A7EF9]/10">
                            <span className="text-gray-800 font-bold">Total Value</span>
                            <span className="text-2xl font-extrabold text-primary">₹{results.totalValue.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIPCalculator;
