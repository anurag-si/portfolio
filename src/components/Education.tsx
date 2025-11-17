import { CalendarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Education() {
  return (
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
  );
}

