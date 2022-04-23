import mixpanel from 'lib/mixpanel';
import { ElementColor, ElementType } from './index.types';

const ACTIVATE_SEGMENT = false;

export const button = {
  clicked: async (label: string, color: ElementColor) => {
    if (ACTIVATE_SEGMENT) {
      mixpanel.track('Button Clicked', { label, color });
      await window.analytics.track('Button Clicked', { label, color });
    }
  },
};

export const link = {
  clicked: async (label: string, url: string) => {
    if (ACTIVATE_SEGMENT) {
      mixpanel.track('Link Clicked', { label, url });
      await window.analytics.track('Link Clicked', { label, url });
    }
  },
};

export const element = {
  focused: async (type: ElementType, label: string) => {
    if (ACTIVATE_SEGMENT) {
      await window.analytics.track('Element Focused', { type, label });
      mixpanel.track('Element Focused', { type, label });
    }
  },
  unfocused: async (type: ElementType, label: string) => {
    if (ACTIVATE_SEGMENT) {
      await window.analytics.track('Element Unfocused', { type, label });
      mixpanel.track('Element Unfocused', { type, label });
    }
  },
  closed: async (label: string, color: ElementColor) => {
    if (ACTIVATE_SEGMENT) {
      await window.analytics.track('Element Closed', { label, color });
      mixpanel.track('Element Closed', { label, color });
    }
  },
};

export const page = (name: string, data?: {}) => {
  if (ACTIVATE_SEGMENT) {
    window?.analytics?.page(name, name, data || {});
    mixpanel.track('Page Loaded', { url: name, ...data });
  }
};

export const identify = (id: string, data?: {}) => {
  if (ACTIVATE_SEGMENT) {
    window.analytics.identify(id, data);
    mixpanel.identify(id);
  }
};

const segment = { element, link, button, page, identify };
export default segment;
