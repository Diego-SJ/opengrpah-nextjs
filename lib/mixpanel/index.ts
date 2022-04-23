import mixpanelBrowser from 'mixpanel-browser';

let mixpanelAvailable = false;

if (mixpanelAvailable) mixpanelBrowser.init(process.env.MIXPANEL_TOKEN_ID);

let mixpanel = {
  identify: (id) => {
    if (mixpanelAvailable) mixpanelBrowser.identify(id);
  },
  alias: (id) => {
    if (mixpanelAvailable) mixpanelBrowser.alias(id);
  },
  track: (name, props) => {
    if (mixpanelAvailable) mixpanelBrowser.track(name, props);
  },
};

export default mixpanel;
