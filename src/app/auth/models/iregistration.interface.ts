import { Country } from "./country.enum";
import { Domain } from "./domain.enum";
import { Language } from "./language.enum";
import { UserType } from "./user-type.enum";

export interface IRegistration {
  username: string; // input-text
  password: string; // input-text
  repassword: string; // input-text
  notes: string; // input-textarea
  docs: File[]; // input-files
  country: Country // single-select
  activeFrom: string; // input-date
  expiredAt: string; // input-date
  email: string; // input-text
  phone: number; // input-number
  type: UserType; // checklist-single
  domains: Domain[]; // multi-select
  languages: Language[] // checklist-multi
  accept: boolean;  // input-checkbox
}