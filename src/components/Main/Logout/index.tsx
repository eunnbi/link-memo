import { BiLogOut } from 'react-icons/bi';
import { useLogout } from './useLogout';
import { IconButton } from '../../common/styles/IconLink.styles';

const Logout = () => {
  const onLogout = useLogout();
  return (
    <IconButton onClick={onLogout}>
      <BiLogOut />
    </IconButton>
  );
};

export default Logout;
