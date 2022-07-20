import { useNavigate } from 'react-router-dom';
import { removeUserId } from '../../../utils/auth';

export const useLogout = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    removeUserId();
    navigate('/');
  };

  return onLogout;
};
