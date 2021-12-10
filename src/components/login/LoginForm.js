import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useIdentityContext } from "react-netlify-identity-gotrue";

const loginStyle = {
  m: "5% auto",
  width: "80%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const LoginForm = () => {
  const history = useHistory();
  const handleClose = () => history.push('/');
  const identity = useIdentityContext();

  return (
    <div>
      <h1>Login Page</h1>
      <Box sx={loginStyle}>
        <Formik
          initialValues={{
            email: "foo@example.com",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("This must be a valid email")
              .max(100)
              .required("Email required"),
            password: Yup.string()
              .min(6, "Password must have at least 6 characters")
              .max(50, "Password should not exceed 50 characters")
              .required("Password required"),
          })}
          onSubmit={async (value, { setErrors, setStatus, setSubmitting }) => {
            try {
              setStatus({ success: true });
              setSubmitting(false);
              await identity.login({
                email: value.email,
                password: value.password
              }).then(() => {
                console.log("successly logged in");
                handleClose();
              })
            } catch (err) {
              console.error(err);
              alert("Please try again. No user was found with that email, or the password was invalid.");
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
            finally {
              handleClose();
            }
          }}
        >
          {({
            errors,
            values,
            handleSubmit,
            handleBlur,
            handleChange,
            isSubmitting,
            touched,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <TextField
                error={Boolean(touched.email && errors.email)}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                value={values.email}
                fullWidth
                label="Email Address"
                margin="normal"
                name="email"
                type="email"
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                helperText={touched.password && errors.password}
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                type="password"
                variant="outlined"
              />

              <Button
                sx={{
                  bgcolor: "green",
                  "&:hover": {
                    bgcolor: "darkGreen"
                  }
                }}
                fullWidth
                size="large"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              >
                Log In
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default LoginForm;
