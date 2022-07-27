import DropdownMenu from "../../common/DropdownMenu";
import { useModal } from "../../../hooks/useModal";
import DeleteModal from "../DeleteModal";
import { Category } from "../../../types/category";
import EditModal from "../EditModal";

interface CategoryMenuProps {
  show: boolean;
  category: Category;
  toggle: () => void;
  onClose: () => void;
}

const CategoryMenu = ({
  show,
  toggle,
  category,
  onClose,
}: CategoryMenuProps) => {
  const { openModal } = useModal();
  const clickEditMenu = () => openModal(EditModal, { category });
  const clickRemoveMenu = () =>
    openModal(DeleteModal, { categoryId: category.categoryId });
  return (
    <DropdownMenu
      show={show}
      toggle={toggle}
      onClose={onClose}
      clickEditMenu={clickEditMenu}
      clickRemoveMenu={clickRemoveMenu}
    />
  );
};

export default CategoryMenu;
