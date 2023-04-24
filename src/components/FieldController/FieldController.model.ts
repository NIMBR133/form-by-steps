import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
} from "react-hook-form";

interface Pattern {
  value: RegExp;
  message: string;
}

interface MinLength {
  value: number;
  message: string;
}

export interface FieldControllerProps {
  name: string;
  pattern?: Pattern;
  required?: boolean | string;
  minLength?: MinLength;
  validate?: (value: string) => string | boolean;
  render: ({
    value,
    onChange,
    error,
  }: ControllerRenderProps<FieldValues, string> & {
    error?: FieldError;
  }) => JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeField?: (value: any) => void;
}
