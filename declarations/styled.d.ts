import 'styled-components/native';
import 'styled-components';

import {ThemeInterface} from '../types/theme.types';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeInterface {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
