import { FC, useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { FieldControllerProps } from "./FieldController.model";

export const FieldController: FC<FieldControllerProps> = ({
  name,
  pattern,
  required,
  minLength,
  render,
  onChangeField,
  validate,
}) => {
  const { control, clearErrors } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required,
        pattern,
        minLength,
        validate,
      }}
      render={({ field, fieldState: { error } }) =>
        render({
          ...field,
          onChange: useCallback(
            (value: unknown) => {
              field.onChange(value);
              clearErrors(name);
              onChangeField && onChangeField(value);
            },
            [onChangeField]
          ),
          error,
        })
      }
    />
  );
};
