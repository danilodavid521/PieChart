"use client";
import Image from 'next/image';
import { useState } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Help from './Help';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
    <header className="h-24 w-full bg-brand-300">
      <div className="mx-auto flex h-24 max-w-8xl items-center justify-between px-4 md:px-6 lg:px-8" aria-label="Global">
        <div className="w-16">
        <Image
          src="/logo.svg" 
          alt="Logo"
          width={64}
          height={64}
          priority={true}
        />
        </div>
      <div className="flex flex-1 justify-center text-2xl font-bold tracking-tight text-brand-950">
        Breincirkel
      </div>
      <div className="hidden w-16 md:inline"></div>
      <button 
            onClick={openModal} 
            className="absolute bottom-4 right-4 rounded-full bg-gray-200 px-4 py-2 text-gray-600 ring-1 ring-gray-200 transition hover:bg-gray-300 hover:ring-gray-400"
          >
            <div className="flex items-center"><QuestionMarkCircleIcon className="mr-2 size-5" />Hulp</div>
          </button>
      </div>
    </header>
     <Help isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
