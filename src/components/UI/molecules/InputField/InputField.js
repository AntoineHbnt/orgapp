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
  const [showPassword, setShowPassword] = useState(false)

  const handlePassword = () => {
    return showPassword ? "text" : "password"
  }

  return (
    <Wrapper>
      <Container
        disabled={disabled}
        valid={valid}
        error={error ? true : false}
        focus={focus}
      >
        <StyledInput
          type={type == "password" ? handlePassword() : type}
          placeholder={placeHolder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <Icon>
          {valid && type != "password" && <ValidateIcon />}
          {error && type != "password" && <ErrorIcon />}
          {type == "password" && <PasswordIcon/>}
        </Icon>
      </Container>
      {error && <StyledError>{error}</StyledError>}
    </Wrapper>
  );
};

export default InputField;
