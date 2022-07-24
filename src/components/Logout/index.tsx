import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../common/styles/IconButton.styles";
import { removeUserId } from "../../utils/auth";

const Logout = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    removeUserId();
    navigate("/");
  };

  return (
    <IconButton onClick={onLogout}>
      <BiLogOut />
    </IconButton>
  );
};

export default Logout;
