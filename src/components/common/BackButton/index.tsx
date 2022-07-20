import styled from "styled-components";
import { HiChevronLeft } from "react-icons/hi";
import { IconButton } from "../styles/IconLink.styles";

const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <ButtonWrapper>
        <IconButton type="button" onClick={onClick}>
          <HiChevronLeft />
        </IconButton>
      </ButtonWrapper>
    </>
  );
};

export default BackButton;

const ButtonWrapper = styled.div`
  align-self: flex-start;
`;
