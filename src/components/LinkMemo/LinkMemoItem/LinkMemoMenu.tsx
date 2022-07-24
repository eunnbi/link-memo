import { useNavigate } from "react-router-dom";
import { useModal } from "../../../hooks/useModal";
import { LinkMemoResponse } from "../../../types/linkMemo";
import DropdownMenu from "../../common/DropdownMenu";
import DeleteModal from "./DeleteModal";

interface LinkMemoMenuProps {
  show: boolean;
  toggle: () => void;
  onClose: () => void;
  linkMemo: LinkMemoResponse;
}

const LinkMemoMenu = ({
  show,
  toggle,
  onClose,
  linkMemo,
}: LinkMemoMenuProps) => {
  const { openModal } = useModal();
  const { memoId, linkName, linkUrl, content, categoryId, categoryName } =
    linkMemo;
  const navigate = useNavigate();
  const clickEditMenu = () => {
    navigate(`/edit/${memoId}`, {
      state: {
        linkName,
        linkUrl,
        content,
        category: {
          categoryId,
          categoryName,
        },
      },
    });
  };

  const clickRemoveMenu = () => openModal(DeleteModal, { memoId });

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

export default LinkMemoMenu;
