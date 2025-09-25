'use client';

import { 
  EnvelopeIcon, 
  MapPinIcon, 
  CalendarIcon, 
  AcademicCapIcon,
  CodeBracketIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-medium text-gray-900">
              Anurag Singh
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Projects</a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section id="about" className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Profile Image */}
            <div className="mb-16 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-gray-200">
        <Image
                    src="/image.jpeg"
                    alt="Anurag Singh"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
          priority
        />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Hi, I&apos;m Anurag
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 font-normal leading-relaxed max-w-2xl mx-auto">
            Software Engineer
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:anuragis4063@gmail.com" className="flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-colors">
                <EnvelopeIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/anurag-singh-8986721b7/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/anurag-si" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-full hover:bg-slate-900 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/iam.anurag/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://leetcode.com/u/iamanurag/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors border border-gray-200">
            <Image
                  src="/leetcodelogo.png"
                  alt="LeetCode"
              width={20}
              height={20}
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            <span className="text-blue-600">Work Experience</span>
          </h2>
          
          <div className="space-y-12">
            {/* Engineer 2 - Aristocrat Gaming */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Engineer 2</h3>
                  <p className="text-lg text-gray-700 font-medium mb-3">Aristocrat Gaming</p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4" />
                    Noida
                  </p>
                </div>
                <div className="text-gray-600 flex items-center gap-2 mt-4 md:mt-0">
                  <CalendarIcon className="h-4 w-4" />
                  Aug 2024 – Sep 2025
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Developed two production-ready digital slot games using JavaScript, ReactJS, HTML5 Canvas, PHP and CocosJS. Built and integrated core gameplay features and reels logic across both client and server layers, enabling smooth game flow and accurate win-state handling. Integrated Spine animations and sound effects via CocosJS and internal Tools ensuring a smooth and visually aligned gameplay experience.
              </p>
            </div>

            {/* Front End Developer - Accenture */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Front End Developer</h3>
                  <p className="text-lg text-gray-700 font-medium mb-3">Accenture</p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4" />
                    Bengaluru
                  </p>
                </div>
                <div className="text-gray-600 flex items-center gap-2 mt-4 md:mt-0">
                  <CalendarIcon className="h-4 w-4" />
                  May 2021 - Aug 2024
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Held sole responsibility for building the Product Listing Page and Order Management System in two ecommerce platforms using React, Typescript and Redux. Built Product Listing Page UI with advanced filters, category-based sorting, and pagination, responsive for both desktop and mobile devices and handling complex UI behaviors. Developed Order Management System UI from scratch, covering screens such as Order Summary, Payment Status, and Shipping Details, with complex form flows and robust validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            <span className="text-emerald-600">Education</span>
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-emerald-500 rounded-full">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">B.Tech in Electronics and Communication Engineering</h3>
                <p className="text-lg text-gray-700 font-medium">NIT Hamirpur</p>
              </div>
            </div>
            <div className="text-gray-600 flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              2016 - 2020
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            <span className="text-purple-600">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <CodeBracketIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'PHP', 'Python', 'C++', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <CpuChipIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['ReactJS', 'Redux', 'NodeJS', 'ExpressJS', 'CocosJS', 'NextJS', 'GraphQL', 'Tailwind'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'MySQL', 'Docker', 'Git', 'Figma', 'JIRA', 'Jenkins', 'AEM'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            <span className="text-orange-600">Projects</span>
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Notes Nest 2</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <span>Developed a Notes Taking Application using Node.js, Express.js and MongoDB</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <span>Implemented secure user authentication features using JWT, enabling users to sign up and log in</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <span>Designed and implemented RESTful APIs for CRUD operations for adding and updating user&apos;s notes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2024 Anurag Singh. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
}