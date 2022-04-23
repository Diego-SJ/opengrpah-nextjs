export const DEFAULT_PARAMS = 'utm_source=zenda.la&utm_medium=website&utm_campaign=originFromWebsite';
const IS_LOCAL = false;
export const WEB_APP_DOMAIN =
  process.env.NODE_ENV === 'development'
    ? IS_LOCAL
      ? 'http://localhost:3000'
      : 'https://app.dev.zenda.la'
    : 'https://app.zenda.la';
export const webAppRoutes = { signin: 'inicioseguro', signup: 'registroseguro' };

export const Routes = {
  home: '/',
  plans: '/protegetusalud',
  howWorks: '/como-funciona',
  contact: '/contacto',
  contacts: '/RedApoyo',
  contactsPlans: '/RedApoyo-planes',
  covid19: '/coronavirus',
  zendala: '/teaseguramosgratis',
  terms: '/terminos-y-condiciones',
  privacy: '/privacidad',
  manifest: '/manifiesto-zendala',
  prensa: '/prensa',
  blog: '/blog',
  emergencyContacts: '/RedApoyo',
  referrals: '/referidos',
  referralsPlans: '/referidos-planes',
  signIn: `/${webAppRoutes.signin}`,
  signUp: `/${webAppRoutes.signup}`,
  signInVaccine: `/${webAppRoutes.signin}?option=vacuna`,
  signUpVaccine: `/${webAppRoutes.signup}?option=vacuna`,
  signUpCarnet: `/${webAppRoutes.signup}?option=carnet`,
  knowledge: 'https://conocimiento.zenda.la',
  coverages: '/coberturas',
};

export const SectionRoutes = {
  home: {
    id: 'porquezendala',
    url: `${Routes.home}#porquezendala`,
  },
  team: {
    id: 'equipo',
    url: `${Routes.zendala}#equipo`,
  },
  zendalaHistory: {
    id: 'historia',
    url: `${Routes.zendala}#historia`,
  },
  alliances: {
    id: 'alianzas',
    url: `${Routes.zendala}#alianzas`,
  },
  faqs: {
    id: 'faqs',
    url: `${Routes.covid19}#faqs`,
  },
  plans: {
    id: 'planes',
  },
  emergencyContacts: {
    id: 'como-funciona',
    url: `${Routes.emergencyContacts}#como-funciona`,
  },
  coverages: {
    id: 'info',
    url: `${Routes.coverages}#info`,
  },
};

export const EXTERNAL_ROUTES = {
  APP_GOOGLE_PLAY: 'https://play.google.com/store/apps/details?id=la.zenda.mobile',
  APP_APP_STORE: 'https://apps.apple.com/mx/app/zenda-la/id1600293805?l=en',
};

export const WEB_APP_ROUTES = {
  SIGN_IN: `${WEB_APP_DOMAIN}/inicioseguro`,
  SIGN_UP: `${WEB_APP_DOMAIN}/registroseguro`,
};

export const WEB_SITE_ROUTES = {
  HOME: '/',
  HOW_WORKS: '/como-funciona',
  CONTACT: '/contacto',
  PLANS: '/protegetusalud',
  ZENDALA_INSURANCE: '/seguro-zendala',
  TERMS_AND_CONDITIONS: '/terminos-y-condiciones',
  PRIVACY_NOTICE: '/privacidad',
  MANIFEST: '/manifiesto-zendala',
  PRENSA: '/prensa',
  BLOG: '/blog',
  BALANZE_LABZ: '/monitoreo',
  DR_ZENDA: '/dr-zenda',
  COVERAGES: '/coberturas',
  ABOUT_US: '/nosotros',
  BUSINESS: '/empresa',
  HELP: 'https://conocimiento.zenda.la',
  KNOWLEDGE: 'https://conocimiento.zenda.la',
  LANDINGS: { PLANS: { BASIC: '/planes/basico', ESSENTIAL: '/planes/esencial', PRO: '/planes/pro' } },
  SOCIAL: {
    WHATSAPP: 'https://wa.link/uo8uop',
    INSTAGRAM: 'https://www.instagram.com/zendalateprotege/',
    FACEBOOK: 'https://www.facebook.com/zendalateprotege',
    LINKEDIN: 'https://www.linkedin.com/company/zendala',
    TWITTER: 'https://twitter.com/MasterZenda',
  },
};
