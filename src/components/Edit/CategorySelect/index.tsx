import { useToggle } from "../../../hooks/useToggle";
import ComboBox from "../../common/ComboBox";
import styled from "styled-components";
import { useSelectCategory } from "./useSelectCategory";
import { useFetchCategories } from "../../../hooks/useFetchCategories";

const Wrapper = styled.div`
  margin: 2rem 0 3rem;
  align-self: flex-start;
`;

const CategorySelect = () => {
  const [open, onToggle, onClose] = useToggle(false);
  const { data } = useFetchCategories();
  const { category, onSelect } = useSelectCategory();
  return (
    <Wrapper>
      <ComboBox
        open={open}
        onToggle={onToggle}
        options={data?.categories}
        selected={category}
        label="카테고리 선택"
        onSelect={onSelect}
        onClose={onClose}
      />
    </Wrapper>
  );
};

export default CategorySelect;
