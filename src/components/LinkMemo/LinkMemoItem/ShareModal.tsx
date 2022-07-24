import {
  ModalWrapper,
  ModalBox,
  ModalContent,
} from "../../common/Modals/Modal.styles";
import {
  CloseButton,
  IconBox,
  Circle,
  Clipboard,
} from "./styles/ShareAlert.styles";
import { MdClose } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import facebookIcon from "../../../assets/images/facebook-icon.png";
import twitterIcon from "../../../assets/images/twitter-icon.png";
import kakaoIcon from "../../../assets/images/kakao-icon.png";
import { getFavicon } from "../../../utils/linkMemo";
import { LinkMemoShare } from "../../../types/linkMemo";

interface ShareModalProps {
  linkMemo: LinkMemoShare;
  onClose: () => void;
}
const ShareModal = ({ linkMemo, onClose }: ShareModalProps) => {
  const { linkUrl, linkName } = linkMemo;

  // 클립보드 복사
  const handleClipboard = () => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(linkUrl);
      alert("복사 완료 💜");
    } else {
      alert("⚠️ 클립보드에 접근할 수 없습니다!");
    }
  };

  const shareToFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${linkUrl}`);
  };
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${linkUrl}`);
  };
  const shareToKakao = () => {
    const link = `http://localhost:3000/share?linkUrl=${linkUrl}`;
    window.Kakao.Link.sendDefault({
      objectType: "list",
      headerTitle: "링크 공유",
      headerLink: {
        webUrl: link,
        mobileWebUrl: link,
      },
      contents: [
        {
          title: linkName,
          imageUrl: getFavicon(linkUrl),
          imageWidth: 20,
          imageHeight: 20,
          link: {
            webUrl: link,
            mobileWebUrl: link,
          },
        },
        {
          title: "",
          imageUrl: "",
          link: {
            webUrl: "",
            mobileWebUrl: "",
          },
        },
      ],
    });
  };
  return (
    <ModalWrapper>
      <ModalBox>
        <ModalContent>
          <h2>링크 공유하기</h2>
          <CloseButton onClick={onClose}>
            <MdClose />
          </CloseButton>
          <IconBox>
            <img src={kakaoIcon} alt="kakao talk logo" onClick={shareToKakao} />
            <img
              src={facebookIcon}
              alt="facebook logo"
              onClick={shareToFacebook}
            />
            <img
              src={twitterIcon}
              alt="twitter logo"
              onClick={shareToTwitter}
            />
            <Circle href={`mailto:?body=${linkUrl}`}>
              <FiMail />
            </Circle>
          </IconBox>
          <Clipboard>
            <p>{linkUrl}</p>
            <p onClick={handleClipboard}>복사</p>
          </Clipboard>
        </ModalContent>
      </ModalBox>
    </ModalWrapper>
  );
};

export default ShareModal;
