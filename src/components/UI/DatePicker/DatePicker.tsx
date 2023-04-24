import type { DatePickerProps } from "antd";
import { DatePicker as DatePickerAntd } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { FC } from "react";
import { FieldError } from "react-hook-form";

import { Error } from "../Error";
import { Label } from "../Label";
import { Styles } from "./DatePicker.style";

const { DatePickerWrapper } = Styles;

const dateFormat = "DD.MM.YYYY";

type Props = Omit<DatePickerProps, "value" | "defaultValue"> & {
  value: string;
  defaultValue?: string;
  width?: string | number;
  label?: string;
  error?: FieldError;
  onChange: (value?: string) => void;
};

export const DatePicker: FC<Props> = ({
  value,
  defaultValue,
  label,
  width,
  error,
  onChange,
  ...props
}) => {
  const onChangeValue = (dateObj: Dayjs | null) => {
    onChange(dateObj?.toDate().toString());
  };

  return (
    <DatePickerWrapper $width={width}>
      <Label label={label} />

      <DatePickerAntd
        {...(props as DatePickerProps)}
        format={dateFormat}
        value={value ? dayjs(value) : undefined}
        defaultValue={defaultValue ? dayjs(defaultValue) : undefined}
        onChange={onChangeValue}
        className={error ? "error" : ""}
      />

      <Error error={error} />
    </DatePickerWrapper>
  );
};
