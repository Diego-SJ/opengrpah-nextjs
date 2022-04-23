import Head from 'next/head';
import { MetaData, SeoProps } from './types';

const siteName = 'Zenda.la';

const HeadSeo: React.FC<SeoProps> = ({ seo }) => {
	const seoWithDefaults: MetaData = { ...seo };

	const fullSeo = {
		...seoWithDefaults,
		// Add title suffix
		metaTitle: `${seoWithDefaults?.metaTitle} | ${siteName || 'Zenda.la'}`,
		// Get full image URL
		shareImage: seoWithDefaults?.shareImage,
		metaDescription: seoWithDefaults?.metaDescription?.slice(0, 80)
	};

	return (
		<Head>
			<meta property="og:url" content={fullSeo?.url || 'https://zenda.la/'} />
			<title>{fullSeo?.metaTitle || 'Zenda.la'}</title>
			<meta name="og:title" content={fullSeo?.metaTitle || 'Zenda.la'} />
			<meta name="twitter:title" content={fullSeo?.metaTitle || 'Zenda.la'} />

			<meta
				name="description"
				content={fullSeo?.metaDescription || 'El plan de salud y prevención que responde por ti'}
			/>
			<meta
				name="og:description"
				content={fullSeo?.metaDescription || 'El plan de salud y prevención que responde por ti'}
			/>
			<meta
				name="twitter:description"
				content={fullSeo?.metaDescription || 'El plan de salud y prevención que responde por ti'}
			/>

			<meta
				name="og:image"
				content={
					fullSeo?.shareImage ||
					'https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6'
				}
			/>
			<meta
				name="twitter:image"
				content={
					fullSeo?.shareImage ||
					'https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6'
				}
			/>
			<meta
				name="image"
				content={
					fullSeo?.shareImage ||
					'https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6'
				}
			/>

			<meta name="og:type" content={fullSeo.article ? 'article' : 'website'} />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	);
};

export default HeadSeo;
