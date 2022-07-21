import styled from "styled-components";
import Logout from "./Logout";

const MainHeader = () => {
  return (
    <Header>
      <div>
        <Logout />
      </div>
      <h1>Link Memo</h1>
    </Header>
  );
};

export default MainHeader;

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1.5rem 0 2rem;
  & > div {
    position: absolute;
  }
  h1 {
    width: 100%;
    font-family: Pangolin;
    font-size: 2.5rem;
    text-align: center;
  }
`;
