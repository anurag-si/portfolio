'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { TravelLocation, VideoSrc } from '@/types/travel';
import { travelLocations } from '@/data/travelLocations';

export default function PhotographyGallery() {
  const [selectedLocation, setSelectedLocation] = useState<TravelLocation | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLocationGallery = (location: TravelLocation) => {
    setSelectedLocation(location);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLocationGallery = () => {
    setSelectedLocation(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedLocation) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedLocation.images.length - 1 : prev - 1
      );
    }
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedLocation) {
      setCurrentImageIndex((prev) =>
        prev === selectedLocation.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const goToImage = (index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!selectedLocation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedLocation) return;
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) =>
          prev === 0 ? selectedLocation.images.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) =>
          prev === selectedLocation.images.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === 'Escape') {
        setSelectedLocation(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedLocation]);

  return (
    <>
      {/* Back to Home Button */}


      {/* Photography Section */}
      <section id="travel" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            <span className="text-indigo-600">Photography</span>
          </h2>

          {travelLocations.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {travelLocations.map((location) => {
                const firstImage = location.images.find(img => img.type === 'image') || location.images[0];
                return (
                  <button
                    key={location.id}
                    onClick={() => openLocationGallery(location)}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    {firstImage.type === 'image' ? (
                      <Image
                        src={firstImage.src}
                        alt={location.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <video
                        src={firstImage.src as VideoSrc}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                      />
                    )}
                    {/* Always visible location name only */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-xl font-bold">{location.name.toUpperCase()}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-600">No travel journeys to display yet.</p>
          )}
        </div>
      </section>

      {/* Location Gallery Modal */}
      {selectedLocation && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLocationGallery}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLocationGallery}
              className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
              aria-label="Close gallery"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Location Header */}
            <div className="mb-6 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{selectedLocation.name.toUpperCase()}</h3>
              <p className="text-lg opacity-80">{selectedLocation.date}</p>
            </div>

            {/* Carousel Container */}
            <div className="relative group">
              {/* Main Media (Image or Video) */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 bg-black/50">
                {selectedLocation.images[currentImageIndex].type === 'image' ? (
                  <Image
                    src={selectedLocation.images[currentImageIndex].src}
                    alt={selectedLocation.images[currentImageIndex].description || `${selectedLocation.alt} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                ) : (
                  <video
                    src={selectedLocation.images[currentImageIndex].src as VideoSrc}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    muted
                    playsInline
                  />
                )}

                {/* Date/Description overlay - shows on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                    <p className="text-sm font-medium opacity-90">
                      {selectedLocation.images[currentImageIndex].date}
                    </p>
                    {selectedLocation.images[currentImageIndex].description && (
                      <p className="text-xs opacity-70 mt-1">
                        {selectedLocation.images[currentImageIndex].description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Previous Button */}
              {selectedLocation.images.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
              )}

              {/* Next Button */}
              {selectedLocation.images.length > 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              )}

              {/* Image Counter */}
              {selectedLocation.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  {currentImageIndex + 1} / {selectedLocation.images.length}
                </div>
              )}

              {/* Dots Indicator */}
              {selectedLocation.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {selectedLocation.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => goToImage(index, e)}
                      className={`h-2 rounded-full transition-all ${index === currentImageIndex
                        ? 'w-8 bg-white'
                        : 'w-2 bg-white/40 hover:bg-white/60'
                        }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

