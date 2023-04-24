import { message, Upload } from "antd";
import { DraggerProps, RcFile } from "antd/es/upload";
import { FC, useEffect, useState } from "react";
import { FieldError } from "react-hook-form";

import { ReactComponent as IconCheckMark } from "@/assets/icons/check-mark.svg";
import { ReactComponent as IconCross } from "@/assets/icons/cross.svg";
import { ReactComponent as IconUpload } from "@/assets/icons/upload.svg";
import { urlToFile } from "@/utils/url-to-file";
const { Dragger } = Upload;

import { Error } from "../Error";
import { Label } from "../Label";
import { Styles } from "./Input.style";

const {
  InputWrapper,
  InputFileStyled,
  IconUploadStyled,
  FileUpload,
  FileName,
} = Styles;

const maxSize = 10 * 1024 * 512;

export interface InputFile {
  lastModifiedDate: string;
  name: string;
  file: string;
  type: string;
}

interface Props {
  width?: string | number;
  label?: string;
  error?: FieldError;
  file?: InputFile;
  placeholder?: string;
  onChange?: (value: InputFile | null) => void;
}

export const InputFile: FC<Props> = ({
  label,
  width,
  error,
  file,
  placeholder,
  onChange,
}) => {
  const [parsedFile, setParsedFile] = useState<File>();
  const [isFileDelete, setIsFileDelete] = useState(false);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (!file) return;

    urlToFile(file).then((file) => {
      setParsedFile(file);
      setFileName(file.name);
    });
  }, [file]);

  const props: DraggerProps = {
    name: "file",
    multiple: true,
    showUploadList: false,

    beforeUpload: (file) => {
      if (file.size > maxSize) {
        message.error({ content: "Ошибка загрузки. Файл больше 5 мб" });
        return false;
      }

      setIsFileDelete(false);
      setFileName(file.name);
      const reader = new FileReader();

      reader.onloadend = () => {
        onChange &&
          onChange({
            name: file.name,
            type: file.type,
            file: String(reader.result),
            lastModifiedDate: String(file.lastModifiedDate),
          });
      };
      reader.readAsDataURL(file);
      return false;
    },
    defaultFileList: file && [
      {
        uid: "1",
        name: file.name,
        originFileObj: parsedFile as RcFile,
      },
    ],
    maxCount: 1,
    fileList: isFileDelete ? [] : undefined,
  };

  const onRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFileDelete(true);
    setFileName("");
    onChange && onChange(null);
  };

  return (
    <InputWrapper $width={width}>
      <Label label={label} />
      {((file && parsedFile) || !file) && (
        <InputFileStyled className={error ? "error" : ""}>
          <Dragger {...props}>
            {placeholder && !fileName ? (
              <>
                {placeholder}
                <IconUploadStyled>
                  <IconUpload />
                </IconUploadStyled>
              </>
            ) : (
              <FileUpload>
                <IconCheckMark />
                <FileName>{fileName}</FileName>
                <IconCross onClick={onRemoveFile} />
              </FileUpload>
            )}
          </Dragger>
        </InputFileStyled>
      )}

      <Error error={error} />
    </InputWrapper>
  );
};
