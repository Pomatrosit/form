import {
  Box,
  CheckboxProps,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  Typography,
  useTheme
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { useEffect } from 'react'

interface Props {
  name: string
  label: string
  isRequired?: boolean
  defaultCheckboxValue?: boolean
}

export const Checkbox = (props: CheckboxProps & Props) => {
  const { name, isRequired = false, defaultCheckboxValue = false, ...otherProps } = props

  const { control, formState, watch, register, setValue } = useFormContext()

  const { palette } = useTheme()

  const { errors } = formState

  useEffect(() => {
    defaultCheckboxValue && setValue(name, true)
  }, [])

  return (
    <Box>
      <FormControlLabel
        control={
          <Controller
            defaultValue={defaultCheckboxValue}
            name={name}
            control={control}
            render={() => (
              <MuiCheckbox
                {...register(name, {
                  required: isRequired ? 'Это обязательное поле' : ''
                })}
                checked={watch(name) == true}
                {...otherProps}
              />
            )}
          />
        }
        label={props.label}
      />
      {errors[name] && (
        <Typography
          variant='body1'
          sx={{
            color: palette.error.main,
            fontSize: 12
          }}
        >
          {String(errors[name]?.message)}
        </Typography>
      )}
    </Box>
  )
}
