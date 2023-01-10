export interface IButtonProps {
  text?: boolean;
  contained?: boolean;
  outlined?: boolean;
  minWidth?: string;
  medium?: boolean;
  large?: boolean;
  color?: string;
  bgColor?: string;
  fz?: string;
  children?: React.ReactNode;
}

export interface ICardProps {
  id?: number;
  label?: string;
  rate?: string;
  description?: string;
  icon?: string;
  mxWidth?: string;
  fz?: string;
  pd?: string;
  favourite?: boolean;
  onClick?: (id: number | undefined) => void;
}

export interface IFormProps {
  placeholder?: string;
  btnTxt?: string;
  mxWidth?: string;
  iconSearch?: boolean;
}