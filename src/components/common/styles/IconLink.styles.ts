import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const iconLinkStyle = css`
  background-color: rgba(255, 255, 225, 0.2);
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
  }
`;

export const IconLink = styled(Link)`
  ${iconLinkStyle}
`;

export const IconButton = styled.button`
  ${iconLinkStyle}
`;
