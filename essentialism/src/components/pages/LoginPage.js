import React from "react";
// import { useHistory } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import LoginForm from "../forms/LoginForm";
import { Spring } from 'react-spring/renderprops';

const LoginPage = () => {
  //   const history = useHistory();

  //   const submit = () => {
  //     history.push("/dashboard");
  //   };

  return (
    <Spring
    config={{delay: 100, duration: 575}}
    from={{ opacity: 0}}
    to={{ opacity: 1}}
    >
        {props=>(
            <div style={props}>
    <div className="loginPage">
      <LoginForm />
    </div>
    </div>
            )}
            </Spring>
  );
};

export default LoginPage;
