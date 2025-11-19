'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import SocialLinks from './SocialLinks';

export default function Header() {
    const pathname = usePathname();

    if (pathname === '/') {
        return null;
    }

    return (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                        Back to Home
                    </Link>

                    <SocialLinks
                        className="scale-75 origin-right"
                        containerClassName="gap-2"
                        iconClassName="h-5 w-5"
                    />
                </div>
            </div>
        </div>
    );
}
