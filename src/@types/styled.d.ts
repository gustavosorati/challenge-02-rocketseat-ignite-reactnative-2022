import 'styled-components'
import type theme from '../styles/theme/index'

type ThemeType = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
