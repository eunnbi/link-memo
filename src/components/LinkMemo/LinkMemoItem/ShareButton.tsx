import { IoMdShare } from "react-icons/io";
import { useModal } from "../../../hooks/useModal";
import { LinkMemoShare } from "../../../types/linkMemo";
import ShareModal from "./ShareModal";

interface ShareButtonProps {
  linkMemo: LinkMemoShare;
}

const ShareButton = ({ linkMemo }: ShareButtonProps) => {
  const { openModal } = useModal();
  const clickShareButton = () => openModal(ShareModal, { linkMemo });
  return <IoMdShare onClick={clickShareButton} />;
};

export default ShareButton;
