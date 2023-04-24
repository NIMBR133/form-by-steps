import { FC } from "react";

import { DownloadLink } from "@/components/UI/DownloadLink";
import { useAppSelector } from "@/store";
import { selectForms } from "@/store/forms/forms-slice";

import { social } from "../../configs";
import { Styles } from "./Modal.style";

const {
  ModalStyled,
  Steps,
  Step,
  Title,
  Data,
  DataItem,
  DataTitle,
  DataValue,
} = Styles;

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ isVisible, onClose }) => {
  const { step_1, step_2, step_3, step_4, step_5 } =
    useAppSelector(selectForms);

  const formatStep_5 = step_5?.map((item) => {
    const startUrl = social.find((soc) => soc.value === item.type)?.startUrl;

    return {
      ...item,
      link: `${startUrl}${item.link}`,
    };
  });

  return (
    <ModalStyled
      title="Все шаги успешно пройдены :)"
      visible={isVisible}
      onOk={onClose}
      onCancel={onClose}
    >
      <Steps>
        <Step>
          <Title>Шаг 1 - Общие</Title>
          <Data>
            <DataItem>
              <DataTitle>Фамилия:</DataTitle>
              <DataValue>{step_1?.lastName}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Имя:</DataTitle>
              <DataValue>{step_1?.firstName}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Отчество:</DataTitle>
              <DataValue>{step_1?.middleName}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Основной город:</DataTitle>
              <DataValue>{step_1?.city}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Гражданство:</DataTitle>
              <DataValue>{step_1?.citizenship}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Пол:</DataTitle>
              <DataValue>{step_1?.gender}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Дата рождения:</DataTitle>
              <DataValue>
                {step_1?.birthday &&
                  new Date(step_1.birthday).toLocaleDateString()}
              </DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Место рождения:</DataTitle>
              <DataValue>{step_1?.birthPlace}</DataValue>
            </DataItem>
          </Data>
        </Step>

        <Step>
          <Title>Шаг 2 - Форма собственности</Title>
          <Data>
            <DataItem>
              <DataTitle>Вид деятельности:</DataTitle>
              <DataValue>{step_2.ownershipForm}</DataValue>
            </DataItem>

            {step_2.IP && (
              <>
                <DataItem>
                  <DataTitle>ИНН:</DataTitle>
                  <DataValue>{step_2.IP.inn}</DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>Скан ИНН:</DataTitle>
                  <DataValue>
                    <DownloadLink
                      link={step_2.IP.skanINN.file}
                      name={step_2.IP.skanINN.name}
                    />
                  </DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>Дата регистрации:</DataTitle>
                  <DataValue>
                    {new Date(step_2.IP.registrationDay).toLocaleDateString()}
                  </DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>ОГРНИП:</DataTitle>
                  <DataValue>{step_2.IP.ogrnip}</DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>Скан ОГРНИП:</DataTitle>
                  <DataValue>
                    <DownloadLink
                      link={step_2.IP.skanOgrnip.file}
                      name={step_2.IP.skanOgrnip.name}
                    />
                  </DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>Скан договора аренды помещения:</DataTitle>
                  <DataValue>
                    <DownloadLink
                      link={step_2.IP.skanLeaseAgreement.file}
                      name={step_2.IP.skanLeaseAgreement.name}
                    />
                  </DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>Скан выписки из ЕГРИП:</DataTitle>
                  <DataValue>
                    <DownloadLink
                      link={step_2.IP.skanEgrip.file}
                      name={step_2.IP.skanEgrip.name}
                    />
                  </DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>Нет договора:</DataTitle>
                  <DataValue>{String(Boolean(step_2.IP.isContract))}</DataValue>
                </DataItem>
              </>
            )}

            {step_2.OOO && (
              <>
                <DataItem>
                  <DataTitle>Наименование полное:</DataTitle>
                  <DataValue>{step_2.OOO.fullName}</DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>Сокращение:</DataTitle>
                  <DataValue>{step_2.OOO.shortName}</DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>Дата регистрации:</DataTitle>
                  <DataValue>
                    {new Date(step_2.OOO.registrationDay).toLocaleDateString()}
                  </DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>Скан ИНН:</DataTitle>
                  <DataValue>
                    <DownloadLink
                      link={step_2.OOO.skanINN.file}
                      name={step_2.OOO.skanINN.name}
                    />
                  </DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>ОГРН:</DataTitle>
                  <DataValue>{step_2.OOO.ogrn}</DataValue>
                </DataItem>
                <DataItem>
                  <DataTitle>Скан ОГРН:</DataTitle>
                  <DataValue>
                    <DownloadLink
                      link={step_2.OOO.skanOgrn.file}
                      name={step_2.OOO.skanOgrn.name}
                    />
                  </DataValue>
                </DataItem>
              </>
            )}
          </Data>
        </Step>

        <Step>
          <Title>Шаг 3 - Адрес регистрации</Title>
          <Data>
            <DataItem>
              <DataTitle>Страна:</DataTitle>
              <DataValue>{step_3?.country}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Регион:</DataTitle>
              <DataValue>{step_3?.region}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Город:</DataTitle>
              <DataValue>{step_3?.city}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Улица:</DataTitle>
              <DataValue>{step_3?.street}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Дом:</DataTitle>
              <DataValue>{step_3?.house}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Квартира:</DataTitle>
              <DataValue>{step_3?.apartment}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Нет квартиры:</DataTitle>
              <DataValue>{String(Boolean(step_3?.isNoApartment))}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Дата прописки:</DataTitle>
              <DataValue>
                {step_3?.registrationDate &&
                  new Date(step_3.registrationDate).toLocaleDateString()}
              </DataValue>
            </DataItem>
          </Data>
        </Step>

        <Step>
          <Title>Шаг 4 - Адрес проживания</Title>
          <Data>
            <DataItem>
              <DataTitle>Страна:</DataTitle>
              <DataValue>{step_4?.country}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Регион:</DataTitle>
              <DataValue>{step_4?.region}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Город:</DataTitle>
              <DataValue>{step_4?.city}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Улица:</DataTitle>
              <DataValue>{step_4?.street}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Дом:</DataTitle>
              <DataValue>{step_4?.house}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Квартира:</DataTitle>
              <DataValue>{step_4?.apartment}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Нет квартиры:</DataTitle>
              <DataValue>{String(Boolean(step_4?.isNoApartment))}</DataValue>
            </DataItem>
            <DataItem>
              <DataTitle>Дата прописки:</DataTitle>
              <DataValue>
                {step_4?.registrationDate &&
                  new Date(step_4.registrationDate).toLocaleDateString()}
              </DataValue>
            </DataItem>
          </Data>
        </Step>

        <Step>
          <Title>Шаг 5 - Социальные сети</Title>
          <Data>
            {formatStep_5?.map((soc) => (
              <DataItem key={soc.link}>
                <DataTitle>{soc.type}:</DataTitle>
                <DataValue>{soc.link}</DataValue>
              </DataItem>
            ))}
          </Data>
        </Step>
      </Steps>
    </ModalStyled>
  );
};
