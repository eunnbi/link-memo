import { useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import styled from "styled-components";
import { useDebouncePostLike } from "./useDebouncePostLike";

interface LikeButtonProps {
  initialLike: boolean;
  memoId: number;
}

const LikeButton = ({ initialLike, memoId }: LikeButtonProps) => {
  const [like, setLike] = useState(initialLike);
  const onLike = () => setLike(!like);

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
  svg {
    color: #d84545;
  }
`;
