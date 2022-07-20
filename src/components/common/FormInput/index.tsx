import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useToggle } from '../../../hooks/useToggle';
import { Label, Input, InputWrapper } from './FormInput.styles';

interface FormInputProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  password: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  password,
}: FormInputProps) => {
  const [show, changeShow] = useToggle(false);
  return (
    <Label>
      {label && <p>{label}</p>}
      <InputWrapper>
        <Input
          type={password ? (show ? 'text' : 'password') : 'text'}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
        {password &&
          (show ? (
            <AiOutlineEyeInvisible onClick={changeShow} />
          ) : (
            <AiOutlineEye onClick={changeShow} />
          ))}
      </InputWrapper>
    </Label>
  );
};

export default FormInput;
