import GhostContentAPI from '@tryghost/content-api';
import { Article } from './types';

/**
 * API CONFIGURATION
 */
const api = new GhostContentAPI({
	url: 'https://cms.zenda.la',
	key: 'e3a088a2f85dcb01f96b4e9fbd',
	version: 'v3'
});

/**
 * Fetch blog's articles
 * @returns Parsed API call response
 */
export const fetchAllArticles = async (): Promise<Article[]> => {
	try {
		let articles = await api.posts.browse({ include: ['tags', 'authors'] });
		let processedArtiles: Article[] = articles.map(
			(item) =>
				({
					id: item?.id,
					author: { name: item?.primary_author?.name ?? 'Zenda.la' },
					category: { id: 1, name: 'Zenda.la' },
					content: item?.html ?? '',
					date: item?.created_at ?? '',
					slug: item?.slug ?? '',
					tags: item?.tags?.map((item) => item?.name ?? '')?.join(',') ?? '',
					title: item?.title ?? '',
					image: { name: item?.title ?? '', url: item?.feature_image ?? '' },
					imageUrl: item?.feature_image ?? ''
				} as Article)
		);

		return processedArtiles;
	} catch (error) {
		return [];
	}
};

/**
 * Fetch article by slug
 * @param Slug - string
 * @returns Parsed API call response
 */
export const fetchArticleBySlug = async (slug: string): Promise<Article> => {
	try {
		let article = await api.posts.read(
			{ slug },
			{ formats: ['html', 'plaintext'], include: ['tags', 'authors'] }
		);
		return {
			id: article?.id ?? '',
			author: { name: article?.primary_author?.name ?? 'Zenda.la' },
			category: { id: 1, name: 'News' },
			content: article?.html ?? '',
			date: article?.created_at ?? '',
			slug: article?.slug ?? '',
			tags: article?.tags?.map((item) => item?.name ?? '')?.join(',') ?? '',
			title: article?.title ?? '',
			image: { name: article?.title ?? '', url: article?.feature_image ?? '' },
			imageUrl: article?.feature_image ?? '',
			openGraph: {
				title: article?.og_title ?? article?.title ?? '',
				description: article?.og_description ?? article?.excerpt ?? '',
				image: article?.og_image ?? article?.feature_image ?? ''
			}
		};
	} catch (error) {
		return {
			id: '',
			author: { name: 'Zenda.la' },
			category: { id: 1, name: 'News' },
			content: '',
			date: '',
			slug: '',
			tags: '',
			title: '',
			image: { name: '', url: '' },
			imageUrl: '',
			openGraph: { title: '', description: '', image: '' }
		};
	}
};
