import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';
import { ServerStyleSheet as SCServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					{/* ================== Links and Metas ================== */}
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
						rel="stylesheet"
					/>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="facebook-domain-verification" content="409ftxgnl2ibsi2lit6lkeu2r5bgvn" />

					<meta
						property="og:title"
						content="Zenda.la | El plan de salud y prevención que responde por ti"
					/>
					<meta
						name="twitter:title"
						content="Zenda.la | El plan de salud y prevención que responde por ti"
					/>
					<meta property="og:url" content="https://zenda.la/" />
					<meta property="og:type" content="website" />
					<meta
						name="description"
						content="Creamos los planes de protección ideales para tus necesidades y presupuesto. Elige tu plan..."
					/>
					<meta
						property="og:description"
						content="Creamos los planes de protección ideales para tus necesidades y presupuesto. Elige tu plan..."
					/>
					<meta
						name="twitter:description"
						content="Creamos los planes de protección ideales para tus necesidades y presupuesto. Elige tu plan..."
					/>
					<meta
						property="og:image"
						content="https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6"
					/>
					<meta
						name="twitter:image"
						content="https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6"
					/>
					<meta
						name="image"
						content="https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6"
					/>
					<meta
						name="keywords"
						content="aseguradora, seguros en línea, seguros online, seguro de auto, hospitalización, seguro médico"
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
