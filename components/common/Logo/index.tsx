import Image from 'next/image';
import logoLarge from '@/public/images/logo_large.svg';
import logoSmall from '@/public/images/logo_small.svg';
import Link from 'next/link';

interface ILogoProps {
  isSmall?: boolean;
}

const Logo = ({ isSmall }: ILogoProps) => {
  return (
    <Link href="/">
      {isSmall ? (
        <Image src={logoSmall} alt="Logo" />
      ) : (
        <Image src={logoLarge} alt="Logo" />
      )}
    </Link>
  );
};

export default Logo;
