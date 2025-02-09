'use client';

import { FC, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CopyIcon } from 'lucide-react';
import { cn } from 'ui-components';
import { useApp } from '@password-generator-app/contexts';

interface CopyPasswordProps {}

export const CopyPassword: FC<CopyPasswordProps> = () => {
  const { password } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error('Error to copy: ', error);
        setCopied(false);
      });
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <section
      onClick={handleCopy}
      className={cn(
        'grid grid-cols-[1fr_auto] gap-5 items-center',
        'bg-custom-dark-grey h-16 px-4',
        'group cursor-pointer'
      )}
    >
      <p className="text-heading-m text-custom-almost-white truncate">
        {password}
      </p>
      <div className="flex items-center gap-3">
        <AnimatePresence>
          {copied && (
            <motion.p
              className="text-body-m text-custom-neon-green"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              COPIED
            </motion.p>
          )}
        </AnimatePresence>
        <CopyIcon
          className={cn(
            'text-custom-neon-green transition-colors',
            'group-hover:text-custom-almost-white'
          )}
        />
      </div>
    </section>
  );
};
