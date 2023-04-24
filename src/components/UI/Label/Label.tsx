import { FC } from "react";

import { Styles } from "./Label.style";

const { LabelStyled } = Styles;

interface Props {
  label?: string;
  id?: string;
}

export const Label: FC<Props> = ({ label, id }) => {
  return <>{label && <LabelStyled id={id}>{label}</LabelStyled>}</>;
};
