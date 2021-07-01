import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { TextField, InputAdornment, IconButton, Button, Typography } from '@material-ui/core';
import { LockOpen, Visibility, VisibilityOff } from '@material-ui/icons';
import Auth from '../../components/auth';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { login } from '../../redux/actions/authAction';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Not format email")
        .required('Required !'),
      password: Yup.string()
        .required("Required !")
        .min(6, "Greater than or equals 6 characters")
        .max(20, "Less than or equals 20 characters")
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    }
  })

  return (
    <Auth
      title={"Đăng nhập"}
      avatar={<LockOpen />}
    >
      <form
        noValidate
        className={classes.form}
        onSubmit={loginFormik.handleSubmit}
      >
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          label="Email Address"
          required
          name="email"
          autoFocus
          value={loginFormik.values.email}
          onChange={loginFormik.handleChange}
        />
        {loginFormik.touched.email && loginFormik.errors.email && (
          <small className={classes.require} >{loginFormik.errors.email}</small>
        )}
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          label="Password"
          required
          name="password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: <InputAdornment position="end" >
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (<Visibility />) : (<VisibilityOff />)}
              </IconButton>
            </InputAdornment>
          }}
          value={loginFormik.values.password}
          onChange={loginFormik.handleChange}
        />
        {loginFormik.touched.password && loginFormik.errors.password && (
          <small className={classes.require} >{loginFormik.errors.password}</small>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.btnLogin}
        >
          Đăng nhập
        </Button>
      </form>
      <Typography
        variant="body2"
        className={classes.redirectRegister}
      >
        <Link to="/register" >Đăng ký tài khoản tại đây</Link>
      </Typography>
    </Auth>
  )
}

export default Login;
