import React from "react";
// import { useHistory } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import SignupForm from "../forms/SignupForm";
import { Spring } from "react-spring/renderprops";

const CreateUserPage = () => {
  // const history = useHistory();

  // const submit = () => {
  //     history.push('/login')
  // }

  return (
    <Spring
      config={{ delay: 100, duration: 575 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {(props) => (
        <div style={props}>
          <div className="createUserPage">
            <SignupForm />
          </div>
        </div>
      )}
    </Spring>
  );
};

export default CreateUserPage;
