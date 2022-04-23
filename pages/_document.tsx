import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';
// import { ServerStyleSheets } from '@mui/styles';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head></Head>
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
// 	const materialSheets = new ServerStyleSheets();
// 	const originalRenderPage = ctx.renderPage;

// 	try {
// 		ctx.renderPage = () =>
// 			originalRenderPage({
// 				enhanceApp: (App) => (props) =>
// 					sheet.collectStyles(materialSheets.collect(<App {...props} />))
// 			});

// 		const initialProps = await Document.getInitialProps(ctx);

// 		console.log(initialProps);
// 		return {
// 			...initialProps,
// 			styles: [
// 				<React.Fragment key="styles">
// 					{initialProps.styles}
// 					{sheet.getStyleElement()}
// 					{materialSheets.getStyleElement()}
// 				</React.Fragment>
// 			]
// 		};
// 	} finally {
// 		sheet.seal();
// 	}
// };

export default MyDocument;
