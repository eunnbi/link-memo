import styled from "styled-components";
import CategoryList from "./CategoryList";
import AddAlert from "./AddAlert";
import { useAlert } from "../../../hooks/useAlert";
import PlusButton from "../../common/PlusButton";

const CategoriesSection = () => {
  const { show, onAlert, onClose } = useAlert();
  return (
    <>
      <Section>
        <Heading>
          <h2>
            <span>📚</span> Categories
          </h2>
        </Heading>
        <CategoryList />
      </Section>
      <PlusButton onClick={onAlert} />
      <AddAlert show={show} onClose={onClose} />
    </>
  );
};

export default CategoriesSection;

const Section = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  border-bottom: 1px solid #212121;
  padding: 1rem 0;
  h2 > span {
    font-size: 1.2rem;
    margin-right: 3px;
  }
`;
