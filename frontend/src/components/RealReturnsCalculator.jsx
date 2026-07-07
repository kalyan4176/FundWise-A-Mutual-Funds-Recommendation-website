import React, { useState, useEffect } from 'react';

const RealReturnsCalculator = () => {
    const [investment, setInvestment] = useState(100000);
    const [returnRate, setReturnRate] = useState(12);
    const [inflationRate, setInflationRate] = useState(6);
    const [years, setYears] = useState(10);
    const [results, setResults] = useState({
        nominalValue: 0,
        realValue: 0,
        purchasingPowerLoss: 0
    });

    useEffect(() => {
        calculateRealReturns();
    }, [investment, returnRate, inflationRate, years]);

    const calculateRealReturns = () => {
        const P = parseFloat(investment);
        const r = parseFloat(returnRate) / 100;
        const i = parseFloat(inflationRate) / 100;
        const n = parseFloat(years);

        if (P > 0 && n > 0) {
            // Nominal Future Value: FV = P * (1 + r)^n
            const nominalFV = P * Math.pow(1 + r, n);

            // Real Rate of Return: R = (1 + r) / (1 + i) - 1
            const realRate = (1 + r) / (1 + i) - 1;

            // Real Future Value (Purchasing Power): Real FV = P * (1 + R)^n
            const realFV = P * Math.pow(1 + realRate, n);

            setResults({
                nominalValue: Math.round(nominalFV),
                realValue: Math.round(realFV),
                purchasingPowerLoss: Math.round(nominalFV - realFV)
            });
        }
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Real Returns Calculator</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                See how inflation affects your investments over time. Compare the nominal value (what you see in the bank) vs. the real value (what it can actually buy).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inputs */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-700 mb-6">Investment Details</h3>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Lumpsum Investment (₹)
                            </label>
                            <input
                                type="number"
                                value={investment}
                                onChange={(e) => setInvestment(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <input
                                type="range"
                                min="1000"
                                max="10000000"
                                step="1000"
                                value={investment}
                                onChange={(e) => setInvestment(e.target.value)}
                                className="w-full mt-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Expected Return Rate (%)
                            </label>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="0.1"
                                    value={returnRate}
                                    onChange={(e) => setReturnRate(e.target.value)}
                                    className="flex-grow"
                                />
                                <span className="text-lg font-bold text-primary w-16 text-right">{returnRate}%</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Inflation Rate (%)
                            </label>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="range"
                                    min="1"
                                    max="15"
                                    step="0.1"
                                    value={inflationRate}
                                    onChange={(e) => setInflationRate(e.target.value)}
                                    className="flex-grow"
                                />
                                <span className="text-lg font-bold text-red-500 w-16 text-right">{inflationRate}%</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Time Period (Years)
                            </label>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={years}
                                    onChange={(e) => setYears(e.target.value)}
                                    className="flex-grow"
                                />
                                <span className="text-lg font-bold text-gray-700 w-16 text-right">{years} Yr</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">Projected Value after {years} Years</h3>

                    <div className="space-y-8">
                        {/* Vertical Comparison Bar Chart */}
                        <div className="flex justify-center items-end space-x-12 h-36 mb-6 pt-4 border-b border-gray-100 pb-4">
                            {/* Nominal Bar */}
                            <div className="flex flex-col items-center space-y-2 h-full justify-end">
                                <span className="text-xs font-bold text-gray-500">{formatCurrency(results.nominalValue)}</span>
                                <div className="w-12 bg-[#2A7EF9] rounded-t-lg transition-all duration-500" style={{ height: '75%' }}></div>
                                <span className="text-xs font-semibold text-gray-600">Nominal</span>
                            </div>
                            {/* Real Bar */}
                            <div className="flex flex-col items-center space-y-2 h-full justify-end">
                                <span className="text-xs font-bold text-green-600">{formatCurrency(results.realValue)}</span>
                                <div 
                                    className="w-12 bg-[#10B981] rounded-t-lg transition-all duration-500" 
                                    style={{ height: results.nominalValue > 0 ? `${(results.realValue / results.nominalValue) * 75}%` : '0%' }}
                                ></div>
                                <span className="text-xs font-semibold text-gray-600">Real Value</span>
                            </div>
                        </div>

                        <div className="bg-[#2A7EF9]/5 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Nominal Maturity Value</p>
                            <p className="text-3xl font-bold text-primary">{formatCurrency(results.nominalValue)}</p>
                            <p className="text-xs text-gray-500 mt-1">Amount visible in your account</p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                            <p className="text-sm text-gray-600 mb-1">Real Value (Purchasing Power)</p>
                            <p className="text-3xl font-bold text-green-600">{formatCurrency(results.realValue)}</p>
                            <p className="text-xs text-gray-500 mt-1">What it's actually worth in today's money</p>
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Impact of Inflation:</span>
                                <span className="font-bold text-red-500">-{formatCurrency(results.purchasingPowerLoss)}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div
                                    className="bg-red-500 h-2.5 rounded-full"
                                    style={{ width: `${(results.purchasingPowerLoss / results.nominalValue) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 text-right">
                                Inflation eats up {((results.purchasingPowerLoss / results.nominalValue) * 100).toFixed(1)}% of your returns
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealReturnsCalculator;
