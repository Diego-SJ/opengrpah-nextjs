import React from 'react';
import Head from 'next/head';
import GlobalThemeProvider from '../theme/theme';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<GlobalThemeProvider>
			<Head>
				<title>Next-Smrt</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
			</Head>

			<Component {...pageProps} />
		</GlobalThemeProvider>
	);
};

export default MyApp;
