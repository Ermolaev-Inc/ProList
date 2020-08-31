export interface InputFieldProps {
  placeholder: string;
  onChange(args: any): void;
  onClick?(args: any): void;
  styles?: StylesInputField;
}

export interface StylesInputField {
  width?: string | number | undefined;
  borderColor?: string;
  borderColorFocus?: string;
  fontSize?: string;
  fontWeight?: string;
}