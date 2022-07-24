import styled from "styled-components";
import { Category } from "../../types/category";
import { useToggle } from "../../hooks/useToggle";
import { useNavigate } from "react-router-dom";
import { BsLink45Deg } from "react-icons/bs";
import CategoryMenu from "./CategoryMenu";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { categoryId, categoryName, memoCnt } = category;
  const [show, toggle, onClose] = useToggle(false);
  const navigate = useNavigate();
  return (
    <Item show={show}>
      <div
        onClick={() =>
          navigate(`/memo/${categoryId}`, { state: { categoryName } })
        }
      >
        <h3>{categoryName}</h3>
      </div>
      <div>
        <p>
          <BsLink45Deg /> {memoCnt}
        </p>
        <CategoryMenu
          show={show}
          toggle={toggle}
          onClose={onClose}
          category={category}
        />
      </div>
    </Item>
  );
};

export default CategoryItem;

const Item = styled.li<{ show: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 1.5rem 2rem;
  font-weight: normal;
  z-index: ${({ show }) => show && "1"};
  > div {
    display: flex;
    gap: 1rem;
    &:first-child {
      cursor: pointer;
    }
  }
`;
