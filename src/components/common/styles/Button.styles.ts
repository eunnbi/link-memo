import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const buttonStyle = css`
  background-color: ${({ theme }) => theme.color.buttonColor};
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  box-shadow: ${({ theme }) => `1px 5px 10px ${theme.color.shadowColor}`};
  text-align: center;
`;

export const Button = styled.button`
  ${buttonStyle}
`;

export const LinkButton = styled(Link)`
  ${buttonStyle}
`;
