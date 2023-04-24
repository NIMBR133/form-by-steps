import { Select } from "antd";
import { FC, useState } from "react";

import { api, City } from "@/api";
import { SelectSearchControl } from "@/components/UI/Select";

import { configFields } from "../../configs";

const { Option } = Select;

export const SearchCity: FC = () => {
  const [cities, setCities] = useState<City[]>([]);

  const onSearchByCity = async (query: string) => {
    const response = await api.searchCitiesByRegion(query);
    setCities(response.data.suggestions);
  };

  return (
    <SelectSearchControl
      name="city"
      placeholder="Санкт-Петербург"
      label="Основной город*"
      required={configFields.required}
      onSearch={onSearchByCity}
    >
      {cities.map((city) => (
        <Option key={city.data.city_fias_id} value={city.data.city_with_type}>
          {city.data.city_with_type}
        </Option>
      ))}
    </SelectSearchControl>
  );
};
