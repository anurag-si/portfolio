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
    <section id="experience" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          <span className="text-blue-600">Work Experience</span>
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-lg text-gray-700 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4" />
                    {exp.location}
                  </p>
                </div>
                <div className="text-gray-600 flex items-center gap-2 mt-4 md:mt-0">
                  <CalendarIcon className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

