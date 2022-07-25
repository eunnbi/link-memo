import { LinkMemoShare } from "../../../../types/linkMemo";
import { getFavicon } from "../../../../utils/linkMemo";

export const useShare = () => {
  const shareToFacebook = (linkUrl: string) => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${linkUrl}`);
  };
  const shareToTwitter = (linkUrl: string) => {
    window.open(`https://twitter.com/intent/tweet?url=${linkUrl}`);
  };
  const shareToKakao = ({ linkName, linkUrl }: LinkMemoShare) => {
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
  return { shareToFacebook, shareToTwitter, shareToKakao };
};
