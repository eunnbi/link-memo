import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { IconLink } from "../common/styles/IconLink.styles";
import Logout from "./Logout";

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0 2rem;
  h1 {
    font-family: Pangolin;
    font-size: 2.5rem;
  }
`;

const MainHeader = () => {
  return (
    <Header>
      <Logout />
      <h1>Link Memo</h1>
      <IconLink to="/search">
        <GoSearch />
      </IconLink>
    </Header>
  );
};

export default MainHeader;
