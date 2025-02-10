import { ComponentProps, FC } from 'react';
import { ButtonPrimary } from '@tech-book-club-landing/components/ui';
import { cn } from 'ui-components';

interface OptionItemProps extends ComponentProps<'div'> {
  relevant?: boolean;
  title: string;
  price: string | number;
  period?: string;
  advantages: string[];
  buttonText?: string;
}

export const OptionItem: FC<OptionItemProps> = ({
  relevant = false,
  title,
  price,
  period,
  advantages,
  buttonText = 'SUBSCRIBE NOW',
  className,
}) => {
  const finalPrice = typeof price === 'number' ? `$${price}` : price;

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        relevant ? 'bg-custom-neutral-100' : 'bg-custom-neutral-0',
        'rounded-lg border border-custom-neutral-200 p-6',
        className
      )}
    >
      <div className="flex flex-col gap-8 relative z-10">
        <div className="flex flex-col gap-6 text-custom-neutral-900">
          <h3 className="text-preset4">{title}</h3>
          <p className="text-preset3 inline-flex gap-2 items-center">
            {finalPrice}
            {period && (
              <span className="text-preset5 text-custom-neutral-700">
                {period}
              </span>
            )}
          </p>
          <div className="h-[1px] bg-custom-neutral-200" />
          <ul className="flex flex-col gap-4">
            {advantages.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <img
                  className="size-6"
                  src="/icon-check.svg"
                  alt="icon-check"
                />
                <span className="text-preset5 text-custom-neutral-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <ButtonPrimary className="h-14 rounded-[8px]">
          <span className="text-preset6-mobile text-custom-neutral-900 uppercase">
            {buttonText}
          </span>
        </ButtonPrimary>
      </div>
      {relevant && (
        <img
          src="/pattern-glow.svg"
          className="absolute -bottom-40 -right-32 scale-150"
          alt="pattern-glow"
        />
      )}
    </div>
  );
};
