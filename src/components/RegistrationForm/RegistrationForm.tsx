import { LockRounded } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { createUser, signInAPI } from "../../api/api";
import styles from "./RegistrationForm.module.css";
import { emailValidation, passwordValidation } from "./validation";

interface ISignForm {
  email: string;
  password: string;
}

const RegistrationForm: FC = () => {
  const { handleSubmit, control } = useForm<ISignForm>();
  const { errors } = useFormState({
    control,
  });
  const [isErr, setIsErr] = useState<boolean>(false);

  const signIn: SubmitHandler<ISignForm> = async (data) => {
    const response = await signInAPI(data);
    console.log(response.data);
    debugger;
    response.data ? setIsErr(false) : setIsErr(true);

    localStorage.setItem("user", JSON.stringify(response.data));
  };

  const signUp: SubmitHandler<ISignForm> = async (data) => {
    const response = await createUser(data);
    console.log(response.data);
    await signIn(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon__container}>
        <LockRounded color="primary" fontSize="large"></LockRounded>
        <Typography variant="h6">Login</Typography>
      </div>

      <form onSubmit={handleSubmit(signIn)} noValidate>
        <Controller
          control={control}
          name="email"
          rules={emailValidation}
          render={({ field }) => (
            <TextField
              label="Email"
              type={"email"}
              size="small"
              margin="normal"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
            ></TextField>
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Password"
              type={"password"}
              size="small"
              margin="normal"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
            ></TextField>
          )}
        />

        {isErr ? (
          <Typography sx={{ textAlign: "center" }}>
            Invalid Email or password
          </Typography>
        ) : null}

        <div className={styles.btn__container}>
          <Button variant="outlined" onClick={handleSubmit(signUp)}>
            Sign up
          </Button>
          <Button variant="contained" type="submit">
            Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
