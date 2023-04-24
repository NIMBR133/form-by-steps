import { FC, useMemo } from "react";

import { useAppSelector } from "@/store";
import { STEPS } from "@/store/forms/forms-interface";
import { selectCurrentStep } from "@/store/forms/forms-slice";

import { FormStep_1, FormStep_2, FormStep_3or4, FormStep_5 } from "./steps";

export const FormResolver: FC = () => {
  const currentStep = useAppSelector(selectCurrentStep);

  const ContentResolver = useMemo(() => {
    switch (currentStep) {
      case STEPS.step_1: {
        return <FormStep_1 />;
      }
      case STEPS.step_2: {
        return <FormStep_2 />;
      }
      case STEPS.step_3: {
        return <FormStep_3or4 key="step_3" step={STEPS.step_3} />;
      }
      case STEPS.step_4: {
        return <FormStep_3or4 key="step_4" step={STEPS.step_4} />;
      }
      case STEPS.step_5: {
        return <FormStep_5 />;
      }
      default:
        return null;
    }
  }, [currentStep]);

  return <>{ContentResolver}</>;
};
