import { withOGImage } from 'next-api-og-image';

interface QueryParams {
	stage: string;
	name: string;
}

export default withOGImage<'query', QueryParams>({
	template: {
		// include HTML template here
		html: ({ name, stage }) => {
			try {
				return `<h1>${name} <br /> ${stage}</h1>`;
			} catch (error) {
				console.log(error);
				return '<h1>OPEN GRAPH TEST</h1>';
			}
		}
	},
	cacheControl: 'public, max-age=604800, immutable',
	dev: {
		inspectHtml: false
	}
});
