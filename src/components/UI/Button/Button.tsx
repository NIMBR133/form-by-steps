import { clsx } from "clsx";
import { FC } from "react";

import { Props, ViewButton } from "./Button.model";
import { Styles } from "./Button.style";

const { StyledButton } = Styles;

export const Button: FC<Props> = ({
  children,
  className,
  width,
  view = ViewButton.PRIMARY,
  onClick,
  ...restProps
}) => {
  const onClickButton = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <StyledButton
      {...restProps}
      $width={width}
      onClick={onClickButton}
      className={clsx(className, {
        [`${view}`]: view,
      })}
    >
      {children}
    </StyledButton>
  );
};
