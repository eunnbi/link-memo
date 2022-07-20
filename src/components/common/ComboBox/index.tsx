import { useRef } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { Category } from "../../../types/category";
import { Box, List, Item, InputBox } from "./ComboBox.styles";

interface ComboBoxProps {
  label: string;
  selected: Category;
  onToggle: () => void;
  open: boolean;
  options: Category[] | undefined;
  onSelect: (id: number, value: string) => void;
  onClose: () => void;
}

const ComboBox = ({
  label,
  selected,
  onToggle,
  open,
  options,
  onSelect,
  onClose,
}: ComboBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleSelect = (id: number, value: string) => {
    onSelect(id, value);
    onClose();
  };
  useClickOutside(ref, onClose);
  return (
    <Box ref={ref}>
      <InputBox>
        <p>{selected.categoryId === -1 ? label : selected.categoryName}</p>
        <HiChevronDown onClick={onToggle} />
      </InputBox>
      <List className={open ? "active" : ""}>
        {options?.map((option) => (
          <Item
            selected={option.categoryId === selected.categoryId ? true : false}
            key={option.categoryId}
            onClick={() => handleSelect(option.categoryId, option.categoryName)}
          >
            {option.categoryName}
          </Item>
        ))}
      </List>
    </Box>
  );
};

export default ComboBox;
