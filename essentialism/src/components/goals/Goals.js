import React from "react";
// import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGoals, removeGoal } from "../../state/actions";
import Goal from "./Goal";

const Goals = (props) => {
  // console.log(props);
  // useEffect(() => {
  //   console.log("fetching");
  //   props.fetchGoals();
  // }, [props.updated]);

  // if (props.updated) {
  //   props.fetchGoals();
  // }

  const handleDelete = (id) => {
    console.log(id);
    props.removeGoal(id);
  };

  return (
    <>
      <div>
        {" "}
        {props.goals.map((item) => (
          <Goal id={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("goals mapStateToProps", state);
  return {
    goals: state.essentialismReducer.goals,
    isFetching: state.essentialismReducer.isFetching,
    error: state.essentialismReducer.error,
    updated: state.essentialismReducer.updated,
  };
};

export default connect(mapStateToProps, { fetchGoals, removeGoal })(Goals);
