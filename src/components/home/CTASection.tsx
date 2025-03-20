'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-teal-100 dark:bg-teal-900/20 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to revolutionize healthcare?</span>
                  <span className="block text-teal-100">Get started with ShifaAI today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white opacity-90">
                  Join thousands of healthcare professionals and patients already benefiting 
                  from our AI-powered healthcare solutions.
                </p>
                <div className="mt-10 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                  <Link
                    href="/signup"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 shadow-sm"
                  >
                    Sign up for free
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 bg-transparent"
                  >
                    Contact sales
                  </Link>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                <div className="flex flex-col space-y-4 text-white">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-white">HIPAA & GDPR Compliant</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Free 30-day trial</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-white">No credit card required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 