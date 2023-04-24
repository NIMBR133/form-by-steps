export interface Theme {
  fonts: {
    size: {
      small: string;
      default: string;
      medium: string;
      large: string;
    };
    weight: {
      light: string;
      default: string;
      medium: string;
    };
  };

  colors: {
    black: string;
    red: string;
    white: string;
    gray_100: string;
    gray_200: string;
    gray_600: string;
    gray_700: string;
    blue_100: string;
    blue_200: string;
    blue_400: string;
    blue_700: string;
  };
}
