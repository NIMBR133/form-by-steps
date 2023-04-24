import { FC } from "react";
import { FieldError } from "react-hook-form";

import { Styles } from "./Error.style";

const { ErrorStyled } = Styles;

interface Props {
  error?: FieldError;
}

export const Error: FC<Props> = ({ error }) => {
  const content = error?.message
    ? error.message
    : "Поле заполнено не корректно";

  return <>{error && <ErrorStyled>{content}</ErrorStyled>}</>;
};
