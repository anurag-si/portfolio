import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

