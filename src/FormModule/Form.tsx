import { Autocomplete } from './components/Autocomplete'
import { Checkbox } from './components/Checkbox'
import { EitherField } from './types'
import { EmailInput } from './components/EmailInput'
import { FieldValues, useFormContext } from 'react-hook-form'
import { PasswordInput } from './components/PasswordInput'
import { ReactNode } from 'react'
import { Select } from './components/Select'
import { TextInput } from './components/TextInput'

type Options<T> = {
  onSubmit?: (value: T) => void
  action?: string
}

type FormPropsType<T> = {
  children: ReactNode
} & EitherField<Options<T>>
export function Form<T extends FieldValues>({ children, action, onSubmit }: FormPropsType<T>) {
  const { handleSubmit } = useFormContext<T>()

  const onFormSubmit = (data: T) => {
    onSubmit && onSubmit(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      action={action}
      noValidate
      style={{ height: '100%' }}
    >
      {children}
    </form>
  )
}

Form.TextInput = TextInput
Form.EmailInput = EmailInput
Form.PasswordInput = PasswordInput
Form.Select = Select
Form.Autocomplete = Autocomplete
Form.Checkbox = Checkbox
