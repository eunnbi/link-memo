import {
  ModalWrapper,
  ModalBox,
  ModalContent,
} from "../../common/Modals/Modal.styles";
import { CloseButton, IconBox, Circle, Clipboard } from "./ShareModal.styles";
import { MdClose } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import facebookIcon from "../../../assets/images/facebook-icon.png";
import twitterIcon from "../../../assets/images/twitter-icon.png";
import kakaoIcon from "../../../assets/images/kakao-icon.png";
import { LinkMemoShare } from "../../../types/linkMemo";
import { useShare } from "./useShare";
import { useCopyUrl } from "./useCopyUrl";

interface ShareModalProps {
  linkMemo: LinkMemoShare;
  onClose: () => void;
}
const ShareModal = ({ linkMemo, onClose }: ShareModalProps) => {
  const { linkUrl, linkName } = linkMemo;
  const { shareToFacebook, shareToTwitter, shareToKakao } = useShare();
  const { copyLinkUrl } = useCopyUrl();

  return (
    <ModalWrapper>
      <ModalBox>
        <ModalContent>
          <h2>링크 공유하기</h2>
          <CloseButton onClick={onClose}>
            <MdClose />
          </CloseButton>
          <IconBox>
            <img
              src={kakaoIcon}
              alt="kakao talk logo"
              onClick={() => shareToKakao({ linkName, linkUrl })}
            />
            <img
              src={facebookIcon}
              alt="facebook logo"
              onClick={() => shareToFacebook(linkUrl)}
            />
            <img
              src={twitterIcon}
              alt="twitter logo"
              onClick={() => shareToTwitter(linkUrl)}
            />
            <Circle href={`mailto:?body=${linkUrl}`}>
              <FiMail />
            </Circle>
          </IconBox>
          <Clipboard>
            <p>{linkUrl}</p>
            <p onClick={() => copyLinkUrl(linkUrl)}>복사</p>
          </Clipboard>
        </ModalContent>
      </ModalBox>
    </ModalWrapper>
  );
};

export default ShareModal;
