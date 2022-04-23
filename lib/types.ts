export type Article = {
	id: string;
	imageUrl?: string;
	image?: {
		name: string;
		url: string;
	};
	date: string | Date | number;
	title: string;
	slug: string;
	author: {
		name: string;
	};
	tags: string;
	content: string;
	category: {
		id: number;
		name: string;
	};
	openGraph?: {
		image?: string | null;
		title?: string | null;
		description?: string | null;
	};
};

export type GtmEvent = {
	action: string;
	category: string;
	label: string;
	value?: any;
};
