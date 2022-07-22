import ComboBox from "../../common/ComboBox";
import styled from "styled-components";
import { useSelectCategory } from "./useSelectCategory";
import { useSelected } from "./useSelected";
import { useFetchCategories } from "../../../hooks/useFetchCategories";
import { useToggle } from "../../../hooks/useToggle";

const Wrapper = styled.div`
  margin: 2rem 0 3rem;
  align-self: flex-start;
`;

const CategorySelectBox = () => {
  const [open, onToggle, onClose] = useToggle(false);
  const { data } = useFetchCategories();
  const { selected } = useSelected();
  const { onSelect } = useSelectCategory();
  return (
    <Wrapper>
      <ComboBox
        open={open}
        onToggle={onToggle}
        options={data?.categories}
        selected={selected}
        label="카테고리 선택"
        onSelect={onSelect}
        onClose={onClose}
      />
    </Wrapper>
  );
};

export default CategorySelectBox;
