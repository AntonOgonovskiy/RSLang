import { LockOpenRounded, LockRounded } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { createUser, signInAPI } from "../../api/api";
import styles from "./RegistrationForm.module.css";
import {
  HOURS_BEFORE_DEAUTHORIZATION,
  IDataResponce,
  IRegistrationForm,
  ISignForm,
  IUserData,
  MS_IN_HOUR,
} from "./typescript-assets";
import { emailValidation, passwordValidation } from "./validation";

const RegistrationForm: FC<IRegistrationForm> = ({ handleClosePopover }) => {
  const { handleSubmit, control } = useForm<ISignForm>();
  const { errors } = useFormState({
    control,
  });
  const [isErr, setIsErr] = useState<boolean>(false);
  const [isPopoverLogout, setIsPopoverLogout] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      const userData: IUserData = JSON.parse(user);
      const msPassed = Date.now() - Number(userData.time);

      if (msPassed > MS_IN_HOUR * HOURS_BEFORE_DEAUTHORIZATION) {
        localStorage.removeItem("user");
      } else {
        setIsPopoverLogout(true);

        setTimeout(() => {
          localStorage.removeItem("user");
        }, MS_IN_HOUR * HOURS_BEFORE_DEAUTHORIZATION - msPassed);
      }
    }
  }, []);

  const signIn: SubmitHandler<ISignForm> = async (data) => {
    // handleClosePopover();

    const response = await signInAPI(data);

    if (response.data === "error") {
      setIsErr(true);
      return;
    }
    setIsErr(false);
    setIsPopoverLogout(true);

    localStorage.setItem(
      "user",
      JSON.stringify({
        time: Date.now().toString(),
        ...(response.data as IDataResponce),
      })
    );

    setTimeout(() => {
      localStorage.removeItem("user");
    }, MS_IN_HOUR * HOURS_BEFORE_DEAUTHORIZATION);
  };

  const signUp: SubmitHandler<ISignForm> = async (data) => {
    const response = await createUser(data);
    console.log(response.data);
    await signIn(data);
  };

  const logOut = () => {
    // handleClosePopover();
    localStorage.removeItem("user");
    setIsPopoverLogout(false);
  };

  return (
    <>
      {isPopoverLogout ? (
        <div className={styles.container}>
          <div className={styles.icon__container}>
            <LockOpenRounded color="primary" fontSize="large"></LockOpenRounded>
            <Typography variant="h6">Logged</Typography>
          </div>
          {/* <div className={styles.btn__container}> */}
          <Button
            variant="contained"
            size="large"
            onClick={logOut}
            sx={{ mt: "40px" }}
          >
            Log Out
          </Button>
          {/* </div> */}
        </div>
      ) : (
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
              <Typography sx={{ textAlign: "center", color: "red" }}>
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
      )}
    </>
  );
};

export default RegistrationForm;
