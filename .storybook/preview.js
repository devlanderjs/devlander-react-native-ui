export const parameters = {
  backgrounds: {
    default: 'lightTheme',
    values: [
      {
        name: 'lightTheme',
        value: '#EFF0F5',
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