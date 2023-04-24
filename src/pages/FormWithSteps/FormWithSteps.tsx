import { FC } from "react";

import { FormResolver } from "./components/Forms";
import { NavStepsBlock } from "./components/NavStepsBlock";
import { Styles } from "./FormWithSteps.style";

const { Wrapper } = Styles;

export const FormWithSteps: FC = () => {
  return (
    <Wrapper>
      <NavStepsBlock />
      <FormResolver />
    </Wrapper>
  );
};
