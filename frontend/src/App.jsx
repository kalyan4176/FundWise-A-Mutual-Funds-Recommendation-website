import React, { useState } from 'react';
import axios from 'axios';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import SIPCalculator from './components/SIPCalculator';
import SWPCalculator from './components/SWPCalculator';
import RealReturnsCalculator from './components/RealReturnsCalculator';
import Home from './components/Home';

function App() {
  const [view, setView] = useState('home'); // 'home', 'questionnaire', 'results', 'sip', 'swp'
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      // Convert numeric strings to numbers
      const payload = {
        ...formData,
        investment_amount: parseFloat(formData.investment_amount),
        age: parseInt(formData.age),
        duration: parseInt(formData.duration),
        net_worth: formData.net_worth ? parseFloat(formData.net_worth) : 0,
        dependents: formData.dependents ? parseInt(formData.dependents) : 0,
        salary: formData.salary ? parseFloat(formData.salary) : 0,
        savings: formData.savings ? parseFloat(formData.savings) : 0,
      };

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await axios.post(`${apiUrl}/recommend`, payload);
      setRecommendations(response.data.recommendations);
      setView('results');
    } catch (err) {
      console.error("Error fetching recommendations:", err);
      setError("Failed to get recommendations. Please ensure the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setRecommendations([]);
    setView('questionnaire');
    setError(null);
  };

  const handleNavClick = (newView) => {
    setView(newView);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img src="/logo.png" alt="FundWise Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm font-medium transition-colors ${view === 'home' ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('questionnaire')}
              className={`text-sm font-medium transition-colors ${view === 'questionnaire' || view === 'results' ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Find suitable Mutual funds
            </button>
            <button
              onClick={() => handleNavClick('sip')}
              className={`text-sm font-medium transition-colors ${view === 'sip' ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
            >
              SIP Calculator
            </button>
            <button
              onClick={() => handleNavClick('swp')}
              className={`text-sm font-medium transition-colors ${view === 'swp' ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
            >
              SWP Calculator
            </button>
            <button
              onClick={() => handleNavClick('realReturns')}
              className={`text-sm font-medium transition-colors ${view === 'realReturns' ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Real Returns Calculator
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20 animate-fade-in-up">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${view === 'home' ? 'bg-[#0075FF]/10 text-primary' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('questionnaire')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${view === 'questionnaire' || view === 'results' ? 'bg-[#0075FF]/10 text-primary' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                Find suitable Mutual funds
              </button>
              <button
                onClick={() => handleNavClick('sip')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${view === 'sip' ? 'bg-[#0075FF]/10 text-primary' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                SIP Calculator
              </button>
              <button
                onClick={() => handleNavClick('swp')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${view === 'swp' ? 'bg-[#0075FF]/10 text-primary' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                SWP Calculator
              </button>
              <button
                onClick={() => handleNavClick('realReturns')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${view === 'realReturns' ? 'bg-[#0075FF]/10 text-primary' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                Real Returns Calculator
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">Analyzing your profile...</p>
          </div>
        ) : error ? (
          <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
            <button onClick={() => setError(null)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </button>
          </div>
        ) : (
          <>
            {view === 'home' && <Home onStart={() => setView('questionnaire')} />}

            {view === 'questionnaire' && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Find the Perfect Mutual Fund
                  </h2>
                  <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Answer a few questions to get personalized investment recommendations based on our ML model.
                  </p>
                </div>
                <Questionnaire onSubmit={handleFormSubmit} />
              </div>
            )}

            {view === 'results' && (
              <div className="animate-fade-in">
                <Results recommendations={recommendations} onReset={handleReset} />
              </div>
            )}

            {view === 'sip' && <SIPCalculator />}

            {view === 'swp' && <SWPCalculator />}

            {view === 'realReturns' && <RealReturnsCalculator />}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-2">
            © 2026 FundWise. All rights reserved.
          </p>
          <p className="text-center text-xs text-gray-400">
            Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
