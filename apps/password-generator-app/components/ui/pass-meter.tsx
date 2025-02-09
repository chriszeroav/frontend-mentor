import { FC } from 'react';
import { cn } from 'ui-components';

interface PassMeterProps {
  strengthLevels: {
    label: string;
    color: string;
    bars: number;
  }[];
  strength: number;
}

export const PassMeter: FC<PassMeterProps> = ({ strengthLevels, strength }) => {
  const maxBars = Math.max(...strengthLevels.map((level) => level.bars));
  const level = strengthLevels[Math.min(strength, maxBars)];

  return (
    <div className="flex items-center justify-between bg-custom-very-dark-grey p-4">
      <span className="text-custom-grey text-preset">STRENGTH</span>
      <div className="flex items-center gap-2">
        <span className="text-body-m text-custom-almost-white">
          {level.label}
        </span>

        <div className="flex gap-1">
          {[...Array(maxBars)].map((_, i) => (
            <div
              className={cn(
                'w-[10px] h-[28px]',
                level.bars > i
                  ? level.color
                  : 'border-custom-almost-white border-2'
              )}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
