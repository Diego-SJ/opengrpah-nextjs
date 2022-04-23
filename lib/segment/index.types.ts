export type Segment = {
  track: (name: string, {}: Object | any) => void;
  identify: (name: string, {}: Object | any) => void;
  page: (category: string, name: string, properties: {}) => void;
};

export type HiringFormProps = {
  payerClientId?: string;
  fusebillCustomer?: string;
  isBuyingForAThirdParty?: boolean;
  chosenPlan?: { productName?: string };
};

export type AuthIdentify = {
  personId: string;
  phone: string;
};

export type SegmentPayload = {
  label?: string;
  url?: string;
  color?: ElementColor;
};

export type ElementType = 'button' | 'select' | 'radio' | 'input' | 'modal' | 'autocomplete' | 'accordion';

export type ElementColor = 'rojo' | 'morado' | 'purpura' | 'amarillo' | 'gris' | 'blanco' | 'negro' | string;
