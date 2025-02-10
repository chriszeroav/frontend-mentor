import { ComponentProps, FC } from 'react';
import { cn } from 'ui-components';

interface StartsProps extends ComponentProps<'div'> {
  number: number;
  startWidth?: number;
}

export const Starts: FC<StartsProps> = ({
  number,
  startWidth = 24,
  className,
}) => {
  return (
    <div className={cn('flex', className)}>
      {Array.from({ length: number }).map((_, index) => (
        <img
          key={index}
          src="/icon-star.svg"
          alt="icon-start"
          style={{ width: `${startWidth}px`, height: `${startWidth}px` }}
        />
      ))}
    </div>
  );
};
