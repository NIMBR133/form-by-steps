import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Store } from "../index";
import {
  FormDataStep_1,
  FormDataStep_2,
  FormDataStep_3or4,
  FormDataStep_5,
  FormSteps,
  STEPS,
  TSteps,
} from "./forms-interface";

const initialState: FormSteps = {
  steps: {
    [STEPS.step_1]: null,
    [STEPS.step_2]: {
      ownershipForm: "",
      IP: null,
      OOO: null,
    },
    [STEPS.step_3]: null,
    [STEPS.step_4]: null,
    [STEPS.step_5]: null,
  },
  currentStep: STEPS.step_1,
  isSubmitted: false,
};

const FormsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    nextStep_2: (state, action: PayloadAction<FormDataStep_1>) => {
      state.currentStep = STEPS.step_2;
      state.steps[STEPS.step_1] = action.payload;
    },

    nextStep_3: (state, action: PayloadAction<FormDataStep_2>) => {
      state.currentStep = STEPS.step_3;
      state.steps[STEPS.step_2] = action.payload;
    },

    nextStep_4: (state, action: PayloadAction<FormDataStep_3or4>) => {
      state.currentStep = STEPS.step_4;
      state.steps[STEPS.step_3] = action.payload;
    },

    nextStep_5: (state, action: PayloadAction<FormDataStep_3or4>) => {
      state.currentStep = STEPS.step_5;
      state.steps[STEPS.step_4] = action.payload;
    },

    endForm: (state, action: PayloadAction<FormDataStep_5[]>) => {
      state.steps[STEPS.step_5] = action.payload;
      state.isSubmitted = true;
    },

    prevStep: (state) => {
      state.currentStep = Object.keys(STEPS)[
        Object.keys(STEPS).indexOf(state.currentStep) - 1
      ] as TSteps;
    },

    clearForms: (state) => {
      state.steps = initialState.steps;
      state.currentStep = initialState.currentStep;
      state.isSubmitted = initialState.isSubmitted;
    },
  },
});

export const {
  prevStep,
  nextStep_2,
  nextStep_3,
  nextStep_4,
  nextStep_5,
  endForm,
  clearForms,
} = FormsSlice.actions;

export const selectForms = (store: Store) => store.forms.steps;
export const selectCurrentForm = (store: Store) =>
  store.forms.steps[store.forms.currentStep];
export const selectCurrentStep = (store: Store) => store.forms.currentStep;
export const selectIsSubmitted = (store: Store) => store.forms.isSubmitted;

export const formsReducer = FormsSlice.reducer;
