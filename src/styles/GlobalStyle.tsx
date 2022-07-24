import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.color.bodyBgColor};
        color: ${({ theme }) => theme.color.textColor};
        transition: all 0.3s ease-in-out;
    }
    @media ${({ theme }) => theme.device.tablet} {
        html {
            font-size: 15px;
        }
    }
    @media ${({ theme }) => theme.device.mobile}, (max-height: 600px) {
        html {
            font-size: 13px;
        }
    }
    @media ${({ theme }) => theme.device.smallMobile}, (max-height: 300px) {
        html {
            font-size: 10px;
        }
    }
`;
