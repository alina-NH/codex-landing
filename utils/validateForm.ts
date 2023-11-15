import type { FormErrors } from "../types/default";
import defaultContent from "../content/default.json";

const phoneRegexp = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const errors = defaultContent.formErrors as FormErrors;

export const validateName = (name: string, isRequired: boolean) => {
  if (!isRequired) return '';
  return name.length
    ? ''
    : errors.nameError.empty;
};

export const validateCompany = (company: string, isRequired: boolean) => {
  if (!isRequired) return '';
  return company.length
    ? ''
    : errors.companyError.empty;
};

export const validateEmail = (email: string, isRequired: boolean) => {
  if (isRequired && !email.length) {
    return errors.emailError.empty;
  }
  return email.match(emailRegex)
    ? ''
    : errors.emailError.invalid;
};

export const validatePhone = (phone: string, isRequired: boolean) => {
  if (isRequired && !phone.length) {
    return errors.phoneError.empty;
  }

  if (phone.length) {
    if (!phone.match(phoneRegexp)) return errors.phoneError.invalid;
    return '';
  } else return '';
};

export const validateMessage = (message: string, isRequired: boolean) => {
  if (isRequired && !message.length) return errors.messageError.empty;
  if (message.length) {
    if (message.length > 300 || message.length < 10) {
      return errors.messageError.length;
    }
    return '';
  } else return '';
};