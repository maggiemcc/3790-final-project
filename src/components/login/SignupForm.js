import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useIdentityContext } from "react-netlify-identity-gotrue";

const loginStyle = {
  margin: "5% auto",
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
            password: "password",
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
                style={{
                  backgroundColor: "green",
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
import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import {useIdentityContext} from "react-netlify-identity-gotrue";

const modalStyle = {
  margin: "5% auto",
  width: "80%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const SignupForm = () => {
  const history = useHistory();
  const identity = useIdentityContext();
  const handleClose = () => history.push("/");


  return (
    <div>
      <h1>Signup Page</h1>
      <Box sx={modalStyle}>
        <Formik
          initialValues={{
            userName: "John Doe",
            email: "johndoe@example.com",
            password: "password",
          }}
          validationSchema={Yup.object().shape({
            userName: Yup.string()
              .min(4, "Must be at least 4 characters")
              .max(50, "Must be less than 50 characters")
              .required("User name is required"),
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
              await identity.signup({
                email: value.email, password: value.password, user_metadata: {
                  full_name: value.userName
                }
              }).then(() => {
                handleClose();
                console.log("successfully submitted");
              })
            } catch (err) {
              console.error(err);
              alert(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
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
                error={Boolean(touched.userName && errors.userName)}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.userName && errors.userName}
                value={values.userName}
                fullWidth
                label="User Name"
                margin="normal"
                name="userName"
                type="text"
                variant="outlined"
              />
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
                color="primary"
                fullWidth
                size="large"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              >
                Signup
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default SignupForm;
