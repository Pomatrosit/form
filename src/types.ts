import { OptionType } from "./FormModule/types";

export type FormValues = {
  title: string;
  email: string;
  password: string;
  select: OptionType | null;
  multipleSelect: OptionType[];
  checkbox: boolean;
};
