import { FieldValues, Path, useFormContext } from 'react-hook-form'
import { TextFieldProps } from '@mui/material'
import { memo } from 'react'
import TextField from '@mui/material/TextField'

interface EmailInputProps<T> {
  name: Path<T>
  isRequired?: boolean
}

export const EmailInput = memo(
  <T extends FieldValues>(props: TextFieldProps & EmailInputProps<T>) => {
    const { name, isRequired = false, ...otherProps } = props

    const {
      register,
      formState: { errors }
    } = useFormContext()

    return (
      <TextField
        type='email'
        {...register(name, {
          required: {
            value: !!isRequired,
            message: 'Необходимо ввести email'
          },
          pattern: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/,
            message: 'Некорректный формат'
          }
        })}
        error={!!errors[name]}
        helperText={errors[name] && String(errors[name]?.message)}
        {...otherProps}
      />
    )
  }
)
