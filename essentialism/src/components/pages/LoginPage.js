import React from "react";
// import { useHistory } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import LoginForm from "../forms/LoginForm";

const LoginPage = () => {
  //   const history = useHistory();

  //   const submit = () => {
  //     history.push("/dashboard");
  //   };

  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
