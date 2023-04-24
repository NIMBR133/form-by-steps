import { ChangeEvent, FC, InputHTMLAttributes, useId } from "react";
import { FieldError } from "react-hook-form";

import { Error } from "../Error";
import { Label } from "../Label";
import { Styles } from "./Input.style";

const { InputWrapper, InputStyledNumber } = Styles;

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  error?: FieldError;
  length?: number;
  value: string;
  onChange: (value: string) => void;
}

export const InputNumber: FC<Props> = ({
  label,
  value,
  width,
  error,
  length,
  onChange,
  ...props
}) => {
  const id = useId();

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.substring(0, length);

    const isOnlyNumber = /^[\\-]?\d*[\\.,]?\d*$/.test(value);

    if (!isOnlyNumber) return;

    onChange(value);
  };

  return (
    <InputWrapper $width={width}>
      <Label label={label} />

      <InputStyledNumber
        {...props}
        id={id}
        value={value || ""}
        onChange={onChangeValue}
        className={error ? "error" : ""}
      />

      <Error error={error} />
    </InputWrapper>
  );
};
