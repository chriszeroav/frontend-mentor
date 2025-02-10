import { FC } from 'react';
import { Button, ButtonProps, cn } from 'ui-components';

export const ButtonPrimary: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      className={cn(
        'bg-red-custom/90 text-white hover:bg-red-custom',
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
        'bg-white text-rose-custom-900 border border-rose-custom-400',
        'hover:text-red-custom hover:border-red-custom',
        className
      )}
      {...props}
    />
  );
};
