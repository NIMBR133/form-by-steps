import clsx from "clsx";
import { FC } from "react";

import { ReactComponent as IconCheckMark } from "@/assets/icons/check-mark.svg";
import { useAppSelector } from "@/store";
import {
  selectCurrentStep,
  selectIsSubmitted,
} from "@/store/forms/forms-slice";

import { configSteps, TStep } from "./NavSteps.model";
import { Styles } from "./NavSteps.style";

const { Wrapper, Steps, Step, StepNumber, StepText } = Styles;

export const NavSteps: FC = () => {
  const currentStep = useAppSelector(selectCurrentStep);
  const isSubmitted = useAppSelector(selectIsSubmitted);

  const currentActiveId = configSteps.find((step) => step.value === currentStep)
    ?.id as number;

  const addClass = (step: TStep) => {
    return `${clsx({
      active: step.value === currentStep,
      completed: step.id < currentActiveId || isSubmitted,
    })}`;
  };

  return (
    <Wrapper>
      <Steps>
        {configSteps.map((step) => (
          <Step key={step.id}>
            <StepNumber className={addClass(step)}>{step.id}</StepNumber>
            <StepText className={addClass(step)}>{step.label}</StepText>
            {(step.id < currentActiveId || isSubmitted) && <IconCheckMark />}
          </Step>
        ))}
      </Steps>
    </Wrapper>
  );
};
