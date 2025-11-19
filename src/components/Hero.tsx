import Image from 'next/image';


export default function Hero() {
  return (
    <section id="about" className="py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-16 flex justify-center">
            <div className="relative">
              <div className="w-42 h-42 md:w-40 md:h-40 rounded-full overflow-hidden border border-gray-200">
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
            Senior Software Engineer
          </p>


        </div>
      </div>
    </section>
  );
}

