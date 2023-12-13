import Image from 'next/image';
import logoLarge from '@/public/images/logo_large.svg';
import logoSmall from '@/public/images/logo_small.svg';

interface ILogoProps {
  isSmall?: boolean;
}

const Logo = ({ isSmall }: ILogoProps) => {
  return (
    <>
      {isSmall ? (
        <Image src={logoSmall} alt="Logo" />
      ) : (
        <Image src={logoLarge} alt="Logo" />
      )}
    </>
  );
};

export default Logo;
