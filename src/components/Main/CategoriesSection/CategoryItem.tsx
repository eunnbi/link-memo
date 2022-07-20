import styled from "styled-components";

interface CategoryItemProps {
  categoryName: string;
  memoCnt: number;
}

const CategoryItem = ({ categoryName, memoCnt }: CategoryItemProps) => {
  return (
    <Item>
      <div>
        <h3>{categoryName}</h3>
      </div>
      <div>
        <p>🔗️ {memoCnt}</p>
      </div>
    </Item>
  );
};

export default CategoryItem;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 1.5rem 2rem;
  font-weight: normal;
`;
