import React, { Fragment } from "react";
import { connect } from "react-redux";
import { buyCandy } from "../redux/candy/candyActions";

function CandyContainer(props) {
  return (
    <Fragment>
      <h1>Number of candy - {props.numOfCandy}</h1>
      <button onClick={props.buyCandy} disabled={props.numOfCandy < 1}>
        Buy Candy
      </button>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  numOfCandy: state.candy.numOfCandy,
});

const mapDispatchToState = (dispatch) => ({
  buyCandy: () => dispatch(buyCandy()),
});

export default connect(mapStateToProps, mapDispatchToState)(CandyContainer);
