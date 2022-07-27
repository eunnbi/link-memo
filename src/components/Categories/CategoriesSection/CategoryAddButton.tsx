import { useModal } from "../../../hooks/useModal";
import PlusButton from "../../common/PlusButton";
import AddModal from "../AddModal";

const CategoryAddButton = () => {
  const { openModal } = useModal();
  const onClick = () => {
    openModal(AddModal);
  };

  return <PlusButton onClick={onClick} />;
};

export default CategoryAddButton;
