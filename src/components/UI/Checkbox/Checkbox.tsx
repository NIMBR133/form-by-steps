import { CheckboxChangeEvent } from "antd/es/checkbox";
import { FC } from "react";

import { Styles } from "./Checkbox.style";

const { CheckboxStyled } = Styles;

interface Props {
  label?: string;
  checked: boolean;
  className?: string;
  onChange: (value: boolean) => void;
}

export const Checkbox: FC<Props> = ({
  label,
  checked,
  className,
  onChange,
}) => {
  const onChangeCheckbox = (e: CheckboxChangeEvent) => {
    const value = e.target.checked;
    onChange(value);
  };

  return (
    <CheckboxStyled
      onChange={onChangeCheckbox}
      checked={checked}
      className={className}
    >
      {label}
    </CheckboxStyled>
  );
};
