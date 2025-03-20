import React from 'react';
import { Metadata } from 'next';
import { Brain, Stethoscope, ImageDown, Pill, VideoIcon, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'For Patients | ShifaAI - AI-Powered Healthcare Platform',
  description: 'Discover how ShifaAI helps patients with AI-powered symptom checking, test recommendations, report analysis, and personalized healthcare.',
};

const patientFeatures = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'AI-Powered Symptom Checker',
    description: 'Enter your symptoms and our AI suggests possible conditions and recommended tests. Our symptom checker uses sophisticated algorithms trained on millions of medical cases to provide accurate assessments.',
  },
  {
    icon: <Stethoscope className="w-12 h-12" />,
    title: 'Test Recommendation System',
    description: 'Get personalized test recommendations based on your symptoms and medical history. Our AI helps you avoid unnecessary tests while ensuring you get the diagnostics you actually need.',
  },
  {
    icon: <ImageDown className="w-12 h-12" />,
    title: 'Report Analysis & Insights',
    description: 'Upload your medical reports and our AI will read and explain them in simple language. Understand your MRIs, X-rays, blood tests, and other reports without medical jargon.',
  },
  {
    icon: <Pill className="w-12 h-12" />,
    title: 'Medicine Recommendations',
    description: 'Receive AI-suggested medication options based on your diagnosis and medical guidelines. Our system checks for potential drug interactions and side effects based on your health profile.',
  },
  {
    icon: <VideoIcon className="w-12 h-12" />,
    title: 'Telemedicine Integration',
    description: 'Connect with qualified doctors for AI-assisted consultations from anywhere. Share your symptoms and AI analysis with healthcare professionals for comprehensive care.',
  },
  {
    icon: <LayoutDashboard className="w-12 h-12" />,
    title: 'Health Dashboard',
    description: 'Access your personal health records, test results, and AI recommendations in one place. Track your health metrics over time and monitor improvements with visual charts and insights.',
  },
];

export default function PatientsPage() {
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
                <span className="block">AI-Powered Healthcare</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                  For Patients
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                Experience the future of healthcare with ShifaAI's AI-powered platform designed to make healthcare more accessible, personalized, and effective for patients.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
                >
                  Get Started
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
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <div className="text-gray-400 dark:text-gray-500 text-center p-8">
                    [Patient using ShifaAI mobile app illustration]
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
              Patient-Focused Features
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform offers innovative AI solutions designed specifically for patients, 
              making healthcare more accessible, understandable, and personalized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patientFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
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

      {/* How it works section */}
      <div className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ShifaAI makes healthcare simple and accessible in just a few steps
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>

            {/* Steps */}
            <div className="space-y-16 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="text-center md:text-right mb-8 md:mb-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl mb-4">1</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Create Your Account</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sign up and create your personal health profile with basic information about your medical history, allergies, and current medications.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 ml-0 md:ml-8">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">[Account Creation Screen]</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 mr-0 md:mr-8 order-2 md:order-1">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">[Symptom Input Interface]</span>
                  </div>
                </div>
                <div className="text-center md:text-left mb-8 md:mb-0 order-1 md:order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl mb-4">2</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Describe Your Symptoms</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Use our intuitive interface to describe your symptoms in detail. Our AI understands natural language and asks relevant follow-up questions.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="text-center md:text-right mb-8 md:mb-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl mb-4">3</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Receive AI Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our advanced AI analyzes your symptoms, medical history, and relevant medical literature to provide potential conditions and recommended next steps.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 ml-0 md:ml-8">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">[AI Analysis Dashboard]</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 mr-0 md:mr-8 order-2 md:order-1">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">[Doctor Consultation Interface]</span>
                  </div>
                </div>
                <div className="text-center md:text-left mb-8 md:mb-0 order-1 md:order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl mb-4">4</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect with Healthcare Providers</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    If needed, schedule a virtual consultation with a qualified healthcare provider who will have access to your AI-generated health insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from people who have experienced the benefits of ShifaAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-white font-medium text-lg">
                  SJ
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Patient</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "ShifaAI's symptom checker helped me identify a serious condition early. The AI recommended tests that my doctor confirmed were necessary. I'm convinced it saved my life."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-white font-medium text-lg">
                  RW
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Robert Williams</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Family Caregiver</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "My elderly mother can now better understand her medical reports and medication schedules through ShifaAI. The plain language explanations and reminders have improved her medication adherence significantly."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-white font-medium text-lg">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Jennifer Davis</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Chronic Condition Patient</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Living with diabetes has become much easier with ShifaAI. The app helps me track my blood sugar levels, provides dietary recommendations, and alerts me when something seems off. It's like having a healthcare assistant 24/7."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about using ShifaAI as a patient
            </p>
          </div>

          <div className="grid gap-6 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Is ShifaAI meant to replace my doctor?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No, ShifaAI is designed to complement healthcare professionals, not replace them. Our AI provides insights and information to help you and your doctor make better informed decisions about your health. Always consult with a healthcare professional for medical advice.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How accurate is the AI symptom checker?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI symptom checker has been trained on millions of medical cases and continuously improves. It achieves a high level of accuracy but should be used as a guide rather than a definitive diagnosis. The system is designed to err on the side of caution, sometimes suggesting you seek medical attention even for conditions that may turn out to be minor.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Is my health data secure?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we take data security very seriously. ShifaAI is HIPAA and GDPR compliant, using end-to-end encryption for all sensitive information. Your personal health data is never sold to third parties and is only used to provide you with better healthcare insights.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How does the telemedicine feature work?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                After using the symptom checker, you can opt to connect with a licensed healthcare provider through our secure video platform. Your AI analysis results can be shared with them, giving them important context before the consultation begins. You can schedule appointments or, in some regions, connect with available providers immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
} 