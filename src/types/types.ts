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
  focus?: boolean;
}

export interface ITheme {
  colors: {
    white: string;
    white90: string;
    white80: string;
    white78: string;
    white55: string;
    white38: string;
    white15: string;
    darkBlue: string;
    darkBlue20: string;
    orange: string;
    orange55: string;
    orange6: string;
    yellow: string;
    yellow55: string;
    red: string;
  };

  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };

  fontSizes: {
    small: string;
    medium18: string;
    medium20: string;
    medium24: string;
    medium22: string;
    medium26: string;
    large48: string;
    large50: string;
  };

  fontWeight: {
    semiBold: string;
    medium: string;
    light: string;
  };

  transition: {
    middleAll: string;
  };
}