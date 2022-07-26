import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    device: {
      smallMobile: string;
      mobile: string;
      tablet: string;
    };
    color: {
      bodyBgColor: string;
      bgColor: string;
      textColor: string;
      shadowColor: string;
      borderColor: string;
      red: string;
      blue: string;
      hoverColor: string;
      grayBgColor: string;
      secondBgColor: string;
      placeholderColor: string;
    };
    name: string;
  }
}
