'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        {/* Profile Image */}
        <div className="mb-12 mt-20 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
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

        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Anurag Singh
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-normal">
          Senior Software Engineer
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          I build web applications that people actually use. Currently working with React and TypeScript,
          previously shipped production games at Aristocrat Gaming.
        </p>

        {/* Two Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Work Option */}
          <Link
            href="/work"
            className="group relative bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <div className="p-4 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-500 transition-colors">
                <CodeBracketIcon className="h-12 w-12 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Work</h2>
              <p className="text-gray-600 text-sm">Experience, Skills & Projects</p>
            </div>
          </Link>

          {/* Personal Option */}
          <Link
            href="/personal"
            className="group relative bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <div className="p-4 bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-500 transition-colors">
                <SparklesIcon className="h-12 w-12 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal</h2>
              <p className="text-gray-600 text-sm">Photography & Travel</p>
            </div>
          </Link>
        </div>

        <div className="mt-16">
          <SocialLinks />
        </div>

        {/* Bio */}
        <p className="text-base md:text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed mt-12">
          &ldquo;Everything around you that you call life was made up by people that were no smarter than you.&rdquo; — Steve Jobs
        </p>

      </div>
    </div>
  );
}
