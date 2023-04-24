import { FC } from "react";

interface Props {
  link: string;
  name: string;
}

export const DownloadLink: FC<Props> = ({ link, name }) => {
  return (
    <a href={link} download={name}>
      {name}
    </a>
  );
};
