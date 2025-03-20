import { Metadata } from 'next';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About | ShifaAI - AI-Powered Healthcare Platform',
  description: 'Learn about ShifaAI, our mission, and how we are revolutionizing healthcare with artificial intelligence.',
};

export default function AboutPage() {
  return (
    <div className="pt-16 pb-8">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">About</span>
          <span className="block mt-2 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
            ShifaAI
          </span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-lg text-gray-600 dark:text-gray-300 sm:max-w-3xl">
          We're on a mission to revolutionize healthcare with artificial intelligence, 
          making quality healthcare more accessible, efficient, and personalized.
        </p>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                ShifaAI was founded in 2023 by a team of healthcare professionals, AI researchers, and technology 
                entrepreneurs who shared a common vision: to harness the power of artificial intelligence to solve 
                the most pressing challenges in healthcare.
              </p>
              <p>
                Our founders witnessed firsthand the inefficiencies, delays, and errors that plague traditional 
                healthcare systems. They recognized that AI could dramatically improve diagnostic accuracy, 
                treatment recommendations, and overall patient care.
              </p>
              <p>
                After years of research and development, ShifaAI was born – an AI-powered healthcare platform 
                designed to assist patients, doctors, and healthcare providers with intelligent medical diagnostics, 
                test recommendations, automated report analysis, and personalized treatment suggestions.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 aspect-square flex items-center justify-center">
            <div className="text-center text-gray-400">
              [Company Image Placeholder]
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Improve Access</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make quality healthcare accessible to everyone, regardless of location or socioeconomic status, 
                through AI-powered diagnostics and telemedicine.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-teal-600 dark:text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Enhance Accuracy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reduce diagnostic errors and improve treatment outcomes through AI-powered analysis of medical data, 
                images, and patient histories.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Increase Efficiency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Streamline healthcare operations, reduce administrative burden, and allow healthcare professionals 
                to focus more on patient care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Privacy & Security</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize the security and privacy of patient data, adhering to the highest standards of data protection and compliance.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Accuracy & Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI models are rigorously tested and continuously improved to ensure the highest levels of accuracy and reliability.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Inclusivity & Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We design our solutions to be accessible to all, regardless of technical proficiency, language, or disability.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation & Continuous Improvement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to continuous research and development, constantly pushing the boundaries of what AI can do for healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
} 