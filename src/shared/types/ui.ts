import { CSSProperties } from 'react';
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

export interface ILinkButton {
  link: string;
  text: string;
  onClick?: () => void;
}

export interface IMainButton {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  customStyles?: CSSProperties;
  icon?: React.ReactNode;
}

export interface ISecondaryButton {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string | undefined;
  text: string;
  icon?: React.ReactNode;
}

export interface IDropDown {
  title: string;
  children: React.ReactNode;
}

export interface IInfoDropdown {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  titleColorGrey?: boolean;
}

export interface IStoreImage {
  id: number;
  url: string;
}

export interface IStore {
  address: string;
  name?: string;
  time: string;
  url?: string;
  yandexLink?: string;
  repairTime?: string;
  info?: string;
  images?: IStoreImage[];
}

export interface ISpinner {
  size: 'S' | 'M';
}

export interface IMessageModal {
  title: string;
  message: string;
  isActive: boolean;
  onClose: () => void;
}

export type FormFieldError =
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined;
