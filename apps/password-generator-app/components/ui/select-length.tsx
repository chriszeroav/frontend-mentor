import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { cn, FormControl, FormItem, FormMessage, Slider } from 'ui-components';

interface SelectLengthProps extends ControllerRenderProps {
  min: number;
  max: number;
  steps?: number;
}

export const SelectLength: FC<SelectLengthProps> = ({
  min,
  max,
  steps = 1,
  ...field
}) => {
  return (
    <div className="flex flex-col gap-3">
      <header className="flex items-center justify-between gap-3">
        <h2 className="text-preset text-custom-almost-white">
          Character Length
        </h2>
        <p className="text-heading-m text-custom-neon-green">{field.value}</p>
      </header>
      <FormItem>
        <FormControl>
          <Slider
            step={steps}
            min={min}
            max={max}
            value={[field.value]}
            onValueChange={(value) => field.onChange(value[0])}
            classNameRange="bg-custom-neon-green "
            classNameTrack="bg-custom-very-dark-grey"
            classNameThumb={cn(
              'bg-custom-almost-white focus-visible:ring-custom-neon-green',
              'focus-visible:bg-custom-very-dark-grey'
            )}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </div>
  );
};
