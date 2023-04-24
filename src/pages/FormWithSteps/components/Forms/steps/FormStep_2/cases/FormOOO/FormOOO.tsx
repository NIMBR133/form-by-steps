import { FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import { Company } from "@/api/interfaces";
import { FieldController } from "@/components/FieldController";
import { DatePicker } from "@/components/UI/DatePicker";
import { Input, InputFile, InputNumber } from "@/components/UI/Input";

import { configFields } from "../../../../configs";
import { Styles } from "./FormOOO.style";
import { SearchByINN } from "./SearchByINN";

const { Wrapper, WidthTwoCol, WidthThreeCol } = Styles;

export const FormOOO: FC = () => {
  const [currentCompany, setCurrentCompany] = useState<Company>();

  const { setValue } = useFormContext();
  console.log(currentCompany);
  useEffect(() => {
    if (!currentCompany) return;

    console.log(231);

    setValue("OOO.fullName", currentCompany.data.name.full);
    setValue("OOO.shortName", currentCompany.data.name.short);
    setValue(
      "OOO.registrationDay",
      new Date(currentCompany.data.state.registration_date).toString()
    );
    setValue("OOO.ogrn", currentCompany.data.ogrn);
  }, [currentCompany]);

  return (
    <>
      <Wrapper>
        <WidthThreeCol>
          <FieldController
            name="OOO.fullName"
            render={({ value, onChange, error }) => (
              <Input
                disabled
                value={value}
                label="Наименование полное*"
                placeholder="ООО «Московская промышленная компания»"
                onChange={onChange}
                error={error}
              />
            )}
          />
        </WidthThreeCol>

        <FieldController
          name="OOO.shortName"
          render={({ value, onChange, error }) => (
            <Input
              disabled
              value={value}
              label="Сокращение*"
              placeholder="ООО «МПК»"
              onChange={onChange}
              error={error}
            />
          )}
        />

        <FieldController
          name="OOO.registrationDay"
          render={({ value, onChange, error }) => (
            <DatePicker
              disabled
              value={value}
              label="Дата регистрации*"
              placeholder="01.01.2000"
              onChange={onChange}
              error={error}
            />
          )}
        />

        <SearchByINN setCurrentCompany={setCurrentCompany} />

        <WidthTwoCol>
          <FieldController
            name="OOO.skanINN"
            required={configFields.required}
            render={({ value, onChange, error }) => (
              <InputFile
                file={value}
                label="Скан ИНН*"
                placeholder="Выберите или перетащите файл"
                error={error}
                onChange={onChange}
              />
            )}
          />
        </WidthTwoCol>

        <FieldController
          name="OOO.ogrn"
          render={({ value, onChange, error }) => (
            <InputNumber
              disabled
              value={value}
              label="ОГРН*"
              placeholder="xxxxxxxxxxxxx"
              length={13}
              onChange={onChange}
              error={error}
            />
          )}
        />

        <WidthTwoCol>
          <FieldController
            name="OOO.skanOgrn"
            required={configFields.required}
            render={({ value, onChange, error }) => (
              <InputFile
                file={value}
                placeholder="Выберите или перетащите файл"
                label="Скан ОРГН*"
                error={error}
                onChange={onChange}
              />
            )}
          />
        </WidthTwoCol>
      </Wrapper>
    </>
  );
};
