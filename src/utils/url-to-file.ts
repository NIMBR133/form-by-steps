import { InputFile } from "@/components/UI/Input";

export const urlToFile = async ({
  file: url,
  name,
  type: mimeType,
}: InputFile) => {
  const res = await fetch(url);
  const buf = await res.arrayBuffer();

  return new File([buf], name, { type: mimeType });
};
