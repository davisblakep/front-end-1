import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import goalsApi from "../forms/goalsApi";
import isOverdue from "../forms/isOverdue";
import Header from "../forms/Header";
import List from "../forms/List";
import { Spring } from "react-spring/renderprops";
import { logoutNavName } from "../../state/actions";

const Dashboard = (props) => {
  const history = useHistory();

  const addValues = () => {
    history.push("/dashboard/values");
  };
  const submit = () => {
    props.logoutNavName();
    history.push("/");
  };

  const defaultFilter = { overdueOnly: false, includeComplete: false };

  const [items, setItems] = React.useState([]);
  const [filter, setFilter] = React.useState(defaultFilter);
  const [loading, setLoading] = React.useState(true);

  const loadItems = async () => {
    setLoading(true);
    const todoItems = await goalsApi.get();
    setItems(todoItems);
    setLoading(false);
  };

  React.useEffect(() => {
    loadItems();
  }, []);

  const complete = async (id) => {
    const updatedItems = await goalsApi.complete(id);
    setItems(updatedItems);
  };

  const add = async (item) => {
    const updatedItems = await goalsApi.add(item);
    setItems(updatedItems);
  };

  const filteredItems = items.filter(
    (item) =>
      (filter.includeComplete || !item.complete) &&
      (!filter.overdueOnly || isOverdue(item))
  );

  return (
    <Spring
      config={{ delay: 100, duration: 575 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {(props) => (
        <div style={props}>
          {/* <div className="dashboard"> */}

          <div
            className="fluid-container app-container"
            style={{ backgroundColor: "black" }}
          >
            <div className="dashboard-background">
              <Header addItem={add} filter={filter} setFilter={setFilter} />
              {!loading && (
                <div className="list">
                  <List items={filteredItems} completeItem={complete} />
                </div>
              )}
              {loading && (
                <div className="alert alert-info" role="alert">
                  Loading please wait...
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <Button
                  style={{ color: "white", backgroundColor: "black" }}
                  onClick={submit}
                  variant="outlined"
                >
                  Log Out
                </Button>
                <Button
                  style={{ color: "white", backgroundColor: "black" }}
                  onClick={addValues}
                  variant="outlined"
                >
                  Change Values
                </Button>
                <Button
                  style={{ color: "white", backgroundColor: "black" }}
                  variant="outlined"
                >
                  Help
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default connect(null, { logoutNavName })(Dashboard);
