import {AddressType} from "./address-type.model";

export interface Address {
  id: string,
  belongsToId: string,
  addressType: AddressType,
  name1: string,
  name2?: string,
  name3?: string,
  street: string,
  streetNr: string,
  code: string,
  city: string,
  country: string
}
