import { FC } from 'react';
import { Button, ButtonProps, cn } from 'ui-components';

export const ButtonPrimary: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      className={cn(
        'border-custom-neutral-900 bg-custom-light-salmon-50',
        'hover:bg-gradient border-2',
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
