import React from 'react';
import { Metadata } from 'next';
import { BarChart3, Workflow, Shield, LayoutDashboard, Server, Network } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'For Hospitals | ShifaAI - AI-Powered Healthcare Platform',
  description: 'Discover how ShifaAI helps healthcare institutions with AI-powered workflow automation, hospital system integration, and predictive analytics.',
};

const hospitalFeatures = [
  {
    icon: <Workflow className="w-12 h-12" />,
    title: 'AI-Based Workflow Automation',
    description: 'Streamline hospital operations with automated report generation and smart task allocation. Reduce administrative burden and allow your staff to focus on patient care rather than paperwork.',
  },
  {
    icon: <Network className="w-12 h-12" />,
    title: 'Integration with Hospital Systems',
    description: 'Seamlessly connect with your existing PACS, EHR, and LIS for smooth data exchange. ShifaAI works with your infrastructure, not against it, ensuring minimal disruption during implementation.',
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: 'AI-Powered Predictive Analytics',
    description: "Forecast disease trends and identify high-risk patient populations. Proactively allocate resources where they're needed most to improve outcomes and operational efficiency.",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'HIPAA & GDPR Compliance',
    description: 'Ensure data security and privacy with our comprehensive compliance framework. ShifaAI meets the strictest regulatory requirements while giving you control over access and permissions.',
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: 'Scalable Cloud Solutions',
    description: "Deploy ShifaAI on the cloud or on-premises according to your institution's needs. Our flexible architecture scales with your organization, from small clinics to major hospital networks.",
  },
  {
    icon: <LayoutDashboard className="w-12 h-12" />,
    title: 'Administrative Dashboard',
    description: 'Monitor key metrics, track usage, and measure operational improvements with our intuitive dashboard. Generate comprehensive reports for stakeholders with a few clicks.',
  },
];

export default function AdminPage() {
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
                <span className="block">Transform Your Hospital</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                  With AI-Powered Operations
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                ShifaAI helps healthcare institutions modernize their operations, reduce costs, and improve patient outcomes through intelligent automation and data-driven insights.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
                >
                  Request Demo
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
                    [Hospital Operations Dashboard Illustration]
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
              Hospital Management Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered tools helps streamline operations, 
              improve clinical outcomes, and optimize resource allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
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

      {/* Benefits section */}
      <div className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              The ShifaAI Advantage
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here's how hospitals and healthcare systems benefit from implementing ShifaAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cost Reduction</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-16">
                Hospitals using ShifaAI report an average 27% reduction in administrative costs and 15% decrease in diagnostic errors, leading to significant financial savings.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Improved Efficiency</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-16">
                Our AI-powered workflow automation reduces report generation time by 60% and frees up an average of 8 hours per week for each healthcare professional.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Better Patient Outcomes</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-16">
                Healthcare institutions implementing ShifaAI report a 22% improvement in early disease detection and a 30% reduction in hospital readmission rates.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Data-Driven Insights</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-16">
                Leverage our predictive analytics to forecast patient volumes, optimize staffing, and identify trends that would otherwise remain hidden in your hospital data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500">[Hospital Case Study Video Placeholder]</span>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-4">
                Case Study
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Metropolitan Medical Center Achieves 42% Efficiency Improvement
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                One of the largest hospitals in the country implemented ShifaAI and saw remarkable improvements across their operations. By integrating our AI tools with their existing systems, they were able to:
              </p>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Reduce average report generation time from 3 hours to 45 minutes
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Decrease missed diagnoses by 35% with AI-assisted image analysis
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Save $2.4 million annually through optimized resource allocation
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Improve patient satisfaction scores by 28%
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  href="/case-studies"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center"
                >
                  Read the full case study
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Implementation Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We make integrating ShifaAI into your hospital systems smooth and efficient
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Assessment & Planning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our team works with your IT and clinical leaders to assess current systems and develop an implementation plan tailored to your hospital's specific needs.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 ml-0 md:ml-8">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">[Assessment Illustration]</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 mr-0 md:mr-8 order-2 md:order-1">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">[Integration Illustration]</span>
                  </div>
                </div>
                <div className="text-center md:text-left mb-8 md:mb-0 order-1 md:order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl mb-4">2</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Integration & Configuration</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We integrate ShifaAI with your existing systems, configure the platform to your workflows, and ensure all data transfers securely and accurately.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="text-center md:text-right mb-8 md:mb-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl mb-4">3</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Training & Deployment</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We provide comprehensive training for your staff and implement a phased deployment approach to minimize disruption to your operations.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 ml-0 md:ml-8">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">[Training Illustration]</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 mr-0 md:mr-8 order-2 md:order-1">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">[Support Illustration]</span>
                  </div>
                </div>
                <div className="text-center md:text-left mb-8 md:mb-0 order-1 md:order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl mb-4">4</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ongoing Support & Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our dedicated support team provides 24/7 assistance, while working with you to continuously optimize the system based on your feedback and evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
} 