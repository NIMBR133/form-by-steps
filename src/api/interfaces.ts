export interface Company {
  data: {
    inn: number;
    ogrn: number;
    hid: string;
    name: {
      full: string;
      short: string;
    };
    state: {
      registration_date: number;
    };
  };
  value: string;
}

export interface Region {
  data: {
    fias_id: string;
  };
  value: string;
}

export interface City {
  data: {
    city_fias_id: string;
    city_with_type: string;
  };
  value: string;
}

export interface Street {
  data: {
    street_fias_id: string;
    street_with_type: string;
  };
  value: string;
}

export interface House {
  data: {
    house_fias_id: string;
    house: string;
  };
  value: string;
}

export interface DataSearch<T> {
  suggestions: T[];
}
