import { CodeBracketIcon, CpuChipIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          <span className="text-purple-600">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                <CodeBracketIcon className="h-5 w-5 text-white" />
              </div>
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
          <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg group-hover:scale-110 transition-transform">
                <CpuChipIcon className="h-5 w-5 text-white" />
              </div>
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
          <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                <WrenchScrewdriverIcon className="h-5 w-5 text-white" />
              </div>
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

