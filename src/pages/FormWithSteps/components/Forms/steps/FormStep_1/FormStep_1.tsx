import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ReactComponent as IconMan } from "@/assets/icons/man.svg";
import { ReactComponent as IconStep_1 } from "@/assets/icons/step_1.svg";
import { ReactComponent as IconWoman } from "@/assets/icons/woman.svg";
import { FieldController } from "@/components/FieldController";
import { DatePicker } from "@/components/UI/DatePicker";
import { Input } from "@/components/UI/Input";
import { Select } from "@/components/UI/Select";
import { SelectingTabItem } from "@/components/UI/SelectingTabItem";
import { useAppDispatch, useAppSelector } from "@/store";
import { FormDataStep_1 } from "@/store/forms/forms-interface";
import { nextStep_2, selectForms } from "@/store/forms/forms-slice";

import { FormLayout } from "../../../FormLayout";
import { countries } from "../../configs";
import { configFields } from "../../configs";
import { Styles } from "./FormStep_1.style";
import { SearchCity } from "./SearchCity";

const { Fields, DateAndGender, InputFullWidth } = Styles;

export const FormStep_1: FC = () => {
  const { step_1: initialData } = useAppSelector(selectForms);
  const dispatch = useAppDispatch();

  const methods = useForm<FormDataStep_1>({
    defaultValues: initialData || undefined,
  });

  const onNextStep = (data: FormDataStep_1) => {
    dispatch(nextStep_2(data));
  };

  return (
    <FormLayout
      icon={<IconStep_1 />}
      title="Общие"
      text="Введите свои персональные данные"
      btnPrev={{
        label: "Отмена",
        onClick: () => {
          alert("Пока нельзя :)");
        },
      }}
      btnNext={{
        label: "Далее",
        onClick: methods.handleSubmit(onNextStep),
        disabled: Object.keys(methods.formState.errors).length > 0,
      }}
      {...methods}
    >
      <FormProvider {...methods}>
        <Fields>
          <FieldController
            name="firstName"
            required={configFields.required}
            pattern={configFields.onlyLetters.pattern}
            render={({ value, onChange, error }) => (
              <Input
                value={value}
                label="Фамилия*"
                placeholder="Васильев"
                error={error}
                onChange={onChange}
              />
            )}
          />

          <FieldController
            name="lastName"
            required={configFields.required}
            pattern={configFields.onlyLetters.pattern}
            render={({ value, onChange, error }) => (
              <Input
                value={value}
                label="Имя*"
                placeholder="Иван"
                error={error}
                onChange={onChange}
              />
            )}
          />

          <FieldController
            name="middleName"
            required={configFields.required}
            pattern={configFields.onlyLetters.pattern}
            render={({ value, onChange, error }) => (
              <Input
                value={value}
                label="Отчество*"
                placeholder="Сергеевич"
                error={error}
                onChange={onChange}
              />
            )}
          />

          <SearchCity />

          <FieldController
            name="citizenship"
            required={configFields.required}
            render={({ value, onChange, error }) => (
              <Select
                value={value}
                placeholder="Россия"
                label="Гражданство*"
                items={countries}
                showSearch
                onChange={onChange}
                error={error}
              />
            )}
          />

          <DateAndGender>
            <FieldController
              name="gender"
              required={configFields.required}
              render={({ onChange, error }) => (
                <SelectingTabItem
                  defaultValue={initialData?.gender}
                  label="Пол*"
                  items={[
                    { icon: <IconMan />, value: "М" },
                    { icon: <IconWoman />, value: "Ж" },
                  ]}
                  error={error}
                  onChange={onChange}
                />
              )}
            />

            <FieldController
              name="birthday"
              required={configFields.required}
              render={({ value, onChange, error }) => (
                <DatePicker
                  value={value}
                  label="Дата рождения*"
                  placeholder="01.01.2000"
                  error={error}
                  onChange={onChange}
                />
              )}
            />
          </DateAndGender>

          <FieldController
            name="birthPlace"
            required={configFields.required}
            render={({ value, onChange, error }) => (
              <InputFullWidth>
                <Input
                  value={value}
                  placeholder="Введите наименование региона и населенного пункта"
                  label="Место рождения (как указано в паспорте)*"
                  error={error}
                  onChange={onChange}
                />
              </InputFullWidth>
            )}
          />
        </Fields>
      </FormProvider>
    </FormLayout>
  );
};
