export const parameters = {
  backgrounds: {
    default: 'lightTheme',
    values: [
      {
        name: 'lightTheme',
        value: '#E1E1EA',
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}