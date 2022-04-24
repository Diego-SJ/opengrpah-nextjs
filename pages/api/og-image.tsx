import styled, { ServerStyleSheet } from 'styled-components';
import { withOGImage } from 'next-api-og-image';
import { renderToString } from 'react-dom/server';

interface QueryParams {
	age?: string;
}

export default withOGImage<'query', QueryParams>({
	strategy: 'query',
	template: {
		// include HTML template here
		html: async ({ age }: QueryParams) => {
			const sheet = new ServerStyleSheet();
			try {
				const html = renderToString(sheet.collectStyles(<Markup data={{ age }} />));
				const styleTags = sheet.getStyleTags();
				return `<html><style>body {margin:0; color: #ffffff;}</style>${styleTags}<body>${html}</body></html>`;
			} catch (error) {
				return '<h1>Ops! Something went wrong, we are on it!</h1>';
			}
		}
	},
	type: 'webp',
	cacheControl: 'public, max-age=604800, immutable',
	dev: {
		inspectHtml: false
	}
});

function Markup({ data: { age = '0' } }: { data: QueryParams }) {
	return (
		<Wrapper>
			<h4 className="logo">zenda.la</h4>
			<h3 className="title1">
				Mi edad biológica <br />
				en este momento es
			</h3>
			<figure className="indicator">{age}</figure>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	box-sizing: border-box;
	background: linear-gradient(180deg, #161520 2.54%, #202239 48.12%, #1a1927 103.06%);
	font-size: 1rem;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Gill Sans', sans-serif;
	position: relative;

	.indicator {
		width: 19rem;
		height: 19rem;
		background: url('https://firebasestorage.googleapis.com/v0/b/save365-a896f.appspot.com/o/gradientIndicator.png?alt=media&token=14cb5be1-15d6-47cc-96e8-4e62d4df2ddf');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 8rem;
		color: #52d4c5;
		font-weight: 300;
	}

	.logo {
		font-size: 1.7rem;
		position: absolute;
		top: 1rem;
		left: 5rem;
		font-weight: 600;
	}

	.title1 {
		font-size: 2rem;
		font-weight: 500;
		text-align: center;
		line-height: 1.1;
		margin: 0 0 2rem;
		padding: 0;
	}
`;
