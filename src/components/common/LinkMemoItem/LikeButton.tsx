import { useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import styled from "styled-components";

const LikeButton = ({ initialLike }: { initialLike: boolean }) => {
  const [like, setLike] = useState(initialLike);
  const onLike = () => setLike(!like);
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
