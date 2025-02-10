import { FC } from 'react';
import { ButtonPrimary } from '@single-page-design-portfolio/components/ui';
import Image from 'next/image';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="p-5">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Image src="/logo.svg" width={48} height={48} alt="Logo" />
        <ButtonPrimary className="h-11 max-w-[176px] w-full rounded-full md:h-14 md:w-56">
          Free Consultation
        </ButtonPrimary>
      </div>
    </footer>
  );
};
