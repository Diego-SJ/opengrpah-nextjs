import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export const colorPallete = {
	yellow1: '#fbe5b2',
	yellow2: '#FFDF9A',
	yellow3: '#f8cb71',
	yellow4: '#f9d448',
	yellow5: '#f8cc46',
	yellow6: '#f4af3d',
	orange1: '#f19547',
	orange2: '#f19547',
	orange4: '#ee6b2d',
	red1: '#ec5b56',
	red2: '#ec4926',
	lila1: '#df3152',
	lila2: '#b2276d',
	green1: '#ddf2c6',
	green2: '#96d8b3',
	navy1: '#12364c',
	yellowLight: '#FFDF9A',
	yellow: '#FFAC00',
	yellowDark: '#9C8043',
	violet: '#834B9D',
	violetDark: '#6C659B',
	orange: '#fa4e38',
	orangeDark: '#CD5142',
	purpleLight: '#AFA5F0',
	purple: '#7768D8',
	purpleDark: '#594E9F',
	white: '#FFFFFF',
	light: '#DFDFDF',
	blueLight: '#F8FAFE',
	gray: '#6C6C6C',
	coal: '#444a59',
	black: '#000000',
	background2: '#F8FAFE',
	background: '#2D2F47'
};

const theme = createTheme({
	palette: {
		// orange
		primary: {
			light: colorPallete.orange,
			main: colorPallete.orange,
			dark: colorPallete.orangeDark,
			contrastText: colorPallete.white
		},
		// violet
		secondary: {
			light: colorPallete.violet,
			main: colorPallete.violet,
			dark: colorPallete.violetDark,
			contrastText: colorPallete.white
		},
		// yellow
		warning: {
			light: colorPallete.yellow,
			main: colorPallete.yellow,
			dark: colorPallete.yellowDark,
			contrastText: colorPallete.white
		},
		// purple
		info: {
			light: colorPallete.purple,
			main: colorPallete.purple,
			dark: colorPallete.purpleDark,
			contrastText: colorPallete.white
		},
		text: {
			primary: colorPallete.gray,
			secondary: colorPallete.white
		}
	},
	typography: {
		fontFamily: `"Manrope", "Helvetica", "Arial", sans-serif !important`,
		h1: {
			fontSize: '3.7rem',
			marginBottom: '1.7rem'
		},
		h2: {
			fontSize: '3.5rem',
			marginBottom: '1.5rem'
		},
		h3: {
			fontSize: '2.4rem',
			marginBottom: '0.8rem'
		},
		h4: {
			fontSize: '1.8rem',
			fontWeight: 400
		},
		h5: {
			fontSize: '1.6rem',
			lineHeight: '2.6rem'
		},
		caption: {
			fontSize: '2.4rem',
			lineHeight: '3.7rem',
			marginBottom: '0.8rem',
			'@media screen and (max-width: 768px)': {
				fontSize: '1.6rem',
				lineHeight: '2.3rem',
				marginBottom: '0.5rem'
			}
		},
		subtitle1: {
			fontSize: '1.6rem',
			fontWeight: 200,
			lineHeight: '2.2rem',
			marginBottom: '0.8rem'
		},
		subtitle2: {
			fontSize: '1.5rem',
			fontWeight: 800,
			lineHeight: '3.7rem',
			marginBottom: '0.8rem',
			letterSpacing: '0.22rem'
		}
	}
});

const MuiTheme: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default MuiTheme;
