import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Next-Smrt</title>
				<meta
					name="viewport"
					content={
						'user-scalable=0, initial-scale=1, ' +
						'minimum-scale=1, width=device-width, height=device-height'
					}
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

MyApp.getInitialProps = async (appContext: AppContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

export default MyApp;
