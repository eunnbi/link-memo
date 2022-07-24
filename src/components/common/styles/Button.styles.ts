import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const buttonStyle = css`
  background-color: #101010;
  border-radius: 0.4rem;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
`;

export const Button = styled.button`
  ${buttonStyle}
`;

export const LinkButton = styled(Link)`
  ${buttonStyle}
`;
