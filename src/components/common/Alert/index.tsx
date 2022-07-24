import React from "react";
import FormInput from "../FormInput";
import {
  AlertWrapper,
  AlertBox,
  ButtonBox,
  Button,
  AlertContent,
  Box,
} from "./Alert.styles";

interface AlertProps {
  show: boolean;
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

const Alert = ({
  show,
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
}: AlertProps) => {
  return (
    <AlertWrapper show={show}>
      <AlertBox>
        <AlertContent>
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
        </AlertContent>
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
      </AlertBox>
    </AlertWrapper>
  );
};

export default Alert;
