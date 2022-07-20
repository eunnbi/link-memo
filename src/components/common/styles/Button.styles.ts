import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const buttonStyle = css`
  background-color: #212121;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Button = styled.button`
  ${buttonStyle}
`;

export const LinkButton = styled(Link)`
  ${buttonStyle}
`;
