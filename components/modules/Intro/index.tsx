'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import logoTransparent from '@/public/images/logo_transparent.svg';

const Intro = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogin = () => {
    signIn();
  };

  const handleLogout = () => {
    signOut();
  };

  const handleLaunchApp = () => {
    if (session?.user) {
      router.push('/test2');
    } else {
      signIn();
    }
  };

  return (
    <section className="container mb-14 lg:mb-20 flex flex-wrap justify-between items-start">
      <div className="w-full md:w-1/2 order-1 md:order-none">
        <h1 className="text-5xl lg:text-7xl text-white mb-4 md:mb-6">
          Explore and Earn on
          <Image
            className="inline-block ml-2 lg:ml-6"
            src={logoTransparent}
            alt="logo"
          />
        </h1>
        <div className="w-full md:max-w-[432px]">
          <div className="bg-white rounded-large px-2 py-1 flex justify-end mb-6">
            <Button className="px-8" type="secondary">
              Sign up
            </Button>
          </div>
          <div className="flex justify-between space-x-2 lg:space-x-10">
            {session !== undefined && (
              <>
                {session?.user ? (
                  <Button
                    className="px-2 lg:px-12 w-full py-2"
                    type="primary"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                ) : (
                  <Button
                    className="px-2 lg:px-12 w-full py-2"
                    type="primary"
                    onClick={handleLogin}
                  >
                    Log in
                  </Button>
                )}
              </>
            )}
            <Button
              className="px-2 lg:px-12 w-full py-2 shadow-sm"
              type="secondary"
              onClick={handleLaunchApp}
            >
              Launch App
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[250px] mb-4 md:mb-0 rounded-lg bg-white flex flex-col justify-center items-center px-2 pt-12 pb-6 shadow-md">
        <Logo isSmall />
        <p className="text-blue-gray-400 mt-1">test Front end interview 1</p>
      </div>
    </section>
  );
};

export default Intro;
