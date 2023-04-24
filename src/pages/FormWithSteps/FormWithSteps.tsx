import { FC } from "react";

import { FormResolver } from "./components/Forms";
import { NavStepsBlock } from "./components/NavStepsBlock";
import { Styles } from "./FormWithSteps.style";

const { Wrapper, WrapperContent } = Styles;

export const FormWithSteps: FC = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <NavStepsBlock />
        <FormResolver />
      </WrapperContent>
    </Wrapper>
  );
};
