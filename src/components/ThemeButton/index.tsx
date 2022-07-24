import styled, { useTheme } from "styled-components";
import { IoMoon, IoSunny } from "react-icons/io5";
import { IconButton } from "../common/styles/IconButton.styles";

interface ThemeButtonProps {
  changeTheme: () => void;
}

const ThemeButton = ({ changeTheme }: ThemeButtonProps) => {
  const { name } = useTheme();
  return (
    <IconButton onClick={changeTheme}>
      {name === "light" ? <Sunny /> : <IoMoon />}
    </IconButton>
  );
};

export default ThemeButton;

const Sunny = styled(IoSunny)`
  color: #f29f21 !important;
`;
