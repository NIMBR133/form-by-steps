import { FC, lazy, useMemo } from "react";

import { useAppSelector } from "@/store";
import { STEPS } from "@/store/forms/forms-interface";
import { selectCurrentStep } from "@/store/forms/forms-slice";

const FormStep_1 = lazy(() => import("./steps/FormStep_1"));
const FormStep_2 = lazy(() => import("./steps/FormStep_2"));
const FormStep_3or4 = lazy(() => import("./steps/FormStep_3or4"));
const FormStep_5 = lazy(() => import("./steps/FormStep_5"));

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
