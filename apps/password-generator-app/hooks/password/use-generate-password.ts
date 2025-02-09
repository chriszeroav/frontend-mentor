export const useGeneratePassword = () => {
  const generatePassword = (characters: number, options: string[]) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let previewPassword = '';

    options.forEach((item) => {
      if (item === 'uppercase') previewPassword += uppercase;
      if (item === 'lowercase') previewPassword += lowercase;
      if (item === 'numbers') previewPassword += numbers;
      if (item === 'symbols') previewPassword += symbols;
    });

    let password = '';

    for (let i = 0; i < characters; i++) {
      const randomIndex = Math.floor(Math.random() * previewPassword.length);
      password += previewPassword[randomIndex];
    }

    return password;
  };

  return { generatePassword };
};
