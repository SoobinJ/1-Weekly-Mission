import { Input, InputContainer } from "./userInputStyled";
import { Control, FieldPath, useController } from "react-hook-form";

interface EmailInputProps {
  control: Control<any>;
  name: FieldPath<any>;
}

const regexEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

const EmailInput = ({ name, control }: EmailInputProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: { value: true, message: "이메일을 입력해주세요" },
      pattern: { value: regexEmail, message: "올바른 이메일 주소가 아닙니다." },
    },
  });

  return (
    <InputContainer>
      <label htmlFor="email">이메일</label>
      <div className="inputBox">
        <Input
          aria-invalid={
            error ? "1px solid var(--red)" : "1px solid var(--gray20)"
          }
          type="text"
          id="email"
          placeholder="이메일을 입력해주세요."
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={field.name}
        />
      </div>
      {error?.type === "required" && (
        <div className="errorMsg">{error.message}</div>
      )}
      {error?.type === "pattern" && (
        <div className="errorMsg">{error.message}</div>
      )}
      {error?.type === "validate" && (
        <div className="errorMsg">{error.message}</div>
      )}
    </InputContainer>
  );
};

export default EmailInput;
