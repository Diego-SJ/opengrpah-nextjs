import { darkTheme } from '../theme/theme';
import 'styled-components';

export type StyledComponentsType = typeof darkTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends StyledComponentsType {}
}
