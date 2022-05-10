import { useEffect, useState } from "react";
import { ErrorIcon } from "../../atoms/icons/Error";
import { PasswordIcon } from "../../atoms/icons/Password";
import { ValidateIcon } from "../../atoms/icons/Validate";
import {
  Container,
  Icon,
  StyledError,
  StyledInput,
  Wrapper,
} from "./InputField.styles";

const InputField = ({
  placeHolder,
  value,
  disabled,
  valid,
  error,
  type,
  onChange,
}) => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputPasswordType, setInputPasswordType] = useState(type);

  useEffect(() => {
    console.log(showPassword);
    setInputPasswordType(showPassword ? "text" : "password")
  }, [showPassword]);

  return (
    <Wrapper>
      <Container
        disabled={disabled}
        valid={valid}
        error={error ? true : false}
        focus={focus}
      >
        <StyledInput
          type={type == "password" ? inputPasswordType : type}
          placeholder={placeHolder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <Icon onClick={() => !disabled && setShowPassword(showPassword => !showPassword)}>
          {valid && type != "password" && <ValidateIcon />}
          {error && type != "password" && <ErrorIcon />}
          {type == "password" && (
            <PasswordIcon showPassword={showPassword}/>
          )}
        </Icon>
      </Container>
      {error && <StyledError>{error}</StyledError>}
    </Wrapper>
  );
};

export default InputField;
