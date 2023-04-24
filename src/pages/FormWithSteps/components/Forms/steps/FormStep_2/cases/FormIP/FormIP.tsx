import { FC } from "react";

import { FieldController } from "@/components/FieldController";
import { Checkbox } from "@/components/UI/Checkbox";
import { DatePicker } from "@/components/UI/DatePicker";
import { InputFile, InputNumber } from "@/components/UI/Input";

import { configFields } from "../../../../configs";
import { Styles } from "./FormIP.style";

const { Wrapper, WidthTwoCol } = Styles;

export const FormIP: FC = () => {
  return (
    <>
      <Wrapper>
        <FieldController
          name="IP.inn"
          required={configFields.required}
          minLength={{ value: 10, message: "Не полностью введён ИНН" }}
          render={({ value, onChange, error }) => {
            return (
              <InputNumber
                value={value}
                label="ИНН*"
                placeholder="xxxxxxxxxx"
                length={10}
                error={error}
                onChange={onChange}
              />
            );
          }}
        />

        <WidthTwoCol>
          <FieldController
            name="IP.skanINN"
            required={configFields.required}
            render={({ value, onChange, error }) => (
              <InputFile
                label="Скан ИНН*"
                file={value}
                placeholder="Выберите или перетащите файл"
                error={error}
                onChange={onChange}
              />
            )}
          />
        </WidthTwoCol>

        <FieldController
          name="IP.registrationDay"
          required={configFields.required}
          render={({ value, onChange, error }) => (
            <DatePicker
              value={value}
              label="Дата регистрации*"
              placeholder="01.01.2000"
              onChange={onChange}
              error={error}
            />
          )}
        />

        <WidthTwoCol>
          <FieldController
            name="IP.ogrnip"
            required={configFields.required}
            minLength={{ value: 15, message: "Не полностью введён ОГРНИП" }}
            render={({ value, onChange, error }) => (
              <InputNumber
                value={value}
                label="ОГРНИП*"
                placeholder="xxxxxxxxxxxxxxx"
                length={15}
                error={error}
                onChange={onChange}
              />
            )}
          />
        </WidthTwoCol>

        <WidthTwoCol>
          <FieldController
            name="IP.skanOgrnip"
            required={configFields.required}
            render={({ value, onChange, error }) => (
              <InputFile
                label="Скан ОГРНИП*"
                file={value}
                placeholder="Выберите или перетащите файл"
                error={error}
                onChange={onChange}
              />
            )}
          />
        </WidthTwoCol>

        <WidthTwoCol>
          <FieldController
            name="IP.skanLeaseAgreement"
            render={({ value, onChange }) => (
              <InputFile
                placeholder="Выберите или перетащите файл"
                file={value}
                label="Скан договора аренды помещения (офиса)"
                onChange={onChange}
              />
            )}
          />
        </WidthTwoCol>

        <WidthTwoCol>
          <FieldController
            name="IP.skanEgrip"
            required={configFields.required}
            render={({ value, onChange, error }) => (
              <InputFile
                placeholder="Выберите или перетащите файл"
                file={value}
                label="Скан выписки из ЕГРИП (не старше 3 месяцев)*"
                error={error}
                onChange={onChange}
              />
            )}
          />
        </WidthTwoCol>
      </Wrapper>

      <FieldController
        name="IP.isContract"
        render={({ value, onChange }) => (
          <Checkbox label="Нет договора" checked={value} onChange={onChange} />
        )}
      />
    </>
  );
};
