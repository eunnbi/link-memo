import { Fragment } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import styled from "styled-components";
import { useToggle } from "../../../hooks/useToggle";
import { useDebouncePostLike } from "./hooks/useDebouncePostLike";

interface LikeButtonProps {
  initialLike: boolean;
  memoId: number;
}

const LikeButton = ({ initialLike, memoId }: LikeButtonProps) => {
  const [like, onLike] = useToggle(initialLike);

  useDebouncePostLike(initialLike, like, memoId);

  return (
    <Button onClick={onLike}>
      {like ? <BsSuitHeartFill /> : <BsSuitHeart />}
    </Button>
  );
};

export default LikeButton;

const Button = styled.button`
  display: flex;
  background-color: transparent;
  padding: 0 0.2rem;
  svg {
    color: #d84545;
  }
`;
