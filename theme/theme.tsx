import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './sc-theme';

export const NEW_THEME = {
	app: {
		primary: { main: '#ffffff', contrast: '#000' },
		secondary: { dark: '#A5AEC8', main: '#A5AEC8', contrast: '#000', '100': '#B7C1DC' },
		tertiary: {
			main: '#2D2F47',
			dark: 'linear-gradient(180deg, #1F1E2B 2.54%, #2D2F47 37.23%, #1F1E2B 103.06%)',
			contrast: '#fff',
			'100': '#3C3F58',
			'200': '#54576A'
		}
	},
	plans: {
		basic: { main: '#FFAC00', contrast: '#ffffff' },
		essential: { main: '#FE5D49', contrast: '#ffffff' },
		pro: { main: '#834B9D', contrast: '#ffffff' }
	},
	colors: {
		green: { light: '#6CDBB3', main: '#6FCB88', '100': '#7ED655' },
		violet: { main: '#CC60FF' },
		yellow: { main: '#F1E46C', dark: '#FFCA5F' },
		purple: { main: '#575CE4' },
		red: { light: '#FD7E7E', main: '#FF4949', '100': '#EC5B56' },
		teal: { light: '#5DEEDD', main: '#2DDBB1' },
		blue: { light: '#7EA9FD', main: '#49B3FF', '100': '#47B6F5' },
		pink: { light: '#E57EFF', main: '#F25FA6', dark: '#C2006F' },
		orange: { light: '#F69D4B', main: '#F58647', dark: '#FF8000', '100': '#f55d4b' },
		gradient: {
			tealpurple: 'linear-gradient(270.01deg, #2DDBB1 0.01%, #9D94C8 101.04%)',
			orangered: 'linear-gradient(90.07deg, #F9883D -10.73%, #E54749 109.15%)',
			violetOrange: 'linear-gradient(270.01deg, #BB64FF 0.01%, #E96443 101.04%)',
			dark: 'linear-gradient(180deg, #1F1E2B 2.54%, #2D2F47 37.23%, #1F1E2B 103.06%)',
			purpleRed: 'linear-gradient(89.97deg, #8489BE 0.02%, #DF688F 51.16%, #F55D4B 114.34%)',
			orangepink: 'linear-gradient(90.07deg, #F9893D -10.73%, #E84F48 49.84%, #A726CA 109.15%)'
		},
		social: {
			facebook: { main: '#475a93', contrast: '#33457a' },
			twitter: { main: '#02a9f4', contrast: '#008bcc' },
			instagram: { main: '#d30067', contrast: '#b30056' },
			whatsapp: { main: '#51ce57', contrast: '#1fad26' },
			linkedin: { main: '#2767b2', contrast: '#1c5494' }
		}
	}
};

export const lightTheme = {
	root4: '#eb7f53',
	root4Dark: '#d36f48',
	gradient: {
		primary: 'linear-gradient(180deg, #1F1E2B 2.54%, #2D2F47 41.22%, #1F1E2B 103.06%)',
		secondary: 'linear-gradient(270deg, #D00AB8 -0.39%, #F55D4B 100%)',
		tertiary: 'linear-gradient(270deg, #C100A9 -9.11%, #F55D4B 100%)'
	},
	space: {
		xs: '0.4rem',
		sm: '0.8rem',
		md: '3.2rem',
		navbarHeight: '7rem'
	},
	breakPoints: {
		xs: '400px',
		sm: '600px',
		md: '768px',
		lg: '992px',
		xl: '1200px',
		xxlg: '2000px'
	},
	fontSize: {
		xs: '1.2rem',
		sm: '1.6rem',
		md: '1.8rem',
		lg: '2.4rem',
		xlg: '3.7rem',
		xxlg: '4.5rem'
	},
	borderRadius: {
		xs: '0.5rem',
		sm: '1.3rem',
		md: '1.5rem',
		lg: '2rem',
		xlg: '2.5rem',
		xxlg: '50rem'
	},
	boxShadow: {
		xs: '',
		sm: '0px 0px 20px rgba(0, 0, 14, 0.156605)'
	},
	...NEW_THEME
};

export const darkTheme = {
	...lightTheme
};

const GlobalThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState(darkTheme);
	const [isDarkTheme] = useState(true);

	useEffect(() => {
		setTheme(isDarkTheme ? darkTheme : lightTheme);
	}, [isDarkTheme]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default GlobalThemeProvider;
