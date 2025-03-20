'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    quote: "ShifaAI's symptom checker helped me identify a serious condition early. The AI recommended tests that my doctor confirmed were necessary. I'm convinced it saved my life.",
    name: "Sarah Johnson",
    title: "Patient",
    avatar: "SJ"
  },
  {
    quote: "As a radiologist, ShifaAI's image analysis capabilities have revolutionized my workflow. It highlights potential abnormalities I might miss during long shifts, acting as a reliable second pair of eyes.",
    name: "Dr. Michael Chen",
    title: "Radiologist at Central Hospital",
    avatar: "MC"
  },
  {
    quote: "The patient management system has streamlined our hospital operations. We've reduced report generation time by 60% and improved diagnostic accuracy by incorporating ShifaAI's recommendations.",
    name: "Dr. Priya Patel",
    title: "Hospital Administrator",
    avatar: "PP"
  },
  {
    quote: "My elderly mother can now better understand her medical reports and medication schedules through ShifaAI. The plain language explanations and reminders have improved her medication adherence significantly.",
    name: "Robert Williams",
    title: "Family Caregiver",
    avatar: "RW"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Trusted by Healthcare Professionals & Patients
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how ShifaAI is transforming healthcare experiences and outcomes around the world.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 relative">
                <div className="absolute -top-4 -left-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                  <Quote size={24} />
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 pt-2">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-white font-medium text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 