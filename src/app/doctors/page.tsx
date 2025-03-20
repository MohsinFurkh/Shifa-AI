import React from 'react';
import { Metadata } from 'next';
import { ScanLine, FileText, Users, Lightbulb, Share2, Database } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'For Doctors | ShifaAI - AI-Powered Healthcare Platform',
  description: 'Discover how ShifaAI helps healthcare professionals with AI-powered medical image analysis, report summarization, and clinical decision support.',
};

const doctorFeatures = [
  {
    icon: <ScanLine className="w-12 h-12" />,
    title: 'AI-Powered Medical Image Analysis',
    description: 'Our advanced algorithms detect abnormalities in medical images with high precision. Identify tumors, fractures, infections, and other conditions with AI assistance that enhances your diagnostic capabilities.',
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: 'Automated Report Summarization',
    description: 'Save time with AI that summarizes lengthy lab reports and medical histories into concise, actionable insights. Focus on clinical decision-making rather than paperwork.',
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Patient Case Management',
    description: 'Track patient progress and view AI-generated health insights efficiently. Our platform organizes patient data to highlight critical information and trends requiring your attention.',
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: 'Clinical Decision Support',
    description: 'Access AI-powered diagnostic suggestions and treatment recommendations based on the latest medical research and clinical guidelines. Our system provides data-driven second opinions to supplement your expertise.',
  },
  {
    icon: <Share2 className="w-12 h-12" />,
    title: 'Secure Collaboration',
    description: 'Collaborate with colleagues and specialists securely. Share patient data, images, and AI analyses while maintaining strict HIPAA compliance and patient privacy.',
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: 'Research & Analytics',
    description: 'Leverage anonymized clinical data for research and quality improvement. Our platform provides powerful analytics tools to identify patterns and improve outcomes across patient populations.',
  },
];

export default function DoctorsPage() {
  return (
    <div className="pt-16 pb-8">
      {/* Hero section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute top-1/4 -left-24 w-80 h-80 bg-teal-100 dark:bg-teal-900/20 rounded-full opacity-50 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left mb-12 lg:mb-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Enhance Your Practice</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                  With AI Assistance
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                ShifaAI empowers healthcare professionals with cutting-edge AI technology to improve diagnostic accuracy, streamline workflows, and provide better patient care.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <div className="text-gray-400 dark:text-gray-500 text-center p-8">
                    [Doctor using ShifaAI dashboard illustration]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div id="features" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Powerful Tools for Healthcare Professionals
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides a suite of tools designed to enhance clinical decision-making, 
              improve efficiency, and elevate patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              What Healthcare Professionals Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn how ShifaAI is transforming medical practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-white font-medium text-lg">
                  MC
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Dr. Michael Chen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Radiologist at Central Hospital</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "As a radiologist, ShifaAI's image analysis capabilities have revolutionized my workflow. It highlights potential abnormalities I might miss during long shifts, acting as a reliable second pair of eyes. My diagnostic confidence has improved, and I can handle more cases without compromising on accuracy."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-white font-medium text-lg">
                  PP
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Dr. Priya Patel</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Hospital Administrator</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The patient management system has streamlined our hospital operations. We've reduced report generation time by 60% and improved diagnostic accuracy by incorporating ShifaAI's recommendations. This has led to better patient outcomes and significant cost savings for our institution."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-white font-medium text-lg">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Dr. James Smith</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Primary Care Physician</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "ShifaAI has transformed my primary care practice. The clinical decision support helps me stay current with the latest medical research and treatment guidelines. I can provide more personalized care to my patients because the AI handles much of the data analysis, giving me more time for direct patient interaction."
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-white font-medium text-lg">
                  AR
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Dr. Aisha Rahman</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dermatologist</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The dermatological analysis capabilities of ShifaAI are impressive. The system helps me identify subtle patterns in skin lesions that could indicate early-stage melanoma. This has already helped us catch several cases early, potentially saving lives through timely intervention."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Integration section */}
      <div className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Seamless Integration
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ShifaAI works with your existing healthcare systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">EHR Compatible</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Integrates with major Electronic Health Record systems including Epic, Cerner, and Allscripts
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end encryption and strict access controls protect sensitive patient information
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">API Access</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Extensive API documentation allows for custom integrations with your existing workflows
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
} 