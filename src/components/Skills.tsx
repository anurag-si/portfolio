import { CodeBracketIcon, CpuChipIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          <span className="text-purple-600">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-2 mb-6">
              <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'PHP', 'Python', 'C++', 'HTML', 'CSS'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-2 mb-6">
              <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['ReactJS', 'Redux', 'NodeJS', 'ExpressJS', 'CocosJS', 'NextJS', 'GraphQL', 'Tailwind'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Other Technologies */}
          <div className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-2 mb-6">
              <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'MySQL', 'Docker', 'Git', 'Figma', 'JIRA', 'Jenkins', 'AEM'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

