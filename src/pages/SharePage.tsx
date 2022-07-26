import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { shareLinkParam } from "../constants/shareLink";
import styled from "styled-components";

const SharePage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const linkUrl = params.get(shareLinkParam);
  useEffect(() => {
    if (linkUrl !== null) {
      window.location.replace(linkUrl);
    }
  }, []);

  return linkUrl ? null : (
    <Wrapper>
      <p>존재하지 않은 링크입니다.</p>
    </Wrapper>
  );
};

export default SharePage;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
