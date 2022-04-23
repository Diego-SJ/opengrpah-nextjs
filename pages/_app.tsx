import React from 'react';
import Head from 'next/head';
// import GlobalThemeProvider from '../theme/theme';
import App, { AppContext, AppProps } from 'next/app';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import store, { persistor } from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Next-Smrt</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
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
