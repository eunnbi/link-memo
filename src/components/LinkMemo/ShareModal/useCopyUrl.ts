export const useCopyUrl = () => {
  const copyLinkUrl = (linkUrl: string) => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(linkUrl);
      alert("복사 완료 💜");
    } else {
      alert("⚠️ 클립보드에 접근할 수 없습니다!");
    }
  };
  return { copyLinkUrl };
};
