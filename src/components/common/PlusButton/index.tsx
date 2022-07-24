import { HiPlus } from "react-icons/hi";
import styled from "styled-components";

interface PlusButtonProps {
  onClick: () => void;
}

const PlusButton = ({ onClick }: PlusButtonProps) => {
  return (
    <CircleButton onClick={onClick} type="button">
      <HiPlus />
    </CircleButton>
  );
};

export default PlusButton;

const CircleButton = styled.button`
  background-color: #000;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 3;
  svg {
    font-size: 2rem;
    color: #fff;
  }
`;
