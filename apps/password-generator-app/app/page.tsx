import { CopyPassword } from '@password-generator-app/components/home';
import { GeneratePassword } from '@password-generator-app/forms';

export default function Index() {
  return (
    <main className="px-5 py-10 self-center">
      <div className="max-w-xl mx-auto flex flex-col gap-4">
        <h1 className="text-preset text-custom-grey text-center">
          Password Generator
        </h1>

        <CopyPassword />
        <GeneratePassword />
      </div>
    </main>
  );
}
