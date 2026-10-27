import { useEffect } from 'react';

type Theme = 'light' | 'dark';

// The site uses one dark editorial theme to match the Project Intelligence hub.
export function useTheme() {
  const theme: Theme = 'dark';

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }, []);

  const toggle = () => {};
  const setTheme = (_t: Theme) => {};

  return { theme, toggle, setTheme };
}
