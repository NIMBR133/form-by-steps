import clsx from "clsx";
import { FC, useState } from "react";
import { FieldError } from "react-hook-form";

import { Error } from "../Error";
import { Label } from "../Label";
import { Styles } from "./SelectingTabItem.style";

const { Wrapper, Items, Item, ItemIcon, ItemText } = Styles;

interface Props {
  width?: string | number;
  label?: string;
  items: Array<{
    icon: React.ReactNode;
    value: string;
  }>;
  defaultValue?: string;
  onChange?: (value: string) => void;
  error?: FieldError;
}

export const SelectingTabItem: FC<Props> = ({
  width,
  label,
  items,
  defaultValue,
  error,
  onChange,
}) => {
  const [active, setActive] = useState(defaultValue || "");

  const onChangeValue = (value: string) => {
    setActive(value);
    onChange && onChange(value);
  };

  return (
    <Wrapper>
      <Label label={label} />

      <Items>
        {items.map((item) => (
          <Item
            key={item.value}
            $width={width}
            onClick={() => onChangeValue(item.value)}
            className={clsx({
              active: active === item.value,
              error: error,
            })}
            tabIndex={0}
          >
            <ItemIcon>{item.icon}</ItemIcon>
            <ItemText>{item.value}</ItemText>
          </Item>
        ))}
      </Items>

      <Error error={error} />
    </Wrapper>
  );
};
