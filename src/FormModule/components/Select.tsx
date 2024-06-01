import { Controller, useFormContext } from 'react-hook-form'
import { Autocomplete as MuiAutocomplete, TextField, TextFieldProps } from '@mui/material'

type OptionType = {
  value: string | number
  label: string
}

interface Props {
  name: string
  options: OptionType[]
  isRequired?: boolean
  defaultValue?: OptionType
}

export const Select = (props: TextFieldProps & Props) => {
  const { name, options, isRequired = false, defaultValue = null, ...textFieldProps } = props

  const { control, formState, setValue, trigger } = useFormContext()

  const { errors, isSubmitted } = formState

  const handleChange = (_: any, newValue: OptionType[]) => {
    setValue(name, newValue)
    if (isRequired && isSubmitted) {
      trigger(name)
    }
  }

  return (
    <Controller
      defaultValue={defaultValue}
      name={name}
      rules={{
        validate: value => {
          if (!isRequired) return true
          return value ? true : 'Необходимо ввести хотя бы одно значение'
        }
      }}
      render={({ field }) => {
        return (
          <MuiAutocomplete
            value={field.value}
            onChange={handleChange}
            options={options}
            getOptionLabel={option => option.label}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            filterSelectedOptions
            renderInput={params => (
              <TextField
                {...params}
                name={name}
                {...textFieldProps}
                error={!!errors[name]}
                helperText={errors[name] && String(errors[name]?.message)}
              />
            )}
          />
        )
      }}
      control={control}
    />
  )
}
