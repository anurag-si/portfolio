import Link from 'next/link';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back to Home Button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Hero />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

