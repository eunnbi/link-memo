import { IoMdShare } from "react-icons/io";
import { useAlert } from "../../../hooks/useAlert";
import ShareAlert from "./ShareAlert";

interface ShareButtonProps {
  linkUrl: string;
  linkName: string;
}

const ShareButton = ({ linkUrl, linkName }: ShareButtonProps) => {
  const { show, onAlert, onClose } = useAlert();
  return (
    <>
      <IoMdShare onClick={onAlert} />
      <ShareAlert
        show={show}
        linkName={linkName}
        linkUrl={linkUrl}
        onClose={onClose}
      />
    </>
  );
};

export default ShareButton;
