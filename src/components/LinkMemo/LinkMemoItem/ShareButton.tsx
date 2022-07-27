import { IoMdShare } from "react-icons/io";
import { useModal } from "../../../hooks/useModal";
import { LinkMemoShare } from "../../../types/linkMemo";
import ShareModal from "../ShareModal";

interface ShareButtonProps {
  linkMemo: LinkMemoShare;
}

const ShareButton = ({ linkMemo }: ShareButtonProps) => {
  const { openModal } = useModal();
  const clickShareButton = () => {
    const agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("chrome") !== -1) {
      openModal(ShareModal, { linkMemo });
      return;
    }
    if (agent.indexOf("safari") !== -1) {
      navigator.share({
        url: linkMemo.linkUrl,
      });
      return;
    }
    openModal(ShareModal, { linkMemo });
  };
  return <IoMdShare onClick={clickShareButton} />;
};

export default ShareButton;
