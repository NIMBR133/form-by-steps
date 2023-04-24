import { Dispatch, FC, SetStateAction, useState } from "react";

import { api, Company } from "@/api";
import { SelectSearchControl } from "@/components/UI/Select";

import { configFields } from "../../../../configs";
import { Styles } from "./FormOOO.style";

const { OptionStyled, NameOrg, InnOrg, OptionWrap } = Styles;

interface Props {
  setCurrentCompany: Dispatch<SetStateAction<Company | undefined>>;
}

export const SearchByINN: FC<Props> = ({ setCurrentCompany }) => {
  const [companyList, setCompanyList] = useState<Company[]>([]);

  const onChangeINN = (value: { value: string; key: string }) => {
    setCurrentCompany(
      companyList.find((company) => company.data.hid === value.key)
    );
  };

  const onSearchOrganizations = async (value: string) => {
    const response = await api.searchByINN(value);
    setCompanyList(response.data.suggestions);
  };

  return (
    <SelectSearchControl
      name="OOO.inn"
      placeholder="xxxxxxxxxx"
      label="ИНН*"
      required={configFields.required}
      labelInValue
      onChange={onChangeINN}
      onSearch={onSearchOrganizations}
    >
      {companyList.map((org) => (
        <OptionStyled
          key={org.data.hid}
          value={{ value: org.data.inn, key: org.data.hid }}
        >
          <OptionWrap>
            <NameOrg>{org.value}</NameOrg>
            <InnOrg>ИНН: {org.data.inn}</InnOrg>
          </OptionWrap>
        </OptionStyled>
      ))}
    </SelectSearchControl>
  );
};
