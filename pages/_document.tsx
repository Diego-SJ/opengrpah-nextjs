import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';
import { ServerStyleSheet as SCServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					<meta name="description" content={'SITE_DESCRIPTION'} />
					<meta name="author" content={'SITE_AUTHOR'} />
					<link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
					<link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
					{/* PWA primary color */}
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content={'SITE_NAME'} />
					<meta property="og:title" content={'TESTO OPEN GRPAH DOCUMENT'} />
					<meta property="og:description" content={'SITE_DESCRIPTION'} />
					<meta
						property="og:image"
						content={
							'https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6'
						}
					/>
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content={'SITE_NAME'} />
					<meta name="twitter:title" content={'TESTO OPEN GRPAH DOCUMENT'} />
					<meta name="twitter:description" content={'SITE_DESCRIPTION'} />
					<meta
						property="twitter:image"
						content={
							'https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6'
						}
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
					/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
					<link rel="stylesheet" href="/static/styles/main.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	// Set up our styled-components and material-ui style sheets here
	// Render app and page and get the context of the page with collected side effects.
	const scSheet = new SCServerStyleSheet();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => scSheet.collectStyles(<App {...props} />)
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			<React.Fragment key="styles">
				{initialProps.styles}
				{scSheet.getStyleElement()}
			</React.Fragment>
		]
	};
};

export default MyDocument;
