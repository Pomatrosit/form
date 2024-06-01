import { Button, Stack } from "@mui/material";
import { Form } from "../FormModule/Form";
import { FormProvider } from "../FormModule/FormProvider";
import { FormValues } from "../types";

const selectOptions = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
];

export const FormExample = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <FormProvider>
      <Form onSubmit={onSubmit}>
        <Stack spacing={1}>
          <Form.TextInput name="title" label="title" />
          <Form.EmailInput name="email" label="email" />
          <Form.PasswordInput name="password" label="password" />
          <Form.Select name="select" options={selectOptions} label="select" />
          <Form.Autocomplete
            name="multipleSelect"
            options={selectOptions}
            label="multipleSelect"
          />
          <Form.Checkbox name="checkbox" label="checkbox" />
          <Button type="submit">Submit</Button>
        </Stack>
      </Form>
    </FormProvider>
  );
};
