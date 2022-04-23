import { Segment } from '../lib/segment/index.types';

type Gtag = (track?: string, arg1?: any, arg2?: any) => void;

declare global {
	interface Window {
		gtag: Gtag;
		analytics: Segment;
	}
}

export {};
