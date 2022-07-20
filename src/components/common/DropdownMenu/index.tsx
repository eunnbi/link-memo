import { useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { Menu, List, Item } from "./DropdownMenu.styles";

interface DropdownMenuProps {
  show: boolean;
  toggle: () => void;
  onClose: () => void;
  clickEditMenu: () => void;
  clickRemoveMenu: () => void;
}

const DropdownMenu = ({
  show,
  toggle,
  onClose,
  clickEditMenu,
  clickRemoveMenu,
}: DropdownMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClose);
  return (
    <Menu ref={ref}>
      <BsThreeDotsVertical onClick={toggle} />
      <List show={show}>
        {clickEditMenu && <Item onClick={clickEditMenu}>수정하기</Item>}
        {clickRemoveMenu && <Item onClick={clickRemoveMenu}>삭제하기</Item>}
      </List>
    </Menu>
  );
};

export default DropdownMenu;
