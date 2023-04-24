import { STEPS, TSteps } from "@/store/forms/forms-interface";

export interface TStep {
  id: number;
  label: string;
  value: TSteps;
}

export const configSteps: TStep[] = [
  { id: 1, label: "Общие", value: STEPS.step_1 },
  { id: 2, label: "Форма собственности", value: STEPS.step_2 },
  { id: 3, label: "Адрес регистрации", value: STEPS.step_3 },
  { id: 4, label: "Адрес проживания", value: STEPS.step_4 },
  { id: 5, label: "Социальные сети", value: STEPS.step_5 },
];
