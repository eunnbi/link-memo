import { useNavigate } from "react-router-dom";
import DropdownMenu from "../../common/DropdownMenu";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import MemoContent from "./MemoContent";
import { Item, Heading, Anchor, BottomBox } from "./styles/LinkMemoItem.styles";
import { LinkMemoResponse } from "../../../types/linkMemo";
import { getFavicon } from "../../../utils/linkMemo";
import { useToggle } from "../../../hooks/useToggle";

interface LinkMemoItemProps {
  linkMemo: LinkMemoResponse;
  clickRemoveMenu: () => void;
}

const LinkMemoItem = ({ linkMemo, clickRemoveMenu }: LinkMemoItemProps) => {
  const {
    linkMemoId,
    linkName,
    linkUrl,
    content,
    categoryId,
    categoryName,
    like,
  } = linkMemo;
  const [showMenu, onToggle, onClose] = useToggle(false);

  // edit
  const navigate = useNavigate();
  const clickEditMenu = () => {
    navigate(`/edit/${linkMemoId}`, {
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
        <LikeButton initialLike={like} />
        <ShareButton linkUrl={linkUrl} linkName={linkName} />
      </BottomBox>
    </Item>
  );
};

export default LinkMemoItem;
