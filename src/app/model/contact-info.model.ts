import {ContactType} from "./contact-type.model";

export interface ContactInfo {
  id: string,
  belongsToId: string,
  type: ContactType,
  value: string,
  description: string
}
