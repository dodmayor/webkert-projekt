export interface Customer {
  type?: string,
  account?: AccountRef[],
  agreement?: AgreementRef[],
  characteristic?: Characteristic[],
  contactMedium: ContactMedium[],
  creditProfile?: CreditProfile[],
  engagedParty?: RelatedParty[],
  href?: string,
  id: string,
  name: string,
  paymentMethod?: PaymentMethodRef[],
  relatedParty?: RelatedParty[],
  status: 'pending' | 'accepted' | 'rejected',
  statusReason?: string,
  validFor?: TimePeriod,
}

export interface Characteristic {
  name: string,
  value: any,
  valueType: string
}

export interface ContactMedium {
  referredType?: string,
  schemaLocation?: string,
  characteristic: MediumCharacteristic,
  mediumType?: string,
  preferred?: boolean,
  validFor?: TimePeriod
}

export interface CreditProfile {
  creditProfileDate: string,
  creditRiskRating: Number,
  creditScore: Number,
  validFor: TimePeriod
}

export interface MediumCharacteristic {
  city: string,
  contactType?: '' | 'mobile' | 'fixed home' | 'fixed office',
  country?: string,
  emailAddress?: string,
  faxNumber?: string,
  phoneNumber?: string,
  postCode?: string,
  socialNetworkId?: string,
  stateOrProvince?: string,
  street1?: string,
  street2?: string
}

export interface RelatedParty {
  referredType: string,
  href: string,
  id: string,
  name: string,
  role?: string
}

export interface AccountRef {
  referredType: string,
  description: string,
  href: string,
  id: string,
  name: string
}

export interface AgreementRef {
  referredType: string,
  href: string,
  id: string,
  name: string
}

export interface PaymentMethodRef {
  referredType: string,
  href: string,
  id: string,
  name: string
}

export interface TimePeriod {
  startDateTime: string,
  endDateTime: string
}
