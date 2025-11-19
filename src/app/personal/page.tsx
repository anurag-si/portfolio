import PhotographyGallery from '@/components/PhotographyGallery';

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Vlogs Section - Moved to top */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              <span className="text-indigo-600">Vlogs</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base">Documenting my journeys and experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-indigo-300 transition-all">
              <div className="aspect-video bg-gray-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cUZh-3tW1PI"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Latest Vlog</h3>
                <a
                  href="https://www.youtube.com/watch?v=cUZh-3tW1PI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Watch on YouTube
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <PhotographyGallery />
    </div>
  );
}
