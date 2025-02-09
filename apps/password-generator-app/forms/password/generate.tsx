'use client';

import { FC } from 'react';
import { Button, cn, Form, FormField } from 'ui-components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  MultiCheckbox,
  PassMeter,
  SelectLength,
} from '@password-generator-app/components/ui';
import { ArrowRightIcon } from 'lucide-react';
import { useGeneratePassword } from '@password-generator-app/hooks';
import { useApp } from '@password-generator-app/contexts';

interface GeneratePasswordProps {}

const options = [
  {
    id: 'uppercase',
    label: 'Include Uppercase Letters',
  },
  {
    id: 'lowercase',
    label: 'Include Lowercase Letters',
  },
  {
    id: 'numbers',
    label: 'Include Numbers',
  },
  {
    id: 'symbols',
    label: 'Include Symbols',
  },
];

const strengthLevels = [
  { label: '', color: 'bg-custom-almost-white', bars: 0 },
  { label: 'TOO WEAK!', color: 'bg-custom-red', bars: 1 },
  { label: 'WEAK', color: 'bg-custom-orange', bars: 2 },
  { label: 'MEDIUM', color: 'bg-custom-yellow', bars: 3 },
  { label: 'STRONG', color: 'bg-custom-neon-green', bars: 4 },
];

const FormSchema = z.object({
  options: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
  length: z.number().min(8, { message: 'The length must be at least 8.' }),
});

export const GeneratePassword: FC<GeneratePasswordProps> = () => {
  const { generatePassword } = useGeneratePassword();
  const { updatePassword } = useApp();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      length: 0,
      options: [],
    },
  });

  const { control, handleSubmit, watch } = form;

  const selectedOptions = watch('options');

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newPassword = generatePassword(data.length, data.options);
    updatePassword(newPassword);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 bg-custom-dark-grey p-5"
      >
        <FormField
          control={control}
          name="length"
          render={({ field }) => <SelectLength max={20} min={0} {...field} />}
        />
        <FormField
          control={control}
          name="options"
          render={({ field }) => <MultiCheckbox options={options} {...field} />}
        />

        <PassMeter
          strengthLevels={strengthLevels}
          strength={selectedOptions.length}
        />

        <Button
          variant="default"
          className={cn(
            'bg-custom-neon-green rounded-none text-custom-dark-grey border-custom-neon-green',
            'hover:bg-transparent hover:text-custom-neon-green',
            'gap-4 h-14 border-2'
          )}
          type="submit"
        >
          <span className="text-body-m">GENERATE</span>
          <ArrowRightIcon />
        </Button>
      </form>
    </Form>
  );
};
