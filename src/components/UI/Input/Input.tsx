import clsx from "clsx";
import { ChangeEvent, FC, InputHTMLAttributes, useId, useRef } from "react";
import { FieldError, RefCallBack } from "react-hook-form";

import { Error } from "../Error";
import { Label } from "../Label";
import { Styles } from "./Input.style";
const {
  InputWrapper,
  InputStyled,
  InputRelative,
  Row,
  Addon,
  IconCrossStyled,
} = Styles;

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  error?: FieldError;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  addonBefore?: string;
  addonAfter?: string;
  isClear?: boolean;
  inputRef?: RefCallBack;
}

export const Input: FC<Props> = ({
  label,
  value,
  defaultValue,
  width,
  error,
  onChange,
  className,
  addonBefore,
  addonAfter,
  isClear,
  inputRef,
  ...props
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const id = useId();

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  const onClear = () => {
    onChange("");
    ref.current?.focus();
  };

  return (
    <InputWrapper $width={width} className={className}>
      <Label label={label} />

      <Row>
        {addonBefore && <Addon className="start">{addonBefore}</Addon>}

        <InputRelative>
          <InputStyled
            {...props}
            id={id}
            value={value || defaultValue || ""}
            onChange={onChangeValue}
            className={clsx({ error, clear: isClear })}
            ref={((el: HTMLInputElement) => inputRef?.(el)) && ref}
          />
          {value && isClear && <IconCrossStyled onClick={onClear} />}
        </InputRelative>

        {addonAfter && <Addon className="end">{addonAfter}</Addon>}
      </Row>

      <Error error={error} />
    </InputWrapper>
  );
};
