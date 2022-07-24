import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    device: {
      smallMobile: string;
      mobile: string;
      tablet: string;
    };
    color: {
      bgColor: string;
      textColor: string;
      shadowColor: string;
    };
    name: string;
  }
}
