import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import {
  Checkbox,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from 'ui-components';

interface MultiCheckboxProps extends ControllerRenderProps {
  options: {
    id: string;
    label: string;
  }[];
}

export const MultiCheckbox: FC<MultiCheckboxProps> = ({
  options,
  ...field
}) => {
  return (
    <div className="flex flex-col gap-5">
      {options.map((option) => (
        <FormItem key={option.id} className="flex items-center gap-2 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value.includes(option.id)}
              onCheckedChange={(checked) => {
                return checked
                  ? field.onChange([...field.value, option.id])
                  : field.onChange(
                      field.value?.filter((value: any) => value !== option.id)
                    );
              }}
            />
          </FormControl>
          <FormLabel className="text-custom-almost-white">
            <span className="text-preset">{option.label}</span>
          </FormLabel>
        </FormItem>
      ))}
      <FormMessage />
    </div>
  );
};
