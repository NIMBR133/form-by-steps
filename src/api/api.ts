import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { City, Company, DataSearch, House, Region, Street } from "./interfaces";

const URL_DADATA = "https://suggestions.dadata.ru/suggestions/api/4_1/rs";
const token = "48bbd13c2017c918e739791bc140058ceaad11b8";

const axiosConfig: AxiosRequestConfig = {
  baseURL: URL_DADATA,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Token " + token,
  },
};

const fetchApi = axios.create(axiosConfig);

type Response<T> = Promise<AxiosResponse<T>>;

export const api = {
  searchByINN: (value: string): Response<DataSearch<Company>> =>
    fetchApi.post("suggest/party", { query: value }),

  searchRegionsByCountry: (
    query: string,
    country?: string
  ): Response<DataSearch<Region>> =>
    fetchApi.post("suggest/address", {
      from_bound: {
        value: "region",
      },
      to_bound: {
        value: "region",
      },
      locations: [
        {
          country_iso_code: country,
        },
      ],
      query,
    }),

  searchCitiesByRegion: (
    query: string,
    regionId?: string
  ): Response<DataSearch<City>> =>
    fetchApi.post("suggest/address", {
      from_bound: {
        value: "city",
      },
      to_bound: {
        value: "city",
      },
      locations: [
        {
          region_fias_id: regionId,
        },
      ],
      query,
    }),

  searchCities: (query: string): Response<DataSearch<City>> =>
    fetchApi.post("suggest/address", {
      from_bound: {
        value: "city",
      },
      to_bound: {
        value: "city",
      },
      query,
    }),

  searchStreetsByCity: (
    query: string,
    cityId?: string
  ): Response<DataSearch<Street>> =>
    fetchApi.post("suggest/address", {
      from_bound: {
        value: "street",
      },
      to_bound: {
        value: "street",
      },
      locations: [
        {
          city_fias_id: cityId,
        },
      ],
      query,
    }),

  searchHousesByStreet: (
    query: string,
    streetId?: string
  ): Response<DataSearch<House>> =>
    fetchApi.post("suggest/address", {
      from_bound: {
        value: "house",
      },
      to_bound: {
        value: "house",
      },
      locations: [
        {
          street_fias_id: streetId,
        },
      ],
      query,
    }),
};
