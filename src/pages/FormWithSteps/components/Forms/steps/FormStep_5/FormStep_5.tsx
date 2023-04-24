import { FC, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

import { ReactComponent as IconPlus } from "@/assets/icons/plus.svg";
import { ReactComponent as IconStep_5 } from "@/assets/icons/step_5.svg";
import { FieldController } from "@/components/FieldController";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";
import { Select } from "@/components/UI/Select";
import { useAppDispatch, useAppSelector } from "@/store";
import { FormDataStep_5 } from "@/store/forms/forms-interface";
import {
  clearForms,
  endForm,
  prevStep,
  selectForms,
  selectIsSubmitted,
} from "@/store/forms/forms-slice";

import { FormLayout } from "../../../FormLayout";
import { configFields } from "../../configs";
import { social } from "../../configs";
import { Modal } from "../Modal";
import { Styles } from "./FormStep_5.style";

const { Fields, Row, ButtonAdd } = Styles;

export const FormStep_5: FC = () => {
  const { step_5: initialData } = useAppSelector(selectForms);
  const isSubmitted = useAppSelector(selectIsSubmitted);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const methods = useForm<{ values: FormDataStep_5[] }>({
    defaultValues: {
      values: initialData || [{ type: "" }],
    },
  });
  const { fields, append } = useFieldArray({
    control: methods.control,
    name: "values",
  });

  const onPrevStep = () => {
    dispatch(prevStep());
  };

  const onNextStep = (data: { values: FormDataStep_5[] }) => {
    dispatch(endForm(data.values));
    setIsModalOpen(true);
  };

  const onChangeSelect = (index: number) => {
    setTimeout(() => methods.setFocus(`values.${index}.link`));
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onClearState = () => {
    dispatch(clearForms());
  };

  return (
    <FormLayout
      icon={<IconStep_5 />}
      title="Социальные сети"
      text="Введите свои действующие ссылки на социальные сети"
      btnPrev={{
        label: "Назад",
        onClick: onPrevStep,
      }}
      btnNext={{
        label: "Сохранить",
        onClick: methods.handleSubmit(onNextStep),
        disabled: Object.keys(methods.formState.errors).length > 0,
      }}
    >
      <FormProvider {...methods}>
        <Fields>
          {isSubmitted && (
            <Button onClick={onClearState}>
              Очистить хранилище, indexDB и вернуться к началу
            </Button>
          )}

          {fields.length > 0 &&
            fields.map((field, index) => (
              <FieldController
                key={field.id}
                name={`values.${index}.type`}
                onChangeField={() => onChangeSelect(index)}
                required={index === 0 && configFields.required}
                render={({ value: valueSelect, onChange, error }) => (
                  <Row>
                    <Select
                      value={valueSelect}
                      placeholder="Выбрать"
                      label="Сайт / приложение*"
                      items={social}
                      width={230}
                      onChange={onChange}
                      error={error}
                      className="zIndex1"
                    />
                    {valueSelect && (
                      <FieldController
                        name={`values.${index}.link`}
                        required={index === 0 && configFields.required}
                        render={({ value, onChange, error, ref }) => (
                          <Input
                            value={value}
                            placeholder="Никнейм"
                            label="Ссылка"
                            error={error}
                            className="zIndex0"
                            addonBefore={
                              social.find((item) => item.value === valueSelect)
                                ?.startUrl
                            }
                            isClear
                            onChange={onChange}
                            inputRef={ref}
                          />
                        )}
                      />
                    )}
                  </Row>
                )}
              />
            ))}
          <ButtonAdd
            type="button"
            onClick={() => {
              append({ link: "", type: "" });
            }}
          >
            <IconPlus /> Добавить социальную сеть
          </ButtonAdd>
        </Fields>
      </FormProvider>

      {isModalOpen && <Modal isVisible={isModalOpen} onClose={onCloseModal} />}
    </FormLayout>
  );
};
