import { FC } from 'react';
import { Button, ButtonProps, cn } from 'ui-components';

export const ButtonPrimary: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      className={cn(
        'bg-custom-black text-custom-light-cream',
        'hover:bg-custom-galactic-blue',
        className
      )}
      {...props}
    />
  );
};

export const ButtonSecondary: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      className={cn(
        'bg-custom-light-red text-custom-light-cream',
        'hover:bg-custom-summer-yellow',
        className
      )}
      {...props}
    />
  );
};

export const ButtonOutline: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      className={cn(
        'border-custom-neutral-0 text-custom-neutral-0 bg-transparent',
        'hover:bg-gradient-to-r hover:from-custom-neutral-700 hover:to-custom-neutral-900',
        'border-2',
        className
      )}
      {...props}
    />
  );
};
