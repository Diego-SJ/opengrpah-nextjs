import { GtmEvent } from './types';

export const GA_TRACKING_ID = process.env.GTM_ID;
export const GTM_CDN_SCRIPT = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
export const GTM_DATA_LAYER_SCRIPT = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${GA_TRACKING_ID}',{page_path: window.location.pathname});`;

// GOOGLE TAG MANAGER

export const GTM_SCRIPT = `
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GA_TRACKING_ID}');</script>
`;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!!window?.gtag) window.gtag('config', GA_TRACKING_ID, { page_path: url });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GtmEvent) => {
  if (!!window?.gtag) window.gtag('event', action, { event_category: category, event_label: label, value: value });
};

export const handleWebsiteExit = async (_: string) => {
  if (!!window?.gtag) {
    // await event({
    //   action: 'Evento: salida del website hacía la app web',
    //   category: 'Evento website',
    //   label: `Click en ${destiny}`,
    // });
  }
};
