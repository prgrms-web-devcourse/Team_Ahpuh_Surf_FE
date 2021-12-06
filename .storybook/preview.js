import { ThemeProvider } from 'emotion-theming'
import theme from '../styles/theme'
import { addDecorator } from '@storybook/react'
import '../styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const EmotionThemeProvider = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)
addDecorator(EmotionThemeProvider)
