import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Publicis Sapient',
    location: 'Noida',
    period: 'Oct 2025 – Present',
    description: 'Worked on a maintaining and enhancing the existing Financial Services platform using React and AEM'
  },
  {
    title: 'Engineer 2',
    company: 'Aristocrat Gaming',
    location: 'Noida',
    period: 'Aug 2023 – Sep 2025',
    description: 'Developed two production-ready digital slot games using JavaScript, ReactJS, HTML5 Canvas, PHP and CocosJS. Built and integrated core gameplay features and reels logic across both client and server layers, enabling smooth game flow and accurate win-state handling. Integrated Spine animations and sound effects via CocosJS and internal Tools ensuring a smooth and visually aligned gameplay experience.'
  },
  {
    title: 'Front End Developer',
    company: 'Accenture',
    location: 'Bengaluru',
    period: 'May 2021 - Aug 2023',
    description: 'Held sole responsibility for building the Product Listing Page and Order Management System in two ecommerce platforms using React, Typescript and Redux. Built Product Listing Page UI with advanced filters, category-based sorting, and pagination, responsive for both desktop and mobile devices and handling complex UI behaviors. Developed Order Management System UI from scratch, covering screens such as Order Summary, Payment Status, and Shipping Details, with complex form flows and robust validation.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          <span className="text-blue-600">Work Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Year Badge */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                  {exp.period.split('–')[0].trim()}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-300 to-transparent"></div>
              </div>

              {/* Experience Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-base text-blue-600 font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <MapPinIcon className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon className="h-4 w-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
              </div>

              {/* Connector (except for last item) */}
              {index < experiences.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="h-8 w-px bg-blue-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
