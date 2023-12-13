'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import Logo from '@/components/common/Logo';
import { ArrowNextIcon } from '@/components/common/Icons';
import { LIST_NAVIGATION } from '@/constants';
import NavbarDrawer from './NavbarDrawer';
import { IDataWallet } from '@/interfaces';
import Image from 'next/image';
import LogoPetra from '@/public/images/logo_petra.svg';
import { shortenText } from '@/utils';

const Header = () => {
  const [dataWallet, setDataWallet] = useState<IDataWallet>();

  const getAptosWallet = async () => {
    if ('aptos' in window) {
      const wallet: any = window.aptos;

      try {
        const response = await wallet.connect();
        setDataWallet(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      window.open('https://petra.app/', `_blank`);
    }
  };

  return (
    <header className="container flex justify-between items-center">
      <NavbarDrawer />
      <Logo />
      <nav className="flex lg:w-2/3 bg-pink-200 px-3.5 py-2.5 rounded-xl">
        <ul className="text-blue-gray-500 font-bold hidden lg:flex justify-between flex-1 mr-1.5 xl:mr-23">
          {LIST_NAVIGATION.map((itemNav) => (
            <li key={itemNav.key} className="flex items-center">
              <Link className="px-4" href={itemNav.href}>
                {itemNav.name}
              </Link>
            </li>
          ))}
        </ul>
        {dataWallet ? (
          <div className='flex items-center space-x-3'>
            <Image src={LogoPetra} alt="petra" />
            <p className='font-bold text-blue-900'>{shortenText(dataWallet.address)}</p>
          </div>
        ) : (
          <Button
            className="text-blue-900 px-2 lg:px-9"
            rightIcon={<ArrowNextIcon />}
            onClick={getAptosWallet}
          >
            Connect Wallet
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
