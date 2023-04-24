import { FC, useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ReactComponent as IconStep_2 } from "@/assets/icons/step_2.svg";
import { FieldController } from "@/components/FieldController/FieldController";
import { Select } from "@/components/UI/Select";
import { useAppDispatch, useAppSelector } from "@/store";
import { FormDataStep_2 } from "@/store/forms/forms-interface";
import { nextStep_3, prevStep, selectForms } from "@/store/forms/forms-slice";

import { FormLayout } from "../../../FormLayout";
import { configFields } from "../../configs";
import { ownershipForms, ownershipFormValues } from "../../configs";
import { FormIP } from "./cases/FormIP";
import { FormOOO } from "./cases/FormOOO";
import { Styles } from "./FormStep_2.style";

const { Fields } = Styles;

export const FormStep_2: FC = () => {
  const { step_2: initialData } = useAppSelector(selectForms);
  const dispatch = useAppDispatch();

  const methods = useForm<FormDataStep_2>({
    defaultValues: initialData || undefined,
  });

  const ownershipForm = methods.watch("ownershipForm");

  useEffect(() => {
    methods.clearErrors();
  }, [ownershipForm]);

  const onNextStep = (data: FormDataStep_2) => {
    const prepareData: FormDataStep_2 =
      data.ownershipForm === ownershipFormValues.IP
        ? {
            ownershipForm: data.ownershipForm,
            IP: data.IP,
            OOO: null,
          }
        : {
            ownershipForm: data.ownershipForm,
            IP: null,
            OOO: data.OOO,
          };

    dispatch(nextStep_3(prepareData));
  };

  const onPrevStep = () => {
    dispatch(prevStep());
  };
  console.log(222);
  const ownershipFormResolver = () =>
    useMemo(() => {
      switch (ownershipForm) {
        case ownershipFormValues.IP: {
          return <FormIP />;
        }

        case ownershipFormValues.OOO: {
          return <FormOOO />;
        }

        default:
          return null;
      }
    }, [ownershipForm]);

  return (
    <FormLayout
      icon={<IconStep_2 />}
      title="Форма собственности"
      text="Выберите форму собственности и заполните данные"
      btnPrev={{
        label: "Назад",
        onClick: onPrevStep,
      }}
      btnNext={{
        label: "Далее",
        onClick: methods.handleSubmit(onNextStep),
        disabled:
          !ownershipForm || Object.keys(methods.formState.errors).length > 0,
      }}
    >
      <Fields>
        <FormProvider {...methods}>
          <FieldController
            name="ownershipForm"
            required={configFields.required}
            render={({ value, onChange, error }) => (
              <Select
                value={value}
                placeholder="Выбрать"
                label="Вид деятельности*"
                items={ownershipForms}
                error={error}
                onChange={onChange}
              />
            )}
          />

          {ownershipFormResolver()}
        </FormProvider>
      </Fields>
    </FormLayout>
  );
};
