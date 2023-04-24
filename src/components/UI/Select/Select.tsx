import { Select as SelectAntd, SelectProps } from "antd";
import clsx from "clsx";
import { FC } from "react";
import { FieldError, RefCallBack } from "react-hook-form";

import { Error } from "../Error";
import { Label } from "../Label";
import { Styles } from "./Select.style";

const { SelectWrapper } = Styles;

interface Props extends SelectProps {
  width?: string | number;
  label?: string;
  items?: Array<{
    value: string;
    label: string;
  }>;
  children?: React.ReactNode;
  error?: FieldError;
  className?: string;
  onChange: (value: string) => void;
  selectRef?: RefCallBack;
}

export const Select: FC<Props> = ({
  value,
  label,
  width,
  items,
  error,
  children,
  defaultValue,
  className,
  onChange,
  selectRef,
  ...props
}) => {
  return (
    <SelectWrapper $width={width} className={className}>
      <Label label={label} />

      {!children ? (
        <SelectAntd
          {...props}
          ref={selectRef}
          value={value || defaultValue}
          onChange={onChange}
          options={items}
          className={clsx({ error })}
        />
      ) : (
        <SelectAntd
          {...props}
          ref={selectRef}
          value={value || defaultValue}
          onChange={onChange}
          className={clsx(className, { error })}
        >
          {children}
        </SelectAntd>
      )}

      <Error error={error} />
    </SelectWrapper>
  );
};
