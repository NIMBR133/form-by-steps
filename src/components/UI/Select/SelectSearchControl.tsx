import { Spin } from "antd";
import { debounce } from "lodash";
import { FC, useState } from "react";

import { FieldController } from "@/components/FieldController";
import { Select } from "@/components/UI/Select";

interface Props {
  name: string;
  placeholder: string;
  label: string;
  required: string | boolean;
  disabled?: boolean;
  children: React.ReactNode;
  labelInValue?: boolean;
  width?: string | number;
  onChange?: (value: { value: string; key: string }) => void;
  onSearch: (value: string) => Promise<void>;
}

export const SelectSearchControl: FC<Props> = ({
  name,
  placeholder,
  label,
  required,
  disabled,
  children,
  labelInValue,
  width,
  onChange,
  onSearch,
}) => {
  const [currentSearch, setCurrentSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeValue = (value: { value: string; key: string }) => {
    onChange && onChange(value);
    setIsLoading(false);
    setCurrentSearch("");
  };

  const onSearchSelect = debounce(async (value: string) => {
    if (!value) return;

    setIsLoading(true);
    setCurrentSearch(value);

    await onSearch(value);

    setIsLoading(false);
  }, 300);

  return (
    <FieldController
      name={name}
      required={required}
      onChangeField={onChangeValue}
      render={({ value, onChange, error, ref }) => (
        <Select
          value={value}
          placeholder={placeholder}
          label={label}
          onChange={onChange}
          error={error}
          showSearch
          disabled={disabled}
          width={width}
          filterOption={false}
          dropdownMatchSelectWidth={false}
          optionLabelProp="label"
          onSearch={onSearchSelect}
          dropdownStyle={{ maxWidth: "600px" }}
          notFoundContent={
            currentSearch &&
            (isLoading ? <Spin size="small" /> : "Нет результатов")
          }
          labelInValue={labelInValue}
          selectRef={ref}
        >
          {children}
        </Select>
      )}
    />
  );
};
