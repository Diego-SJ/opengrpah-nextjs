import { darkTheme } from '@theme/theme';

export const countryToFlag = ({ isoCode }) => {
	return typeof String.fromCodePoint !== 'undefined'
		? isoCode
				.toUpperCase()
				.replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
		: isoCode;
};

export const onlyNumbers = (value) => {
	if (!isNaN(value)) {
		return value ? value : '';
	}
	return '';
};

export const getPlanColor = (index) => {
	switch (index) {
		case '5ec468a3af6a841bbca808ac':
			return darkTheme.root1;
		case '5ec468a3af6a841bbca808ad':
			return darkTheme.root2;
		case '5ec468a3af6a841bbca808ae':
			return darkTheme.root3;
		case 'extra':
			return darkTheme.root4;
		default:
			return '#686e7e';
	}
};

export const getBtnType = (planId) => {
	switch (planId) {
		case '5ec468a3af6a841bbca808ac':
			return 'warning';
		case '5ec468a3af6a841bbca808ad':
			return 'primary';
		case '5ec468a3af6a841bbca808ae':
			return 'secondary';
		case 'extra':
			return darkTheme.root4;
		default:
			return '#686e7e';
	}
};

export const getButtonColor = ({ color = null, disabled = false }) => {
	switch (color) {
		case '5ec468a3af6a841bbca808ac':
			return disabled ? darkTheme.root1Dark : darkTheme.root1;
		case '5ec468a3af6a841bbca808ad':
			return disabled ? darkTheme.root2Dark : darkTheme.root2;
		case '5ec468a3af6a841bbca808ae':
			return disabled ? darkTheme.root3Dark : darkTheme.root3;
		case 'primary':
			return disabled ? darkTheme.root1Dark : darkTheme.root1;
		case 'secondary':
			return disabled ? darkTheme.root2Dark : darkTheme.root2;
		case 'tertiary':
			return disabled ? darkTheme.root3Dark : darkTheme.root3;
		case 'extra':
			return disabled ? darkTheme.root4Dark : darkTheme.root4;
		default:
			return disabled ? darkTheme.root2Dark : darkTheme.root2;
	}
};

export const str2Num = (nStr) => {
	nStr += '';
	var x = nStr.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? `.${x[1]}` : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1,$2');
	}
	return `$${x1}${x2}`;
};

export const trimObjectValues = (payload) => {
	const trimmedPayload = {};
	Object.keys(payload).forEach((key) => {
		if (typeof payload[key] === 'string') {
			trimmedPayload[key] = payload[key].trim();
		} else {
			trimmedPayload[key] = payload[key];
		}
	});
	return trimmedPayload;
};

/**
 * Normalize and sanitize phoneNumber (with country code)
 * Example input: +525551555255
 * Example output: 5551555255
 * @param {string} phoneNumber - Number to sanitize
 * @returns {string} Sanitized phoneNumber
 */
export const sanitizePhoneNumber = (phoneNumber) => {
	// Const variable to know how many characters are valid for a phoneNumber
	const NORMALIZED_PHONE_NUMBER_LENGTH = 10;

	// If the length of the number is less than the normalized value, phoneNumber is not valid
	if (phoneNumber.length < NORMALIZED_PHONE_NUMBER_LENGTH)
		// throw new Error('Phone number length must be at least 10 characters')
		return phoneNumber;

	// If phoneNumber startsWith a + character, means that has country code
	// Or if phoneNumber has a length greater than the defined length, means that has country code (probably without + character)
	// NOTE: When we sent the full number with + character as a query string, express does not get the + character.

	// We sanitize the number keeping the last n (phoneNumberLength defined above) characters of the string
	if (phoneNumber.startsWith('+') || phoneNumber.length > NORMALIZED_PHONE_NUMBER_LENGTH)
		return phoneNumber.slice(-NORMALIZED_PHONE_NUMBER_LENGTH);

	// If the phoneNumber didn't be catched for the conditions above, the string is formed correctly
	return phoneNumber;
};

export const formatNumberAsMoney = (number, decimal = false) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: decimal ? 2 : 0
	});
	return formatter.format(number);
};

export const isMobileOrTablet = () => /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);

export const getLinkToShareArticle = ({ slug, medium, title }) => {
	let message = (title ?? 'Zendala')?.replaceAll(' ', '%20');
	let url = `https://www.zenda.la/blog/${slug}`;
	switch (medium) {
		case 'facebook':
			let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}?fb=true&quote=${message}`;
			return facebookUrl;
		case 'twitter':
			let twitterUrl = `https://twitter.com/intent/tweet?url=${url}?twtt=true&text=${message}`;
			return twitterUrl;
		case 'whatsapp':
			let apiKind = isMobileOrTablet() ? 'api' : 'web';
			let whatsappUrl = `https://${apiKind}.whatsapp.com/send?text=${message}.%20${url}?whts=true`;
			return whatsappUrl;
		case 'linkedin':
			let linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}?lkdn=true&title=${message}&summary=${message}`;
			return linkedinUrl;
		default:
			return `https://zenda.la/blog/${slug}`;
	}
};

// Gets the URL for the current environment
export const getAbsoluteURL = (path) => {
	const baseURL = process.env.NODE_ENV ? window.location.pathname : 'http://localhost:3000';
	return `${baseURL}/${path}`;
};

export const deleteInvalidProps = (props, deleteProps) => {
	let _props = { ...props };
	deleteProps.forEach((prop) => {
		if (_props.hasOwnProperty(prop)) delete _props[prop];
	});
	return _props;
};

export const purgePathname = (router) => {
	let withoutPathname = router?.asPath?.replace(router?.pathname, '');
	withoutPathname = withoutPathname.startsWith('?')
		? withoutPathname.substring(1)
		: withoutPathname;
	return withoutPathname;
};

export const sleep = (ms = 100) => new Promise((resolve) => setTimeout(() => resolve(true), ms));

export const getPathWithUtms = (path) => {
	const utms = localStorage.getItem('utms') || '';
	return `${path}${!!utms ? `?${utms}` : ''}`;
};
