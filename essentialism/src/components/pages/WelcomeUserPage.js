import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Spring } from "react-spring/renderprops";

const WelcomeUserPage = () => {
  const history = useHistory();

  const submit = () => {
    history.push("/choose-values");
  };

  return (
    <Spring
      config={{ delay: 50, duration: 1050 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {(props) => (
        <div style={props}>
          <div className="welcomePage">
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "92vh",
              }}
            >
              <h2>Welcome to Essentialism</h2>
              <br />
              <p>Let's add some values that are important to you.</p>
              <Spring
                config={{ delay: 2000, duration: 1050 }}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
              >
                {(props) => (
                  <div style={props}>
                    <Button
                      style={{ color: "white" }}
                      color="primary"
                      onClick={submit}
                      variant="outlined"
                    >
                      Continue
                    </Button>
                  </div>
                )}
              </Spring>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default WelcomeUserPage;
