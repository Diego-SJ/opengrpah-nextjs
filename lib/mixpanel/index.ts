import mixpanelBrowser from 'mixpanel-browser';

let mixpanelAvailable = false;

if (mixpanelAvailable) mixpanelBrowser.init(process.env.MIXPANEL_TOKEN_ID || '');

let mixpanel = {
	identify: (id: string) => {
		if (mixpanelAvailable) mixpanelBrowser.identify(id);
	},
	alias: (id: string) => {
		if (mixpanelAvailable) mixpanelBrowser.alias(id);
	},
	track: (name: string, props: object) => {
		if (mixpanelAvailable) mixpanelBrowser.track(name, props);
	}
};

export default mixpanel;
