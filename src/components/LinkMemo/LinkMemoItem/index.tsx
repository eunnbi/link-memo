import LikeButton from "./LikeButton";
import MemoContent from "./MemoContent";
import { Item, Heading, Anchor, BottomBox } from "./styles/LinkMemoItem.styles";
import { LinkMemoResponse } from "../../../types/linkMemo";
import { getFavicon } from "../../../utils/linkMemo";
import { useToggle } from "../../../hooks/useToggle";
import LinkMemoMenu from "./LinkMemoMenu";
import ShareButton from "./ShareButton";

interface LinkMemoItemProps {
  linkMemo: LinkMemoResponse;
}

const LinkMemoItem = ({ linkMemo }: LinkMemoItemProps) => {
  const { memoId, linkName, linkUrl, content, like } = linkMemo;
  const [showMenu, onToggle, onClose] = useToggle(false);

  return (
    <Item>
      <Heading>
        <div>
          <img src={getFavicon(linkUrl)} alt="website favicon" />
          <h2>{linkName}</h2>
        </div>
        <LinkMemoMenu
          show={showMenu}
          toggle={onToggle}
          onClose={onClose}
          linkMemo={linkMemo}
        />
      </Heading>
      <Anchor href={linkUrl} target="_blank" rel="noreferrer">
        {linkUrl}
      </Anchor>
      <MemoContent content={content} />
      <BottomBox>
        <LikeButton initialLike={like!} memoId={memoId!} />
        <ShareButton linkMemo={{ linkUrl, linkName }} />
      </BottomBox>
    </Item>
  );
};

export default LinkMemoItem;
