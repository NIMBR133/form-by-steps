import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { api, City, House, Region, Street } from "@/api";
import { ReactComponent as IconStep_3 } from "@/assets/icons/step_3.svg";
import { FieldController } from "@/components/FieldController";
import { DatePicker } from "@/components/UI/DatePicker";
import { InputNumber } from "@/components/UI/Input";
import { Select } from "@/components/UI/Select";
import { SelectSearchControl } from "@/components/UI/Select";
import { useAppDispatch, useAppSelector } from "@/store";
import { FormDataStep_3or4, STEPS } from "@/store/forms/forms-interface";
import { nextStep_4, nextStep_5 } from "@/store/forms/forms-slice";
import { prevStep, selectForms } from "@/store/forms/forms-slice";

import { FormLayout } from "../../../FormLayout";
import { configFields } from "../../configs";
import { countries } from "../../configs";
import { content } from "./FormStep_3or4.model";
import { Styles } from "./FormStep_3or4.style";

const { Fields, OptionStyled: Option, Group, Checkbox } = Styles;

interface Props {
  step: "step_3" | "step_4";
}

export const FormStep_3or4: FC<Props> = ({ step }) => {
  const { [step]: initialData } = useAppSelector(selectForms);
  const [regions, setRegions] = useState<Region[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [streets, setStreets] = useState<Street[]>([]);
  const [houses, setHouses] = useState<House[]>([]);
  const dispatch = useAppDispatch();

  const methods = useForm<FormDataStep_3or4>({
    defaultValues: initialData || undefined,
  });

  const formValues = methods.getValues();

  const onPrevStep = () => {
    dispatch(prevStep());
  };

  const onNextStep = (data: FormDataStep_3or4) => {
    if (step === STEPS.step_3) {
      dispatch(nextStep_4(data));
    } else if (step === STEPS.step_4) {
      dispatch(nextStep_5(data));
    }
  };

  const onChangeCountry = () => {
    methods.setValue("region", "");
    methods.setValue("city", "");
    methods.setValue("street", "");
    methods.setValue("house", "");

    setTimeout(() => methods.setFocus("region"));
  };

  const onChangeRegion = () => {
    methods.setValue("city", "");
    methods.setValue("house", "");

    setTimeout(() => methods.setFocus("city"));
  };

  const onChangeCity = () => {
    methods.setValue("street", "");
    methods.setValue("house", "");

    setTimeout(() => methods.setFocus("street"));
  };

  const onChangeStreet = () => {
    methods.setValue("house", "");

    setTimeout(() => methods.setFocus("house"));
  };

  const onSearchByRegion = async (query: string) => {
    const countryCode = countries.find(
      (c) => c.value === formValues.country
    )?.code;
    const response = await api.searchRegionsByCountry(query, countryCode);
    setRegions(
      response.data.suggestions.map((reg) => ({
        ...reg,
        value: reg.value.replaceAll("/", ""),
      }))
    );
  };

  const onSearchByCity = async (query: string) => {
    const regionId = regions.find((r) => r.value === formValues.region)?.data
      .fias_id;
    const response = await api.searchCitiesByRegion(query, regionId);
    setCities(response.data.suggestions);
  };

  const onSearchByStreet = async (query: string) => {
    const cityId = cities.find((r) => r.data.city_with_type === formValues.city)
      ?.data.city_fias_id;
    const response = await api.searchStreetsByCity(query, cityId);
    setStreets(response.data.suggestions);
  };

  const onSearchByHouse = async (query: string) => {
    const streetId = streets.find(
      (r) => r.data.street_with_type === formValues.street
    )?.data.street_fias_id;
    const response = await api.searchHousesByStreet(query, streetId);
    setHouses(response.data.suggestions);
  };

  const onClickNoApartment = (value: boolean) => {
    if (value) {
      methods.clearErrors("apartment");
      methods.setValue("apartment", "");
    }
  };

  const onChangeApartment = () => {
    methods.setValue("isNoApartment", false);
  };

  return (
    <FormLayout
      icon={<IconStep_3 />}
      title={content[step].title}
      text={content[step].label}
      btnPrev={{
        label: "Назад",
        onClick: onPrevStep,
      }}
      btnNext={{
        label: "Далее",
        onClick: methods.handleSubmit(onNextStep),
        disabled: Object.keys(methods.formState.errors).length > 0,
      }}
    >
      <Fields>
        <FormProvider {...methods}>
          <FieldController
            name="country"
            required={configFields.required}
            onChangeField={onChangeCountry}
            render={({ value, onChange, error }) => (
              <Select
                value={value}
                placeholder="Россия"
                label="Страна*"
                error={error}
                onChange={onChange}
              >
                {countries.map((country) => (
                  <Option key={country.value} value={country.value}>
                    {country.label}
                  </Option>
                ))}
              </Select>
            )}
          />

          <SelectSearchControl
            name="region"
            placeholder="Выберите регион"
            label="Регион*"
            required={configFields.required}
            disabled={Boolean(!formValues.country)}
            onChange={onChangeRegion}
            onSearch={onSearchByRegion}
          >
            {regions.map((region) => (
              <Option key={region.data.fias_id} value={region.value}>
                {region.value}
              </Option>
            ))}
          </SelectSearchControl>

          <SelectSearchControl
            name="city"
            placeholder="Введите населённый пункт"
            label="Город / населённый пункт*"
            required={configFields.required}
            disabled={Boolean(!formValues.region)}
            onChange={onChangeCity}
            onSearch={onSearchByCity}
          >
            {cities.map((city) => (
              <Option
                key={city.data.city_fias_id}
                value={city.data.city_with_type}
              >
                {city.data.city_with_type}
              </Option>
            ))}
          </SelectSearchControl>

          <SelectSearchControl
            name="street"
            placeholder="Введите улицу"
            label="Улица*"
            required={configFields.required}
            disabled={Boolean(!formValues.city)}
            onChange={onChangeStreet}
            onSearch={onSearchByStreet}
          >
            {streets.map((street) => (
              <Option
                key={street.data.street_fias_id}
                value={street.data.street_with_type}
              >
                {street.data.street_with_type}
              </Option>
            ))}
          </SelectSearchControl>

          <Group>
            <SelectSearchControl
              name="house"
              placeholder="0"
              label="Дом*"
              required={configFields.required}
              disabled={Boolean(!formValues.street)}
              width={90}
              onSearch={onSearchByHouse}
            >
              {houses.map((house) => (
                <Option key={house.data.house_fias_id} value={house.data.house}>
                  {house.data.house}
                </Option>
              ))}
            </SelectSearchControl>

            <FieldController
              name="apartment"
              required={
                formValues.isNoApartment ? false : configFields.required
              }
              onChangeField={onChangeApartment}
              render={({ value, onChange, error }) => {
                return (
                  <InputNumber
                    value={value}
                    label="Квартира*"
                    placeholder="0"
                    width={90}
                    error={error}
                    onChange={onChange}
                  />
                );
              }}
            />

            <FieldController
              name="isNoApartment"
              onChangeField={onClickNoApartment}
              render={({ value, onChange }) => (
                <Checkbox
                  label="Нет&nbsp;квартиры"
                  checked={value}
                  onChange={onChange}
                />
              )}
            />
          </Group>

          <FieldController
            name="registrationDate"
            required={configFields.required}
            render={({ value, onChange, error }) => (
              <DatePicker
                value={value}
                label="Дата прописки*"
                placeholder="дд.мм.гггг"
                onChange={onChange}
                error={error}
              />
            )}
          />
        </FormProvider>
      </Fields>
    </FormLayout>
  );
};
