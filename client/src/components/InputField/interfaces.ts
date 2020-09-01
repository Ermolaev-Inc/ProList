export interface InputFieldProps {
  placeholder?: string;
  onChange(args: any): void;
  onClick?(args: any): void;
  styles?: StylesInputField;
  className?: string;
  value?: string | number;
}

export interface StylesInputField {
  width: string | number | undefined;
  color: string;
  borderColor: string;
  borderColorFocus: string;
  fontSize: string;
  fontWeight: string;
  backgroundColor?: string;
}