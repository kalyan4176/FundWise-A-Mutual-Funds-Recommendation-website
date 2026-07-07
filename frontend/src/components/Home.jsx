import React from 'react';

const Home = ({ onStart }) => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="bg-[#EEFDFC] border border-[#2A7EF9]/20 rounded-3xl p-8 md:p-12 mb-12 shadow-sm">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
                        Grow Your Wealth with <span className="text-[#2A7EF9]">Mutual Funds</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                        Professional management, diversification, and the power of compounding—all in one investment vehicle. Start your journey today.
                    </p>
                    <button
                        onClick={onStart}
                        className="bg-[#2A7EF9] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#1a65d6] transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        Find Your Fund Now
                    </button>
                </div>
            </div>

            {/* Why Invest? */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Should You Invest?</h2>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-[#2A7EF9] mb-4">Beating Inflation is Key</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Inflation erodes the purchasing power of your money over time. If your money is sitting idle in a savings account earning 3-4%, and inflation is at 6%, you are effectively losing wealth.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Investing allows your money to grow at a rate that outpaces inflation, ensuring that your future self can afford the same lifestyle, if not better, than you do today.
                            </p>
                        </div>
                        <div className="bg-[#2A7EF9]/5 p-6 rounded-xl">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">The Power of Real Returns</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <span className="text-red-500 font-bold text-xl">📉</span>
                                    <span className="text-gray-700"><strong>Idle Cash:</strong> Loses value every year due to inflation.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-yellow-500 font-bold text-xl">😐</span>
                                    <span className="text-gray-700"><strong>Savings/FDs:</strong> Barely keeps up with inflation (low real returns).</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-green-500 font-bold text-xl">🚀</span>
                                    <span className="text-gray-700"><strong>Investments (Equity/MFs):</strong> Potential to significantly beat inflation and build wealth.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* What are Mutual Funds? */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What are Mutual Funds?</h2>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        A mutual fund is a financial vehicle that pools money from many investors to invest in securities like stocks, bonds, money market instruments, and other assets.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Who maintains them?</h3>
                                <p className="text-gray-600">
                                    Mutual funds are operated by professional money managers (Asset Management Companies or AMCs), who allocate the fund's assets and attempt to produce capital gains or income for the fund's investors.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-green-100 p-3 rounded-lg text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Regulated & Safe</h3>
                                <p className="text-gray-600">
                                    In India, the mutual fund industry is regulated by the Securities and Exchange Board of India (SEBI), ensuring transparency and investor protection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advantages */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Mutual Funds?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Diversification",
                            desc: "Don't put all your eggs in one basket. Mutual funds invest in a mix of assets, reducing the risk associated with investing in a single security.",
                            icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                        },
                        {
                            title: "Professional Management",
                            desc: "Expert fund managers research and monitor the markets to make informed investment decisions on your behalf.",
                            icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        },
                        {
                            title: "Liquidity",
                            desc: "Unlike real estate or some FDs, you can redeem your mutual fund units at any time and get the money in your bank account within days.",
                            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="bg-[#2A7EF9]/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Comparison Table */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mutual Funds vs Traditional Investments</h2>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 font-bold text-gray-600 border-b">Feature</th>
                                    <th className="p-4 font-bold text-primary border-b">Mutual Funds</th>
                                    <th className="p-4 font-bold text-gray-600 border-b">Fixed Deposits (FDs) / RDs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Returns", mf: "High (Potential to beat inflation)", fd: "Low to Moderate (Fixed)" },
                                    { feature: "Risk", mf: "Low to High (Depends on fund type)", fd: "Very Low" },
                                    { feature: "Liquidity", mf: "High (Exit anytime, mostly)", fd: "Moderate (Penalty on premature withdrawal)" },
                                    { feature: "Tax Efficiency", mf: "High (LTCG benefits)", fd: "Low (Taxed as per slab)" },
                                    { feature: "Inflation Beating", mf: "Yes (Equity funds)", fd: "Often No" },
                                ].map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 border-b font-medium text-gray-700">{row.feature}</td>
                                        <td className="p-4 border-b text-primary font-semibold">{row.mf}</td>
                                        <td className="p-4 border-b text-gray-600">{row.fd}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
