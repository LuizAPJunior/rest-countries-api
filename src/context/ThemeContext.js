import { createContext } from 'react';

export const themes = {
  ligth: {
    background: 'hsl(var(--v-light-gray))',
    elements: 'hsl(var(--white))',
    text: 'hsl(var(--v-dark-blue-txt))',
    input: 'hsl(var(--dark-gray))',
  },
  dark: {
    background: 'hsl(var(--v-dark-blue-bg))',
    elements: 'hsl(var(--dark-blue))',
    text: 'hsl(var(--white))',
    input: 'hsl(var(--white))',
  },
};

export const ThemeContext = createContext();
