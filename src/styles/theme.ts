import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#F5F8FA',
      '100': '#DADADA',
      '300': '#999999',
      '400': 'rgba(153,153,153, 0.5)',
      '500': '#47585B',
    },
    yellow: {
      '400': 'rgba(255, 186, 8, 0.5)',
      '500': '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.100',
      },
    },
  },
});
