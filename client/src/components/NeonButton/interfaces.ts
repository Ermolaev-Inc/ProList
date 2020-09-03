export interface NeonButtonProps {
  title?: string;
  color?: string;
  fontWeight?: string | number;
  fontSize?: string;
  onClick?(args: any): void;
} 