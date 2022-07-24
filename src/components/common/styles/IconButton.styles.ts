import styled, { css } from "styled-components";

const iconButtonStyle = css`
  background-color: ${({ theme }) => theme.color.bgColor};
  backdrop-filter: blur(10px);
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 1.2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.color.textColor};
  }
`;

export const IconButton = styled.button`
  ${iconButtonStyle}
`;
