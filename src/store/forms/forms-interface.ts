import { InputFile } from "@/components/UI/Input";

export const STEPS = {
  step_1: "step_1",
  step_2: "step_2",
  step_3: "step_3",
  step_4: "step_4",
  step_5: "step_5",
} as const;
export type TSteps = keyof typeof STEPS;

export interface FormSteps {
  steps: {
    [STEPS.step_1]: FormDataStep_1 | null;
    [STEPS.step_2]: {
      ownershipForm: string;
      IP: FormDataIPStep_2 | null;
      OOO: FormDataOOOStep_2 | null;
    };
    [STEPS.step_3]: FormDataStep_3or4 | null;
    [STEPS.step_4]: FormDataStep_3or4 | null;
    [STEPS.step_5]: FormDataStep_5[] | null;
  };
  currentStep: TSteps;
  isSubmitted: boolean;
}

// STEP 1

export interface FormDataStep_1 {
  firstName: string;
  lastName: string;
  middleName: string;
  city: string;
  citizenship: string;
  gender: string;
  birthday: string;
  birthPlace: string;
}

// STEP 2

export interface FormDataStep_2 {
  ownershipForm: string;
  IP: FormDataIPStep_2 | null;
  OOO: FormDataOOOStep_2 | null;
}

export interface FormDataIPStep_2 {
  inn: string;
  skanINN: InputFile;
  registrationDay: string;
  ogrnip: string;
  skanOgrnip: InputFile;
  skanLeaseAgreement: InputFile;
  skanEgrip: InputFile;
  isContract: boolean;
}

export interface FormDataOOOStep_2 {
  fullName: string;
  shortName: string;
  registrationDay: string;
  inn: string;
  skanINN: InputFile;
  ogrn: string;
  skanOgrn: InputFile;
}

// STEP 3 ant 4

export interface FormDataStep_3or4 {
  country: string;
  region: string;
  city: string;
  street: string;
  house: string;
  apartment: string;
  isNoApartment: boolean;
  registrationDate: string;
}

// STEP 5

export interface FormDataStep_5 {
  type: string;
  link: string;
}
