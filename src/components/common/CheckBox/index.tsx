import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoMdCheckboxOutline } from 'react-icons/io';
import styled from 'styled-components';

const Box = styled.div`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

interface CheckBoxProps {
  isChecked: boolean;
  label: string;
  onToggle: () => void;
}

const CheckBox = ({ isChecked, label, onToggle }: CheckBoxProps) => {
  return (
    <Box>
      {isChecked ? (
        <IoMdCheckboxOutline onClick={onToggle} />
      ) : (
        <MdCheckBoxOutlineBlank onClick={onToggle} />
      )}
      {label}
    </Box>
  );
};

export default CheckBox;
