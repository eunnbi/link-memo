import { useNavigate } from "react-router-dom";
import DropdownMenu from "../../common/DropdownMenu";
import LikeButton from "./LikeButton";
import MemoContent from "./MemoContent";
import { Item, Heading, Anchor, BottomBox } from "./styles/LinkMemoItem.styles";
import { LinkMemoResponse } from "../../../types/linkMemo";
import { getFavicon } from "../../../utils/linkMemo";
import { useToggle } from "../../../hooks/useToggle";
import { IoMdShare } from "react-icons/io";

interface LinkMemoItemProps {
  linkMemo: LinkMemoResponse;
  clickRemoveMenu: () => void;
  clickShareButton: () => void;
}

const LinkMemoItem = ({
  linkMemo,
  clickRemoveMenu,
  clickShareButton,
}: LinkMemoItemProps) => {
  const { memoId, linkName, linkUrl, content, categoryId, categoryName, like } =
    linkMemo;
  const [showMenu, onToggle, onClose] = useToggle(false);

  // edit
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

  return (
    <Item>
      <Heading>
        <div>
          <img src={getFavicon(linkUrl)} />
          <h2>{linkName}</h2>
        </div>
        <DropdownMenu
          show={showMenu}
          toggle={onToggle}
          onClose={onClose}
          clickEditMenu={clickEditMenu}
          clickRemoveMenu={clickRemoveMenu}
        />
      </Heading>
      <Anchor href={linkUrl} target="_blank" rel="noreferrer">
        {linkUrl}
      </Anchor>
      <MemoContent content={content} />
      <BottomBox>
        <LikeButton initialLike={like!} memoId={memoId!} />
        <IoMdShare onClick={clickShareButton} />
      </BottomBox>
    </Item>
  );
};

export default LinkMemoItem;
