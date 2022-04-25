import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					<meta name="facebook-domain-verification" content="409ftxgnl2ibsi2lit6lkeu2r5bgvn" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					<link
						href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// MyDocument.getInitialProps = async (ctx) => {
// 	const sheet = new ServerStyleSheet();
// 	const originalRenderPage = ctx.renderPage;

// 	try {
// 		ctx.renderPage = () =>
// 			originalRenderPage({
// 				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
// 			});

// 		const initialProps = await Document.getInitialProps(ctx);
// 		return {
// 			...initialProps,
// 			styles: [
// 				<React.Fragment key="styles">
// 					{initialProps.styles}
// 					{sheet.getStyleElement()}
// 				</React.Fragment>
// 			]
// 		};
// 	} finally {
// 		sheet.seal();
// 	}
// };

export default MyDocument;
