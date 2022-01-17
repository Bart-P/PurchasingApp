import {Person} from "./person.model";
import {Address} from "./address.model";
import {ContactInfo} from "./contact-info.model";
import {Lang} from "./lang.model";

export interface Supplier {
  id?: string;
  companyName: string;
  companyEmail: string;
  companyLanguage: Lang;
  companyWeb?: string;
  companyPhone?: string;
  companyPersons?: Person[];
  companyAddresses?: Address[];
  companyContactInfos?: ContactInfo[];
}
