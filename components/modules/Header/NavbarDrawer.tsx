'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/common/Button';
import { LIST_NAVIGATION } from '@/constants';
import { BarsIcon, CloseIcon } from '@/components/common/Icons';

const NavbarDrawer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:hidden relative">
      <Button className="text-2xl justify-self-end" onClick={handleToggleMenu}>
        <BarsIcon />
      </Button>
      {isMenuOpen && (
        <nav className="fixed top-0 left-0 bottom-0 shadow-lg bg-white py-14 overflow-hidden transition-all duration-300 z-[1] h-screen w-65 animate-fadeIn">
          <Button
            className="absolute top-5 right-5 text-xl"
            onClick={handleToggleMenu}
          >
            <CloseIcon />
          </Button>
          <ul className="flex flex-col gap-y-10">
            {LIST_NAVIGATION.map((itemNav) => (
              <li key={itemNav.key} className="flex items-center">
                <Link className="px-4" href={itemNav.href}>
                  {itemNav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavbarDrawer;
