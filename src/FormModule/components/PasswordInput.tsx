import { FieldValues, Path, useFormContext } from "react-hook-form";
import { TextFieldProps } from "@mui/material";
import { memo, useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface PasswordInputProps<T> {
  name: Path<T>;
  isRequired?: boolean;
}

export const PasswordInput = memo(
  <T extends FieldValues>(props: TextFieldProps & PasswordInputProps<T>) => {
    const { name, isRequired = false, ...otherProps } = props;

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev);
    };

    const {
      register,
      formState: { errors },
    } = useFormContext();

    return (
      <TextField
        {...register(name, {
          required: isRequired ? "Это обязательное поле" : "",
        })}
        error={!!errors[name]}
        helperText={errors[name] && String(errors[name]?.message)}
        {...otherProps}
        type={isPasswordVisible ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }
);
