import FormInput from "../FormInput";
import {
  ModalWrapper,
  ModalBox,
  ButtonBox,
  Button,
  ModalContent,
  Box,
} from "./Modal.styles";

interface ModalProps {
  title: string;
  message?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  checkBox?: React.ReactNode;
  warningText?: string;
  isLoading?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const Modal = ({
  title,
  message,
  value,
  onChange,
  name,
  onCancel,
  onConfirm,
  placeholder,
  checkBox,
  warningText,
  isLoading,
}: ModalProps) => {
  return (
    <ModalWrapper>
      <ModalBox>
        <ModalContent>
          <h3>{title}</h3>
          {message && <p>{message}</p>}
          {checkBox && <Box>{checkBox}</Box>}
          {name && (
            <FormInput
              name={name}
              value={value}
              onChange={onChange}
              password={false}
              placeholder={placeholder}
            />
          )}
          {warningText && <p className="warning">{warningText}</p>}
        </ModalContent>
        <ButtonBox>
          <Button
            onClick={onCancel}
            IsCancel={true}
            type="button"
            disabled={isLoading ? true : false}
          >
            취소
          </Button>
          <Button onClick={onConfirm} IsCancel={false} type="button">
            확인
          </Button>
        </ButtonBox>
      </ModalBox>
    </ModalWrapper>
  );
};

export default Modal;
